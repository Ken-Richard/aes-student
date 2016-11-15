function onPageChange(nextState, replace) {
  const pageNumber = nextState.params.page_number;
  console.log("ROUTE ON ENTER: " + pageNumber);
  store.dispatch(updateBookmark(pageNumber))
}
