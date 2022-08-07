import { Card, Stack } from "@mui/material";
import { useState } from "react";
import { FlippableCard } from "../../types/cards.types";
import CardDeck from "./CardDeck";
import styles from "./FlippableCardDeck.module.css";

interface FlippableCardDeckProps {
  cards: FlippableCard[];
  cardIsHighlighted: (a: FlippableCard) => boolean;
}

const FlippableCardDeck = ({ cards, cardIsHighlighted }: FlippableCardDeckProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flippedCards = cards.map(({ id, flippedValue }) => ({
    id: id,
    value: flippedValue,
  }));

  return isFlipped ? (
    <CardDeck cards={flippedCards} allSelected={true} />
  ) : (
    <Stack direction="row" spacing={1}>
      {cards.map(card => {
        const cardClasses = styles.card
          + (cardIsHighlighted(card) ? ` ${styles.highlighted}` : '');

        return (
          <Card key={card.id} className={cardClasses}>
            {card.value}
          </Card>
        );
      })}
    </Stack>
  );
};

export default FlippableCardDeck;
