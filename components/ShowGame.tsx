import CenteredPage from "../layouts/CenteredPage";
import { Game } from "../types/games.types";
import TicketList from "./TicketList";

interface ShowGameProps {
  game: Game;
}

const ShowGame = ({ game }: ShowGameProps) => {
  return (
    <CenteredPage title={game.name}>
      <TicketList tickets={game.tickets} />
    </CenteredPage>
  );
};

export default ShowGame;
