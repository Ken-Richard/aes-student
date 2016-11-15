export function setState(state) {
  console.log("ACTION_CREATOR: setState");
  return {
    type: 'SET_STATE',
    state
  };
}
