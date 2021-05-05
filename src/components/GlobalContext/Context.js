import {phrases} from '../../data/phrases.json';
import {categories} from '../../data/categories.json';
import React, {useReducer} from 'react';

const GlobalContext = React.createContext();

const initialState = {
  categories: categories,
  phrases: phrases,
  seenPhrase: [],
  learntPhrases: [],
};

function reducer(state, action) {
  switch (action.type) {
    case LEARN_PHRASE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

// export const AuthReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ACTION_TYPES.LOGIN:
//       return {
//         ...state,
//         isAuth: true,
//         username: action.username,
//         token: action.token,
//       };
//     default:
//       return state;
//   }
// };

function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}

export {ContextProvider, GlobalContext};
