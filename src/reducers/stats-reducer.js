export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, err: action.err };
    case "SET_NUMBER":
      return { ...state, num: action.num };
    case "SET_FIBO":
      return {
        ...state,
        stats: [{ id: action.id, nth: action.nth, loading: action.loading }],
      };
    case "UPDATE_FIBO": {
      state.stats[0] = {
        loading: false,
        time: action.time,
        data: action.result,
        freq: action.freq,
      };

      return { ...state };
    }
    default:
      return state;
  }
};
