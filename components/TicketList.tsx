import { Ticket } from '../types/games.types'
import styles from './TicketList.module.css';

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList = (props: TicketListProps) => {
  const { tickets } = props;
  
  return (
    <div className={styles.ticketList}>
      <p className={styles.ticketTitle}>Jira Backlog</p>
      {tickets.map(({ jiraId, name }) => (
        <div key={jiraId} className={styles.ticket}>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default TicketList;
