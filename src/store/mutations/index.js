export default {
  FETCH_SUCCESS (state, data) {
    state.pageData = data;
  },

  FETCH_FAIL (state, data) {
    state.pageData = data;
  }
};
