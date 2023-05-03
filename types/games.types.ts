import { Prisma, Game, GameUser, Vote, User } from "@prisma/client";

export type GameWithUsers = Prisma.GameGetPayload<{
    include: { users: true }
}>

// export type GameWithUsersAndVotes = Prisma.GameGetPayload<{
//     include: {
//       users: { include: { user: true } },
//       votes: { include: { user: true } },
//     }
// }>

export type GameWithUsersAndVotes = {
    Game & {
    users: (GameUser & {
        user: User;
    })[];
    votes: (Vote & {
        user: User;
    })[];
}
}
