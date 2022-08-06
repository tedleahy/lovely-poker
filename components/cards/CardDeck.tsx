import { Card, Stack } from "@mui/material";
import { useState } from "react";
import styles from "./CardDeck.module.css";

interface ICard {
	id: number;
	value: string;
}

interface CardDeckProps {
  cards: ICard[];
}

const CardDeck = ({cards}: CardDeckProps) => {
  const [selectedCardId, setSelectedCardId] = useState(0);

  const getCardClasses = (card: ICard): string => {
    return styles.cardFace
      + (card.id === selectedCardId ? ` ${styles.selected}` : '');
  }

  return (
    <Stack
      style={{ marginTop: "auto" }}
      direction="row"
      spacing={1}
    >
      {cards.map((card) => (
        <Card key={card.id} className={styles.card} onClick={() => setSelectedCardId(card.id)}>
          <div className={getCardClasses(card)}>
            {card.value}
          </div>
        </Card>
      ))}
    </Stack>
  );
};

export default CardDeck;
