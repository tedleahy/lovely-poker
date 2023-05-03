import { Box } from "@mui/system";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import CardDeck from "../../components/cards/CardDeck";
import FlippableCardDeck from "../../components/cards/FlippableCardDeck";
import CenteredPage from "../../layouts/CenteredPage";
// import { GameWithUsersAndVotes } from "../../types/games.types";
import prisma from '../../lib/prisma';
import { ICard } from "../../types/cards.types";
import { GameWithUsersAndVotes } from "../../types/games.types";

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const id = String(params?.id);
  if (!id) return { notFound: true };

  let game = await prisma.game.findUnique({
    where: { id: id },
    include: {
      users: { include: { user: true } },
      votes: { include: { user: true } },
    },
  });
  
  console.log("\n\n\n")
  console.log(game)
  console.log("\n\n\n")

  return {
    props: {
      gameData: JSON.parse(JSON.stringify(game))
    }
  };
}

type ShowGameProps = {
  gameData: GameWithUsersAndVotes;
}

const ShowGame = ({ gameData }: ShowGameProps) => {
  const [game, setGame] = useState(gameData);

  console.log(game)

  const storyPoints = ["?", "½", "1", "2", "3", "5", "8", "13", "20", "∞"];
  let votingCards = storyPoints.map((sp, i) => ({
      id: (i + 1).toString(),
      value: sp,
  }));

  const votesForSelectedTicket = game.votes.filter(vote => vote.ticketKey === game.selectedTicketKey);
  const playerCards = votesForSelectedTicket.map(vote => ({
    id: vote.id,
    value: vote.user.name,
    // value: 'ID: ' + vote.userId,
    flippedValue: vote.storyPoints.toString(),
  }));

  const playerCardIsHighlighted = (card: ICard): boolean => {
    return true;
  };

  return (
    typeof game === 'undefined' ? 'Loading...' :
    <CenteredPage title={game.name}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* <TicketList
          tickets={game.tickets}
        /> */}

        <Box sx={{ mx: "auto" }}>
          <FlippableCardDeck cards={playerCards} cardIsHighlighted={playerCardIsHighlighted} />
        </Box>

        <Box sx={{ mx: "auto", mt: "auto" }}>
          <CardDeck cards={votingCards} />
        </Box>
      </div>
    </CenteredPage>
  );
};

export default ShowGame;
