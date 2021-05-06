import React, {useReducer} from 'react';

import {categories} from '../data/categories.json';
import {phrases} from '../data/phrases.json';

const GlobalContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'GET_PHRASE_TO_LEARN': {
      return {
        ...state,
        phraseToLearn: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  categories: categories,
  phrases: phrases,
  seenPhrases: [],
  learntPhrases: [],
  phraseToLearn: {},
};

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export {ContextProvider, GlobalContext};
