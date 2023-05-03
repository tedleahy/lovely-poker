import { Stack } from "@mui/material";
import { Game } from "@prisma/client";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import GameRow from "../../components/GameRow";
import CenteredPage from "../../layouts/CenteredPage";
import prisma from "../../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  const games = await prisma.game.findMany({
    select: { id: true, name: true }
  });

  return {
    props: { games: games }
  };
};

interface GamesIndexProps {
  games: Game[]
}

const GamesIndex = (props: GamesIndexProps) => {
  return (
    <>
      <Head>
        <title>Lovely Poker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CenteredPage title={"Saved Games"}>
        <Stack spacing={2}>
          {props.games.map((game) => (
            <GameRow game={game} />
          ))}
        </Stack>
      </CenteredPage>
    </>
  );
};

export default GamesIndex;
