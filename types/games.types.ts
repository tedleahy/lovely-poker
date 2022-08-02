export type Game = {
    id: number;
    dealerId: number;
    name: string;
    tickets: Ticket[];
    players: User[];
}

export type Ticket = {
    jiraId: string;
    isCurrentTicket: boolean;
}

export type User = {
    id: number;
    name: string;
}
