import React, {useReducer} from 'react';
import {categories} from '../../data/categories.json';

const Context = React.createContext();

function reducer(state, action) {
  switch (action.type) {
  }
}

const initialState = {
  data: categories,
  //   learnt: [],
  //   seen: [],
  //   all: [],
  //   language: ['en', 'mg'],
};

function ContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </Context.Provider>
  );
}

export {ContextProvider, Context};
