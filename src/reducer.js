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

function nextPage(state) {
  console.log("REDUCER: nextPage");
  const current_page = state.get('current_page')
  if (current_page < state.get('pages').size) {
    return state.set('current_page', current_page + 1);
  }
  return state;
}

function previousPage(state) {
  console.log("REDUCER: previousPage");
  const current_page = state.get('current_page')
  if (current_page > 1) {
    return state.set('current_page', current_page - 1);
  }
  return state;
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
  case 'NEXT_PAGE':
    return nextPage(state);
  case 'PREVIOUS_PAGE':
    return previousPage(state);
  }

  // Unknown Action
  return state;
}
