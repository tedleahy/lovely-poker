import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Game } from "../types/games.types";

interface GameRowProps {
  game: Game;
}

const GameRow = ({ game }: GameRowProps) => {
  const { name } = game;

  return (
    <Link href={"/games/" + game.id}>
      <a>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Stack sx={{ justifyContent: "space-between" }} direction={"row"}>
            <Typography variant="h4">{name}</Typography>
          </Stack>
        </Paper>
      </a>
    </Link>
  );
};

export default GameRow;
