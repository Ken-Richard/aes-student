import {List, Map} from 'immutable';
import {fixtures} from '../src/fixtures';

function initialState() {
  return Map().merge(fixtures);
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
  case 'UPDATE_BOOKMARK':
    return setState(state, {'current_page_number': action.page_number});
  }

  // Unknown Action
  return state;
}
