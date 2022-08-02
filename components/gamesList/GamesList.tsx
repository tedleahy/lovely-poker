import React from 'react';
import GameRow from '../GameRow';
import dummyGames from './dummyGames';

const GamesList: React.FC = () => {
	return (
        <>
            <h3>Saved Games:</h3>
            {dummyGames.map((game) => (
                <GameRow game={game} /> 
            ))}
        </>
	);
}

export default GamesList;
