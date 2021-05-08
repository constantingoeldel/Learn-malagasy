import React, {useReducer} from 'react';
import {phrases} from '../data/phrases.json';
import {categories} from '../data/categories.json';
const GlobalContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'PHRASE_TO_LEARN': {
      return {
        ...state,
        phraseToLearn: action.phrase,
        categoryToLearn: action.category,
        showNextButton: action.showNextBtn,
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
  categoryToLearn: {},
  showNextButton: false,
};

function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}

export {ContextProvider, GlobalContext};
