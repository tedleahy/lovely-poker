export type Game = {
    id: number;
    dealerId: number;
    name: string;
    tickets: Ticket[];
    players: User[];
}

export type Ticket = {
    jiraId: string;
    name: string;
}

export type User = {
    id: number;
    name: string;
}
