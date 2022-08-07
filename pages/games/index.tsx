import type { NextPage } from "next";
import Head from "next/head";
import GamesList from "../../components/gamesList/GamesList";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lovely Poker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GamesList />
    </>
  );
};

export default Home;
