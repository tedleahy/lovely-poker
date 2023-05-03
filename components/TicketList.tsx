import { Ticket } from '@prisma/client';
import styles from './TicketList.module.css';

interface TicketListProps {
  tickets: Ticket[];
  selectedTicketKey: string;
  setSelectedTicketKey: any;
}

const TicketList = (props: TicketListProps) => {
  const { tickets, selectedTicketKey, setSelectedTicketKey } = props;
  
  return (
    <div className={styles.ticketList}>
      <p className={styles.ticketTitle}>Jira Backlog</p>
      {tickets.map(({ id, jiraKey }) => {
        let ticketStyles = styles.ticket;
        if (jiraKey === selectedTicketKey) ticketStyles += ` ${styles.selected}`;

        return (
          <div
            key={id}
            className={ticketStyles}
            onClick={() => setSelectedTicketKey(jiraKey)}
          >
            <p>{jiraKey}: </p>
          </div>
        );
      })}
    </div>
  );
};

export default TicketList;
