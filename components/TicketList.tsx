import { Ticket } from '../types/games.types'
import styles from './TicketList.module.css';

interface TicketListProps {
  tickets: Ticket[];
  selectedTicketId: string;
  setSelectedTicketId: any;
}

const TicketList = (props: TicketListProps) => {
  const { tickets, selectedTicketId, setSelectedTicketId } = props;
  
  return (
    <div className={styles.ticketList}>
      <p className={styles.ticketTitle}>Jira Backlog</p>
      {tickets.map(({ jiraId, name }) => {
        let ticketStyles = styles.ticket;
        if (jiraId === selectedTicketId) ticketStyles += ` ${styles.selected}`;

        return (
          <div
            key={jiraId}
            className={ticketStyles}
            onClick={() => setSelectedTicketId(jiraId)}
          >
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TicketList;
