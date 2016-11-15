export function setState(state) {
  console.log("ACTION_CREATOR: setState");
  return {
    type: 'SET_STATE',
    state
  };
}

export function nextPage() {
  console.log("ACTION_CREATOR: nextPage");
  return {
    type: 'NEXT_PAGE'
  };
}

export function previousPage() {
  console.log("ACTION_CREATOR: previousPage");
  return {
    type: 'PREVIOUS_PAGE'
  };
}

export function currentPageUpdated(current_page) {
  console.log("ACTION_CREATOR: currentPageUpdated");
  return {
    type: 'CURRENT_PAGE_UPDATED',
    current_page: current_page
  };
}
