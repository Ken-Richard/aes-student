export function setState(state) {
  console.log("ACTION_CREATOR: setState");
  return {
    type: 'SET_STATE',
    state
  };
}

export function updateBookmark(page_number) {
  console.log("ACTION_CREATOR: updateBookmark");
  return {
    type: 'UPDATE_BOOKMARK',
    page_number: page_number
  };
}
