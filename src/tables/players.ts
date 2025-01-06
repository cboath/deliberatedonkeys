export type Players = {
    playerId: number;
    firstName: string;
    lastName: string;
}

export const players = {
    name: "Players",
    endpoint: "players",
    columns: [
        { field: "firstName", headerName: "First Name" },
        { field: "lastName", headerName: "Last Name" },
    ]
}