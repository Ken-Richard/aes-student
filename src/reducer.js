import {List, Map} from 'immutable';
import {fixtures} from '../src/fixtures';

function initialState() {
  return Map().merge(fixtures).set('current_page',1);
}

function setState(state, newState) {
  console.log("REDUCER: setState");
  if (newState==null) {
    return state;
  } else {
    return state.merge(newState);
  }
}

export default function(state, action) {

  if (state==null) {
    console.log("Create Initial State");
    state = initialState();
  }

  // Actions
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  }

  // Unknown Action
  return state;
}
