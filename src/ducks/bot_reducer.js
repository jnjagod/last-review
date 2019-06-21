const initialState = {
  bots: [],
  winner: {}
};

const SET_BOT = "SET_BOT";
const CLEAR_BOTS = "CLEAR_BOTS";
const BATTLE = "BATTLE";

export function setBot(bot) {
  return {
    type: SET_BOT,
    payload: bot
  };
}

export function clearBots() {
  return {
    type: CLEAR_BOTS
  };
}

export function battle() {
  return {
    type: BATTLE
  };
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOT:
      let bots = [...state.bots, action.payload];
      return { ...state, bots };
    case CLEAR_BOTS:
      return { ...state, ...initialState };

    case BATTLE:
      let bot1 = state.bots[0];
      let bot2 = state.bots[1];
      let winner = {};
      if (bot1.health < bot2.attack) {
        winner = bot2;
      } else {
        winner = bot1;
      }
      return { ...state, winner };
    default:
      return state;
  }
}
