import {phrases} from '../../data/phrases.json';
import {categories} from '../../data/categories.json';
import React, {useState, useEffect, useReducer} from 'react';

const GlobalContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
  }
}

const initialState = {
  categories: categories,
  phrases: phrases,
  // learnt: [],
  // seen: [],
  // all: [],
  // language: ['en', 'mg'],
};

function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}

export {ContextProvider, GlobalContext};
