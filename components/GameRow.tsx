import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Game } from '../types/games.types';

interface GameRowProps {
    game: Game;
}

const GameRow = ({ game }: GameRowProps) => {
    const { name } = game;

    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Stack sx={{ justifyContent: 'space-between' }} direction={'row'}>
                <Typography variant='h4'>{name}</Typography>
            </Stack>
        </Paper>
    );
};

export default GameRow;
