import { faker } from "@faker-js/faker";
import { TGame } from "../../types/games.types";

const users = [
  { id: 1, name: 'Gareth Bean' },
  { id: 2, name: 'Ali Keys' },
  { id: 3, name: 'John Cena' },
  { id: 4, name: 'Ted Leahy' },
  { id: 5, name: 'John Travolta' },
  { id: 6, name: 'Nicolas Cage' },
];

const sprintNames = [
  'Team Zero Sprint Refinement',
  'Team Pug Sprint Refinement',
  'SMS Automation Refinement',
  'Lovely Refinement',
  'Test Poker Game',
];

export function mkGame(userId: number): TGame {
  // Pick random user for dealer
  const dealer = pickRandom(users);
  const tickets = [1, 2, 3, 4, 5].map(mkTicket);

  return {
    id: userId,
    dealerId: dealer.id,
    name: sprintNames[userId - 1],
    tickets: tickets,
    selectedTicketId: pickRandom(tickets).jiraId,
    players: users.filter(user => user !== dealer),
  }
}

function mkTicket() {
  const jiraIdEnd = Math.round(Math.random() * 10000 + 1);
  const ticketName =
    pickRandom([faker.hacker.verb(), faker.hacker.ingverb()])
    + ' ' + pickRandom(['the', 'a'])
    + ' ' + faker.hacker.adjective()
    + ' ' + pickRandom([faker.hacker.abbreviation(), faker.hacker.noun()]);

  return {
    jiraId: 'AMF-2' + jiraIdEnd,
    name: ticketName,
  }
}

function pickRandom(arr: any) {
  return arr[Math.floor(Math.random() * arr.length)]
}

const dummyGames = [
  {
    id: 1,
    dealerId: 6,
    name: "Team Zero Sprint Refinement",
    tickets: [
      {
        jiraId: "AMF-26417",
        name: "compressing the primary SQL",
      },
      {
        jiraId: "AMF-21664",
        name: "transmitting the optical SDD",
      },
      {
        jiraId: "AMF-24748",
        name: "compress the solid state RSS",
      },
      {
        jiraId: "AMF-29512",
        name: "connecting a neural SAS",
      },
      {
        jiraId: "AMF-22783",
        name: "index the solid state system",
      },
    ],
    selectedTicketId: "AMF-26417",
    players: [
      {
        id: 1,
        name: "Gareth Bean",
      },
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
      {
        id: 4,
        name: "Ted Leahy",
      },
      {
        id: 5,
        name: "John Travolta",
      },
    ],
  },
  {
    id: 2,
    dealerId: 5,
    name: "Team Pug Sprint Refinement",
    tickets: [
      {
        jiraId: "AMF-21309",
        name: "overriding a primary CLI",
      },
      {
        jiraId: "AMF-2807",
        name: "programming a open-source sensor",
      },
      {
        jiraId: "AMF-24848",
        name: "quantify a primary circuit",
      },
      {
        jiraId: "AMF-22836",
        name: "index the redundant hard drive",
      },
      {
        jiraId: "AMF-229",
        name: "compressing a auxiliary transmitter",
      },
    ],
    selectedTicketId: "AMF-22836",
    players: [
      {
        id: 1,
        name: "Gareth Bean",
      },
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
      {
        id: 4,
        name: "Ted Leahy",
      },
      {
        id: 6,
        name: "Nicolas Cage",
      },
    ],
  },
  {
    id: 3,
    dealerId: 1,
    name: "SMS Automation Refinement",
    tickets: [
      {
        jiraId: "AMF-23676",
        name: "generating a open-source port",
      },
      {
        jiraId: "AMF-29953",
        name: "quantifying a 1080p CLI",
      },
      {
        jiraId: "AMF-28315",
        name: "quantify the open-source card",
      },
      {
        jiraId: "AMF-28852",
        name: "index a auxiliary SMTP",
      },
      {
        jiraId: "AMF-26596",
        name: "parsing the cross-platform transmitter",
      },
    ],
    selectedTicketId: "AMF-29953",
    players: [
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
      {
        id: 4,
        name: "Ted Leahy",
      },
      {
        id: 5,
        name: "John Travolta",
      },
      {
        id: 6,
        name: "Nicolas Cage",
      },
    ],
  },
  {
    id: 4,
    dealerId: 4,
    name: "Lovely Refinement",
    tickets: [
      {
        jiraId: "AMF-21117",
        name: "input a redundant application",
      },
      {
        jiraId: "AMF-2604",
        name: "hacking the digital transmitter",
      },
      {
        jiraId: "AMF-24896",
        name: "hacking the redundant card",
      },
      {
        jiraId: "AMF-2788",
        name: "calculate a back-end application",
      },
      {
        jiraId: "AMF-26431",
        name: "overriding a virtual capacitor",
      },
    ],
    selectedTicketId: "AMF-2604",
    players: [
      {
        id: 1,
        name: "Gareth Bean",
      },
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
      {
        id: 5,
        name: "John Travolta",
      },
      {
        id: 6,
        name: "Nicolas Cage",
      },
    ],
  },
  {
    id: 5,
    dealerId: 3,
    name: "Test Poker Game",
    tickets: [
      {
        jiraId: "AMF-24000",
        name: "compressing the auxiliary HEX",
      },
      {
        jiraId: "AMF-24916",
        name: "navigating a back-end pixel",
      },
      {
        jiraId: "AMF-29521",
        name: "hacking a auxiliary panel",
      },
      {
        jiraId: "AMF-25093",
        name: "parsing the auxiliary COM",
      },
      {
        jiraId: "AMF-22327",
        name: "synthesize the virtual driver",
      },
    ],
    selectedTicketId: "AMF-25093",
    players: [
      {
        id: 1,
        name: "Gareth Bean",
      },
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 4,
        name: "Ted Leahy",
      },
      {
        id: 5,
        name: "John Travolta",
      },
      {
        id: 6,
        name: "Nicolas Cage",
      },
    ],
  },
];

export default dummyGames;
