import { faker } from "@faker-js/faker";
import { Game } from "../../types/games.types";

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
    "id": 1,
    "dealerId": 1,
    "name": "Team Zero Sprint Refinement",
    "tickets": [
      {
        "jiraId": "AMF-21239",
        "name": "navigate the mobile RSS"
      },
      {
        "jiraId": "AMF-22039",
        "name": "bypass a virtual HEX"
      },
      {
        "jiraId": "AMF-28221",
        "name": "calculating the mobile pixel"
      },
      {
        "jiraId": "AMF-22618",
        "name": "navigating the virtual port"
      },
      {
        "jiraId": "AMF-29143",
        "name": "compress the neural hard drive"
      }
    ],
    "selectedTicketId": "AMF-28221",
    "players": [
      {
        "id": 2,
        "name": "Ali Keys"
      },
      {
        "id": 3,
        "name": "John Cena"
      }
    ]
  },
  {
    "id": 2,
    "dealerId": 1,
    "name": "Team Pug Sprint Refinement",
    "tickets": [
      {
        "jiraId": "AMF-24825",
        "name": "connecting a cross-platform array"
      },
      {
        "jiraId": "AMF-22829",
        "name": "quantifying the optical pixel"
      },
      {
        "jiraId": "AMF-27611",
        "name": "copy a bluetooth SDD"
      },
      {
        "jiraId": "AMF-21570",
        "name": "navigating the neural capacitor"
      },
      {
        "jiraId": "AMF-27442",
        "name": "transmitting the cross-platform THX"
      }
    ],
    "selectedTicketId": "AMF-21570",
    "players": [
      {
        "id": 2,
        "name": "Ali Keys"
      },
      {
        "id": 3,
        "name": "John Cena"
      }
    ]
  },
  {
    "id": 3,
    "dealerId": 2,
    "name": "SMS Automation Refinement",
    "tickets": [
      {
        "jiraId": "AMF-27750",
        "name": "calculating a primary interface"
      },
      {
        "jiraId": "AMF-26754",
        "name": "indexing a haptic pixel"
      },
      {
        "jiraId": "AMF-2654",
        "name": "parsing a open-source API"
      },
      {
        "jiraId": "AMF-25217",
        "name": "transmitting a haptic OCR"
      },
      {
        "jiraId": "AMF-23059",
        "name": "generate the optical IB"
      }
    ],
    "selectedTicketId": "AMF-26754",
    "players": [
      {
        "id": 1,
        "name": "Gareth Bean"
      },
      {
        "id": 3,
        "name": "John Cena"
      }
    ]
  },
  {
    "id": 4,
    "dealerId": 2,
    "name": "Lovely Refinement",
    "tickets": [
      {
        "jiraId": "AMF-26037",
        "name": "compressing a online JSON"
      },
      {
        "jiraId": "AMF-29702",
        "name": "backing up a neural bus"
      },
      {
        "jiraId": "AMF-28328",
        "name": "calculate a haptic port"
      },
      {
        "jiraId": "AMF-23219",
        "name": "backing up the cross-platform UDP"
      },
      {
        "jiraId": "AMF-26307",
        "name": "hacking a digital RAM"
      }
    ],
    "selectedTicketId": "AMF-23219",
    "players": [
      {
        "id": 1,
        "name": "Gareth Bean"
      },
      {
        "id": 3,
        "name": "John Cena"
      }
    ]
  },
  {
    "id": 5,
    "dealerId": 3,
    "name": "Test Poker Game",
    "tickets": [
      {
        "jiraId": "AMF-2348",
        "name": "copying the mobile hard drive"
      },
      {
        "jiraId": "AMF-26742",
        "name": "compressing the neural application"
      },
      {
        "jiraId": "AMF-24315",
        "name": "override the mobile AGP"
      },
      {
        "jiraId": "AMF-24544",
        "name": "copy a multi-byte array"
      },
      {
        "jiraId": "AMF-23322",
        "name": "navigate the cross-platform microchip"
      }
    ],
    "selectedTicketId": "AMF-23322",
    "players": [
      {
        "id": 1,
        "name": "Gareth Bean"
      },
      {
        "id": 2,
        "name": "Ali Keys"
      }
    ]
  }
];

export default dummyGames;
