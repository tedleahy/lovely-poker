import { Stack } from '@mui/material';
import React from 'react';
import CenteredPage from '../../layouts/CenteredPage';
import GameRow from '../GameRow';
import dummyGames, { mkGame } from './dummyGames';

const GamesList: React.FC = () => {
  console.log([1,2,3,4,5].map(mkGame))
  
	return (
    <CenteredPage title={"Saved Games"}>
      <Stack spacing={2}>
        {dummyGames.map((game) => (
          <GameRow game={game} />
        ))}
      </Stack>
    </CenteredPage>
  );
}

export default GamesList;
