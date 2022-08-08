import { PrismaClient, Ticket, User } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});
  await prisma.ticket.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.gameUsers.deleteMany({});

  const ticketKeys = [
    "AMF-18886",
    "AMF-18877",
    "AMF-18917",
    "AMF-25757",
    "AMF-23881",
    "AMF-25979",
    "AMF-25017",
    "AMF-25984",
    "AMF-25667",
    "AMF-23156",
    "AMF-23378",
    "AMF-25193",
  ];

  const userNames = [
    "Gareth Bean",
    "Ali Keys",
    "John Cena",
    "Ted Leahy",
    "John Travolta",
    "Nicolas Cage",
  ];

  const game = await prisma.game.create({
    data: {
      name: 'Adestra',
      users: {
        create: userNames.map(name => ({
          user: { create: { name: name } },
          isDealer: name === 'Ali Keys'
        }))
      },
      tickets: {
        create: ticketKeys.map(tk => ( { jiraKey: tk } ))
      }
    }
  });

  console.log('CREATED GAME')
  console.log('============================================\n\n')
  const gameWithIncludes = await prisma.game.findUnique({
    where: { id: game.id },
    include: { users: true, tickets: true, votes: true },
  })
  console.log(gameWithIncludes)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
