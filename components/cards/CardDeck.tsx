import { Card, Stack } from "@mui/material";
import React, { useState } from "react";
import { ICard } from "../../types/cards.types";
import styles from "./CardDeck.module.css";

interface CardDeckProps {
  cards: ICard[];
  allSelected?: boolean;
}

const CardDeck = ({cards, allSelected}: CardDeckProps) => {
  const [selectedCardId, setSelectedCardId] = useState(0);

  const getCardClasses = (card: ICard): string => {
    const cardIsSelected = card.id === selectedCardId;

    return styles.cardFace
      + (cardIsSelected || allSelected ? ` ${styles.selected}` : '');
  }

  const handleCardClick = (card: ICard) => {
    if (!allSelected) {
      setSelectedCardId(card.id);
    }
  }

  return (
    <Stack direction="row" spacing={1}>
      {cards.map(card => (
        <Card key={card.id} className={styles.card} onClick={() => handleCardClick(card)}>
          <div className={getCardClasses(card)}>
            {card.value}
          </div>
        </Card>
      ))}
    </Stack>
  );
};

export default CardDeck;
