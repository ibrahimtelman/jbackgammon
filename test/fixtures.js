import exists from '../src/exists'
import Move from '../src/move'
import Bar from '../src/bar'
import OffBoard from '../src/off_board'
import Point from '../src/point'
import PointSet from '../src/point_set'
import GameState from '../src/game_state'
import Match from '../src/match'

const fixtureDefinitions = {
  bar: {
    klass: Bar,
    args: { pieces: [] } 
  },
  gameState: {
    klass: GameState,
    args: {
      "current_player_number": 1,
      "current_phase": "move",
      "dice": [
        { "number": null },
        { "number": null }
      ],
      "bar": { "pieces": [] },
      "points": [
        { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
        { "number": 2, "pieces": [] },
        { "number": 3, "pieces": [] },
        { "number": 4, "pieces": [] },
        { "number": 5, "pieces": [] },
        { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 7, "pieces": [] },
        { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 9, "pieces": [] },
        { "number": 10, "pieces": [] },
        { "number": 11, "pieces": [] },
        { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
        { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 14, "pieces": [] },
        { "number": 15, "pieces": [] },
        { "number": 16, "pieces": [] },
        { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
        { "number": 18, "pieces": [] },
        { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
        { "number": 20, "pieces": [] },
        { "number": 21, "pieces": [] },
        { "number": 22, "pieces": [] },
        { "number": 23, "pieces": [] },
        { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
      ],
      "off_board": { "pieces": [] }
    }
  },
  pointSelectedGameState: {
    klass: GameState,
    args: {
      "current_player_number": 1,
      "current_phase": "move",
      "dice": [
        { "number": 1 },
        { "number": 6 }
      ],
      "bar": { "pieces": [] },
      "points": [
        { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ], "selected": true },
        { "number": 2, "pieces": [] },
        { "number": 3, "pieces": [] },
        { "number": 4, "pieces": [] },
        { "number": 5, "pieces": [] },
        { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 7, "pieces": [] },
        { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 9, "pieces": [] },
        { "number": 10, "pieces": [] },
        { "number": 11, "pieces": [] },
        { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
        { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 14, "pieces": [] },
        { "number": 15, "pieces": [] },
        { "number": 16, "pieces": [] },
        { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
        { "number": 18, "pieces": [] },
        { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
        { "number": 20, "pieces": [] },
        { "number": 21, "pieces": [] },
        { "number": 22, "pieces": [] },
        { "number": 23, "pieces": [] },
        { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
      ],
      "off_board": { "pieces": [] }
    }
  },
  blotGameState: {
    klass: GameState,
    args: {
      "current_player_number": 1,
      "current_phase": "move",
      "dice": [
        { "number": 1 },
        { "number": 2 }
      ],
      "bar": { "pieces": [] },
      "points": [
        { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ], "selected": true },
        { "number": 2, "pieces": [ { "owner": 2 } ] },
        { "number": 3, "pieces": [] },
        { "number": 4, "pieces": [] },
        { "number": 5, "pieces": [] },
        { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 7, "pieces": [] },
        { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 9, "pieces": [] },
        { "number": 10, "pieces": [] },
        { "number": 11, "pieces": [] },
        { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
        { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
        { "number": 14, "pieces": [] },
        { "number": 15, "pieces": [] },
        { "number": 16, "pieces": [] },
        { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
        { "number": 18, "pieces": [] },
        { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
        { "number": 20, "pieces": [] },
        { "number": 21, "pieces": [] },
        { "number": 22, "pieces": [] },
        { "number": 23, "pieces": [] },
        { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
      ],
      "off_board": { "pieces": [] }
    }
  },
  blockedGameState: {
    klass: GameState,
    args: {
      "current_player_number": 1,
      "current_phase": "move",
      "dice": [
        { "number": 1 },
        { "number": 2 }
      ],
      "bar": { "pieces": [] },
      "points": [
        { "number": 1, "pieces": [ { "owner": 1 } ] },
        { "number": 2, "pieces": [ { "owner": 2 }, { "owner": 2 } ] },
        { "number": 3, "pieces": [ { "owner": 2 }, { "owner": 2 } ] },
        { "number": 4, "pieces": [] },
        { "number": 5, "pieces": [] },
        { "number": 6, "pieces": [] },
        { "number": 7, "pieces": [] },
        { "number": 8, "pieces": [] },
        { "number": 9, "pieces": [] },
        { "number": 10, "pieces": [] },
        { "number": 11, "pieces": [] },
        { "number": 12, "pieces": [] },
        { "number": 13, "pieces": [] },
        { "number": 14, "pieces": [] },
        { "number": 15, "pieces": [] },
        { "number": 16, "pieces": [] },
        { "number": 17, "pieces": [] },
        { "number": 18, "pieces": [] },
        { "number": 19, "pieces": [] },
        { "number": 20, "pieces": [] },
        { "number": 21, "pieces": [] },
        { "number": 22, "pieces": [] },
        { "number": 23, "pieces": [] },
        { "number": 24, "pieces": [] }
      ],
      "off_board": { "pieces": [] }
    }
  },
  bearOffGameState: {
    klass: GameState,
    args: {
      "current_player_number": 1,
      "current_phase": "move",
      "dice": [
        { "number": 6 },
        { "number": 6 }
      ],
      "bar": { "pieces": [] },
      "points": [
        { "number": 1, "pieces": [] },
        { "number": 2, "pieces": [] },
        { "number": 3, "pieces": [] },
        { "number": 4, "pieces": [] },
        { "number": 5, "pieces": [] },
        { "number": 6, "pieces": [] },
        { "number": 7, "pieces": [] },
        { "number": 8, "pieces": [] },
        { "number": 9, "pieces": [] },
        { "number": 10, "pieces": [] },
        { "number": 11, "pieces": [] },
        { "number": 12, "pieces": [] },
        { "number": 13, "pieces": [] },
        { "number": 14, "pieces": [] },
        { "number": 15, "pieces": [] },
        { "number": 16, "pieces": [] },
        { "number": 17, "pieces": [] },
        { "number": 18, "pieces": [] },
        { "number": 19, "pieces": [{ "owner": 1 }, { "owner": 1 }] },
        { "number": 20, "pieces": [{ "owner": 1 }, { "owner": 1 }] },
        { "number": 21, "pieces": [] },
        { "number": 22, "pieces": [] },
        { "number": 23, "pieces": [] },
        { "number": 24, "pieces": [] }
      ],
      "off_board": { "pieces": [] }
    }
  },
  allPiecesOffBoardGameState: {
    klass: GameState,
    args: {
      "current_player_number": 1,
      "current_phase": "move",
      "dice": [
        { "number": 6 },
        { "number": 6 }
      ],
      "bar": { "pieces": [] },
      "points": [
        { "number": 1, "pieces": [] },
        { "number": 2, "pieces": [] },
        { "number": 3, "pieces": [] },
        { "number": 4, "pieces": [] },
        { "number": 5, "pieces": [] },
        { "number": 6, "pieces": [] },
        { "number": 7, "pieces": [] },
        { "number": 8, "pieces": [] },
        { "number": 9, "pieces": [] },
        { "number": 10, "pieces": [] },
        { "number": 11, "pieces": [] },
        { "number": 12, "pieces": [] },
        { "number": 13, "pieces": [] },
        { "number": 14, "pieces": [] },
        { "number": 15, "pieces": [] },
        { "number": 16, "pieces": [] },
        { "number": 17, "pieces": [] },
        { "number": 18, "pieces": [] },
        { "number": 19, "pieces": [{ "owner": 2 }, { "owner": 2 }] },
        { "number": 20, "pieces": [{ "owner": 2 }, { "owner": 2 }] },
        { "number": 21, "pieces": [] },
        { "number": 22, "pieces": [] },
        { "number": 23, "pieces": [] },
        { "number": 24, "pieces": [] }
      ],
      "off_board": {
        "pieces": [
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 },
          { "owner": 1 }
        ]
      }
    }
  },
  match: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "move",
        "dice": [
          { "number": null },
          { "number": null }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
          { "number": 2, "pieces": [] },
          { "number": 3, "pieces": [] },
          { "number": 4, "pieces": [] },
          { "number": 5, "pieces": [] },
          { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 7, "pieces": [] },
          { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
          { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
        ],
        "off_board": { "pieces": [] }
      },
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    } 
  },
  rollMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "roll",
        "dice": [
          { "number": null },
          { "number": null }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
          { "number": 2, "pieces": [] },
          { "number": 3, "pieces": [] },
          { "number": 4, "pieces": [] },
          { "number": 5, "pieces": [] },
          { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 7, "pieces": [] },
          { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
          { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
        ],
        "off_board": { "pieces": [] }
      },
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    }
  },
  moveMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "move",
        "dice": [
          { "number": 1, used: false },
          { "number": 2, used: false }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
          { "number": 2, "pieces": [] },
          { "number": 3, "pieces": [] },
          { "number": 4, "pieces": [] },
          { "number": 5, "pieces": [] },
          { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 7, "pieces": [] },
          { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
          { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
        ],
        "off_board": { "pieces": [] }
      },
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    }
  },
  selectedMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "move",
        "dice": [
          { "number": 1, used: false },
          { "number": 2, used: false }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, selected: true, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
          { "number": 2, "pieces": [] },
          { "number": 3, "pieces": [] },
          { "number": 4, "pieces": [] },
          { "number": 5, "pieces": [] },
          { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 7, "pieces": [] },
          { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
          { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
        ],
        "off_board": { "pieces": [] }
      },
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    }
  },
  completedMoveMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "move",
        "dice": [
          { "number": 1, used: true },
          { "number": 2, used: false }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, selected: true, "pieces": [ { "owner": 1 } ] },
          { "number": 2, "pieces": [ { "owner": 1 } ] },
          { "number": 3, "pieces": [] },
          { "number": 4, "pieces": [] },
          { "number": 5, "pieces": [] },
          { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 7, "pieces": [] },
          { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
          { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
        ],
        "off_board": { "pieces": [] }
      },
      move_list: [
        { from: 1, to: 2 }
      ],
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    }
  },
  allPiecesOffBoardMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "move",
        "dice": [
          { "number": 1, used: false },
          { "number": 2, used: false }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, "pieces": [ { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 } ] },
          { "number": 2, "pieces": [ { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 } ] },
          { "number": 3, "pieces": [ { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 } ] },
          { "number": 4, "pieces": [ { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 } ] },
          { "number": 5, "pieces": [ { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 }, { owner: 2 } ] },
          { "number": 6, "pieces": [] },
          { "number": 7, "pieces": [] },
          { "number": 8, "pieces": [] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [] },
          { "number": 13, "pieces": [] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, selected: true, "pieces": [ { owner: 1 } ] }
        ],
        "off_board": { 
          "pieces": [ 
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 },
            { owner: 1 }
          ] 
        }
      },
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    }
  },
  noMovesMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "move",
        "dice": [
          { "number": 1, used: false },
          { "number": 2, used: false }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
          { "number": 2, "pieces": [ { "owner": 2 }, { "owner": 2 } ] },
          { "number": 3, "pieces": [ { "owner": 2 }, { "owner": 2 } ] },
          { "number": 4, "pieces": [] },
          { "number": 5, "pieces": [] },
          { "number": 6, "pieces": [] },
          { "number": 7, "pieces": [] },
          { "number": 8, "pieces": [] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [] },
          { "number": 13, "pieces": [] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, "pieces": [] }
        ],
        "off_board": { "pieces": [] }
      },
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    }
  },
  singleMoveMatch: {
    klass: Match,
    args: {
      id: 1,
      game_state: { 
        "current_player_number": 1,
        "current_phase": "move",
        "dice": [
          { "number": 1, used: false },
          { "number": 2, used: true }
        ],
        "bar": { "pieces": [] },
        "points": [
          { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
          { "number": 2, "pieces": [ { "owner": 2 }, { "owner": 2 } ] },
          { "number": 3, "pieces": [ { "owner": 2 }, { "owner": 2 } ] },
          { "number": 4, "pieces": [] },
          { "number": 5, "pieces": [] },
          { "number": 6, "pieces": [ { owner: 1 } ] },
          { "number": 7, "pieces": [ { owner: 2 }, { owner: 2 } ] },
          { "number": 8, "pieces": [] },
          { "number": 9, "pieces": [] },
          { "number": 10, "pieces": [] },
          { "number": 11, "pieces": [] },
          { "number": 12, "pieces": [] },
          { "number": 13, "pieces": [] },
          { "number": 14, "pieces": [] },
          { "number": 15, "pieces": [] },
          { "number": 16, "pieces": [] },
          { "number": 17, "pieces": [] },
          { "number": 18, "pieces": [] },
          { "number": 19, "pieces": [] },
          { "number": 20, "pieces": [] },
          { "number": 21, "pieces": [] },
          { "number": 22, "pieces": [] },
          { "number": 23, "pieces": [] },
          { "number": 24, "pieces": [] }
        ],
        "off_board": { "pieces": [] }
      },
      move_list: [
        { from: 4, to: 6 }
      ],
      players: [
        { number: 1, name: 'aaa' },
        { number: 2, name: 'bbb' }
      ],
      winner: null
    }
  },
  move: {
    klass: Move,
    args: {
      from: null,
      to: null,
      moveList: [],
      user: { playerNumber: 1 },
      gameState: {},
    }
  },
  offBoard: {
    klass: OffBoard,
    args: {
      pieces: []
    }
  },
  point: {
    klass: Point,
    args: {
      number: 1,
      pieces: [
        { owner: 1 }
      ]
    }
  },
  pointSet: {
    klass: PointSet,
    args: [ 
      { "number": 1, "pieces": [ { "owner": 1 }, { "owner": 1 } ] },
      { "number": 2, "pieces": [] },
      { "number": 3, "pieces": [] },
      { "number": 4, "pieces": [] },
      { "number": 5, "pieces": [] },
      { "number": 6, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
      { "number": 7, "pieces": [] },
      { "number": 8, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
      { "number": 9, "pieces": [] },
      { "number": 10, "pieces": [] },
      { "number": 11, "pieces": [] },
      { "number": 12, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 } ] },
      { "number": 13, "pieces": [ { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 }, { "owner": 2 } ] },
      { "number": 14, "pieces": [] },
      { "number": 15, "pieces": [] },
      { "number": 16, "pieces": [] },
      { "number": 17, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, ] },
      { "number": 18, "pieces": [] },
      { "number": 19, "pieces": [ { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1 }, { "owner": 1} ] },
      { "number": 20, "pieces": [] },
      { "number": 21, "pieces": [] },
      { "number": 22, "pieces": [] },
      { "number": 23, "pieces": [] },
      { "number": 24, "pieces": [ { "owner": 2 }, { "owner": 2 } ] }
    ]
  } 
};


const deepMerge = function(aObject, bObject) {
  let cObject = {};

  let keys = [...new Set([...Object.keys(aObject), ...Object.keys(bObject)])];

  keys.forEach(function(k) {
    let aValue = undefined;
    let bValue = undefined;
    let cValue = undefined;

    aValue = aObject[k];
    bValue = bObject[k];

    if (exists(bValue)) {
      if (bValue.constructor === Object) {
        cValue = deepMerge(aValue, bValue); 
      } else { 
        cValue = bValue;
      }
    } else {
      cValue = aValue;
    }

    cObject[k] = cValue;
  });
  return cObject;
};

const fixtures = function(name, customArgs) {
  let definition = fixtureDefinitions[name];
  let args = undefined;

  if (definition.args.constructor === Array) {
    if (exists(customArgs)) {
      args = customArgs;
    } else {
      args = definition.args;
    }
  } else {
    if (exists(customArgs)) {
      args = deepMerge(definition.args, customArgs);
    } else {
      args = Object.assign({}, definition.args);
    }
  }

  return new definition.klass(args);
};

export default fixtures

