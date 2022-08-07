import { Box } from "@mui/system";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardDeck from "../../components/cards/CardDeck";
import FlippableCardDeck from "../../components/cards/FlippableCardDeck";
import dummyGames from "../../components/gamesList/dummyGames";
import TicketList from "../../components/TicketList";
import CenteredPage from "../../layouts/CenteredPage";
import { FlippableCard } from "../../types/cards.types";
import { Game } from "../../types/games.types";

const ShowGame: NextPage = () => {
  const router = useRouter();
  const [game, setGame] = useState({
    id: 0,
    dealerId: 0,
    name: "",
    tickets: [],
    selectedTicketId: "",
    players: [],
  } as Game);
  // {playerName: playerVote}
  const [playerVotes, setPlayerVotes] = useState({} as { [key: string]: string; });

  const storyPoints = ["?", "½", "1", "2", "3", "5", "8", "13", "20", "∞"];
  let votingCards = storyPoints.map((sp, i) => (
    {
      id: i + 1,
      value: sp,
    }
  ));

  let playerCards = game.players.map(player => (
    {
      id: player.id,
      value: player.name,
      flippedValue: 'PASS',
    }
  ));

  const setSelectedTicketId = (id: string): void => {
    setGame({ ...game, selectedTicketId: id });
  };

  useEffect(() => {
    if (!router.isReady) return;

    const gameId = parseInt(router.query.id as string);
    setGame(dummyGames[gameId - 1]);
  }, [router.isReady]);

  // highlight if the player for that card has a vote
  const playerCardIsHighlighted = (card: FlippableCard): boolean => {
    return typeof (playerVotes[card.value]) !== 'undefined';
  };

  return (
    <CenteredPage title={game.name}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <TicketList
          tickets={game.tickets}
          selectedTicketId={game.selectedTicketId}
          setSelectedTicketId={setSelectedTicketId}
        />

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
