import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dummyGames from "../../components/gamesList/dummyGames";
import TicketList from "../../components/TicketList";
import CenteredPage from "../../layouts/CenteredPage";
import { Game } from "../../types/games.types";

const ShowGame: NextPage = () => {
  const router = useRouter();
  const [game, setGame] = useState({
    id: 0,
    dealerId: 0,
    name: '',
    tickets: [],
    players: [],
  } as Game);

  useEffect(() => {
    if (!router.isReady) return;

    const gameId = parseInt(router.query.id as string);
    setGame(dummyGames[gameId - 1]);
  }, [router.isReady]);

  return (
      <CenteredPage title={game.name}>
        <TicketList tickets={game.tickets} />
      </CenteredPage>
  );
};

export default ShowGame;
