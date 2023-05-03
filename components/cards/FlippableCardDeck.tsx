import { Card, Stack } from "@mui/material";
import { useState } from "react";
import CardDeck from "./CardDeck";
import styles from "./FlippableCardDeck.module.css";
import { Vote } from "@prisma/client";
import { FlippableCard, ICard } from "../../types/cards.types";

interface FlippableCardDeckProps {
  cards: FlippableCard[];
  cardIsHighlighted: (a: ICard) => boolean;
}

const FlippableCardDeck = ({
  cards,
  cardIsHighlighted,
}: FlippableCardDeckProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flippedCards = cards.map(({ id, flippedValue }) => ({
    id: id,
    value: flippedValue || 'PASS',
  }));

  return isFlipped ? (
    <CardDeck cards={flippedCards} allSelected={true} />
  ) : (
    <Stack direction="row" spacing={1}>
      {cards.map((card) => {
        const cardClasses =
          styles.card +
          (cardIsHighlighted(card) ? ` ${styles.highlighted}` : "");

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
