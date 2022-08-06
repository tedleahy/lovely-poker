import { Stack } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardDeck from "../../components/cards/CardDeck";
import dummyGames from "../../components/gamesList/dummyGames";
import TicketList from "../../components/TicketList";
import CenteredPage from "../../layouts/CenteredPage";
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

  const storyPoints = ["0", "½", "1", "2", "3", "5", "8", "13", "20", "∞"];
  let cards = [];
  for (let i = 0; i < storyPoints.length; i++) {
    cards.push({
      id: i + 1,
      value: storyPoints[i],
    });
  }

  const setSelectedTicketId = (id: string): void => {
    setGame({ ...game, selectedTicketId: id });
  };

  useEffect(() => {
    if (!router.isReady) return;

    const gameId = parseInt(router.query.id as string);
    setGame(dummyGames[gameId - 1]);
  }, [router.isReady]);

  return (
    <CenteredPage title={game.name}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <TicketList
          tickets={game.tickets}
          selectedTicketId={game.selectedTicketId}
          setSelectedTicketId={setSelectedTicketId}
        />

        <CardDeck cards={cards} />
      </div>
    </CenteredPage>
  );
};

export default ShowGame;
