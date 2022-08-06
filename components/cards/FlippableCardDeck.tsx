import { Card, Stack } from "@mui/material";
import { useState } from "react";
import CardDeck from "./CardDeck";
import styles from "./FlippableCardDeck.module.css";

interface FlippableCard {
  playerId: number;
  firstValue: string;
  flippedValue: string;
}

interface FlippableCardDeckProps {
  cards: FlippableCard[];
  playerVotes: object;
}

const FlippableCardDeck = ({ cards }: FlippableCardDeckProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flippedCards = cards.map(({ playerId, flippedValue }) => ({
    id: playerId,
    value: flippedValue,
  }));

  return isFlipped ? (
    <CardDeck cards={flippedCards} allSelected={true} />
  ) : (
    <Stack direction="row" spacing={1}>
      {cards.map((card) => (
        <Card key={card.playerId} className={styles.card}>
          {card.firstValue}
        </Card>
      ))}
    </Stack>
  );
};

export default FlippableCardDeck;
