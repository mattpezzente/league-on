let initialState = {
  modalVisible: false,
  players: [],
  player: {
    "id": 0,
    "name": "---",
    "rank": "---",
    "division": 0,
    "icon": 0,
    "roles": [
      ""
    ],
    "about": "---",
    "timePlayed": {
      "time": "---",
      "type": "---"
    },
    "playstyle": "---",
    "teamExperience": "---"
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PLAYERS':
      return {
        ...state,
        players: action.payload
      }
    case 'LOAD_PLAYER':
      return {
        ...state,
        player: action.payload
      }
    case 'SHOW_FORM_MODAL':
      return {
        ...state,
        modalVisible: action.payload
      }
    default:
      return initialState
  }
}

export default mainReducer