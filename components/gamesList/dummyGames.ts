import { faker } from '@faker-js/faker';
import { Game } from '../../types/games.types';

const users = [
  { id: 1, name: 'Gareth Bean' },
  { id: 2, name: 'Ali Keys' },
  { id: 3, name: 'John Cena' },
];

const sprintNames = [
  'Team Zero Sprint Refinement',
  'Team Pug Sprint Refinement',
  'SMS Automation Refinement',
  'Lovely Refinement',
  'Test Poker Game',
];

export function mkGame(userId: number): Game {
  // Pick random user for dealer
  const dealer = pickRandom(users);

  return {
    id: userId,
    dealerId: dealer.id,
    name: sprintNames[userId - 1],
    tickets: [1, 2, 3, 4, 5].map(mkTicket),
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
    dealerId: 3,
    name: "Team Zero Sprint Refinement",
    tickets: [
      {
        jiraId: "AMF-22704",
        name: "calculating a cross-platform JBOD",
      },
      {
        jiraId: "AMF-28357",
        name: "hacking the wireless USB",
      },
      {
        jiraId: "AMF-281",
        name: "index a primary AGP",
      },
      {
        jiraId: "AMF-21897",
        name: "bypassing a open-source XML",
      },
      {
        jiraId: "AMF-26806",
        name: "copying the redundant hard drive",
      },
    ],
    players: [
      {
        id: 1,
        name: "Gareth Bean",
      },
      {
        id: 2,
        name: "Ali Keys",
      },
    ],
  },
  {
    id: 2,
    dealerId: 1,
    name: "Team Pug Sprint Refinement",
    tickets: [
      {
        jiraId: "AMF-2319",
        name: "copying a digital SSD",
      },
      {
        jiraId: "AMF-29446",
        name: "parsing the solid state JBOD",
      },
      {
        jiraId: "AMF-25096",
        name: "quantify the primary program",
      },
      {
        jiraId: "AMF-27544",
        name: "calculate a multi-byte feed",
      },
      {
        jiraId: "AMF-22440",
        name: "transmitting the primary AGP",
      },
    ],
    players: [
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
    ],
  },
  {
    id: 3,
    dealerId: 1,
    name: "SMS Automation Refinement",
    tickets: [
      {
        jiraId: "AMF-26119",
        name: "quantifying the virtual USB",
      },
      {
        jiraId: "AMF-28248",
        name: "copying the virtual HTTP",
      },
      {
        jiraId: "AMF-2872",
        name: "synthesizing a virtual sensor",
      },
      {
        jiraId: "AMF-24912",
        name: "synthesizing a neural ADP",
      },
      {
        jiraId: "AMF-29349",
        name: "indexing a mobile SQL",
      },
    ],
    players: [
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
    ],
  },
  {
    id: 4,
    dealerId: 1,
    name: "Lovely Refinement",
    tickets: [
      {
        jiraId: "AMF-23926",
        name: "calculate the primary DRAM",
      },
      {
        jiraId: "AMF-25897",
        name: "connecting a multi-byte API",
      },
      {
        jiraId: "AMF-28392",
        name: "overriding the 1080p program",
      },
      {
        jiraId: "AMF-26263",
        name: "quantifying a neural system",
      },
      {
        jiraId: "AMF-29635",
        name: "indexing the haptic XSS",
      },
    ],
    players: [
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
    ],
  },
  {
    id: 5,
    dealerId: 1,
    name: "Test Poker Game",
    tickets: [
      {
        jiraId: "AMF-25785",
        name: "reboot a wireless circuit",
      },
      {
        jiraId: "AMF-21455",
        name: "program a optical CSS",
      },
      {
        jiraId: "AMF-27186",
        name: "reboot a back-end driver",
      },
      {
        jiraId: "AMF-27905",
        name: "compressing a wireless interface",
      },
      {
        jiraId: "AMF-23044",
        name: "synthesizing a primary HDD",
      },
    ],
    players: [
      {
        id: 2,
        name: "Ali Keys",
      },
      {
        id: 3,
        name: "John Cena",
      },
    ],
  },
];

export default dummyGames;
