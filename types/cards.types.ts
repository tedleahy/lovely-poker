import { Game, User } from "@prisma/client";

// I-prefix to avoid conflict with material-ui's <Card> component
export interface ICard {
  id: string;
  value: string;
}

export interface FlippableCard extends ICard {
  flippedValue: string;
}
