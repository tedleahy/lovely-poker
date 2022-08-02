import type { NextPage } from 'next'
import Head from 'next/head'
import GamesList from '../components/gamesList/GamesList'
import CenteredPage from '../layouts/CenteredPage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lovely Poker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CenteredPage title={"Saved Games"}>
        <GamesList />
      </CenteredPage>
    </>
  );
}

export default Home;
