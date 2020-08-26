const ADD_NEW_TERMINAL = "terminal-reducer/ADD_NEW_TERMINAL";
const DELETE_TERMINAL = "terminal-reducer/DELETE_TERMINAL";

let initialState = {
  terminals: [],
};

const terminalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TERMINAL:
      return {
        ...state,
        terminals: [
          ...state.terminals,
          {
            id: !state.terminals.length
              ? 0
              : state.terminals[state.terminals.length - 1].id + 1,
            name: action.name,
            description: action.description,
          },
        ],
      };

    case DELETE_TERMINAL:
      return {
        ...state,
        terminals: [...state.terminals].filter(
          (terminal) => terminal.id !== action.terminalId
        ),
      };

    default:
      return state;
  }
};

export const addNewTerminal = (name, description) => {
  return { type: ADD_NEW_TERMINAL, name, description };
};

export const deleteTerminal = (terminalId) => {
  return { type: DELETE_TERMINAL, terminalId };
};

export default terminalsReducer;
