import type { NextPage } from 'next'
import Head from 'next/head'
import GamesList from '../components/gamesList/GamesList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lovely Poker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Lovely Poker</h1>

      <GamesList />
    </div>
  )
}

export default Home
