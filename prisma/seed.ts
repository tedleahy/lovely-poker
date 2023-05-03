import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.gameUser.deleteMany({});
  await prisma.vote.deleteMany({});
  await prisma.game.deleteMany({});
  await prisma.user.deleteMany({});

  const userNames = [
    "Ali Keys",
    "Ted Leahy",
    "John Cena",
    "John Travolta",
    "Nicolas Cage",
  ];

  const emailFromUserName = (name: String) => (
    name.toLowerCase().replace(/\s/, '_') + '@uplandsoftware.com'
  );

  const users = userNames.map(async (name) => {
    console.log(`Creating user ${name}...`);
    const user = await prisma.user.create({
      data: {
        fullName: name,
        email: emailFromUserName(name),
      } 
    });
    
    console.log(`User '${user.fullName}' successfully.`);
    return user;
  });

  const ticketKeys = [
    'AMF-24379',
    'AMF-25781',
    'AMF-19807',
    'AMF-24756',
    'AMF-21035',
    'AMF-22398',
    'AMF-26456',
    'AMF-24601',
    'AMF-24718',
    'AMF-22675',
  ];

  const gameName = 'Adestra Team Zero Refinements';
  console.log(`Creating game '${gameName}'...`);
  const game = await prisma.game.create({
    data: {
      name: gameName, 
      boardId: 759,
      selectedTicketKey: ticketKeys[0],
    }
  });
  console.log(`Game '${gameName}' created succesfully.`)

  // Add users to the game
  users.map(async (user) => {
    console.log(`Adding user '${(await user).fullName}' to game '${game.name}'...`)
    await prisma.gameUser.create({
      data: {
        gameId: game.id,
        userId: (await user).id,
        isDealer: (await user).fullName === 'Ali Keys',
      }
    });
    console.log(`User '${(await user).fullName}' succesfully added to game '${game.name}'.`)
  });

  const possibleStoryPoints = [1, 3, 5, 8, 13, 20];
  const randomStoryPoints = () => {
    const randomIndex = Math.floor(Math.random() * possibleStoryPoints.length);
    return possibleStoryPoints[randomIndex];
  };

  ticketKeys.map(async (ticketKey) => {
    users.map(async (user) => {
      console.log(`Adding vote for game '${game.name}' by user '${(await user).fullName}'...`);
      const vote = await prisma.vote.create({
        data: {
          gameId: game.id,
          userId: (await user).id,
          ticketKey: ticketKey,
          storyPoints: randomStoryPoints(),
        }
      });
      console.log(`Vote for ${vote.storyPoints} successfully added to game '${game.name}' for User '${(await user).fullName}'.`);
    })
  });
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
