// I-prefix to avoid conflict with material-ui's <Card> component
export interface ICard {
  id: number;
  value: string;
}

export interface FlippableCard extends ICard {
  flippedValue: string;
}
