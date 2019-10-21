const initialState = {
  shares: {}
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SHARES": {
      let temp = action.payload.shareObj;
      const data = JSON.parse(temp);
      let shares = state.shares;
      for (let i = 0; i < data.length; i++) {
        let company = data[i][0];
        let price = data[i][1];
        if (shares[company] != undefined) {
          if (price > shares[company].price) {
            shares[company]["color"] = 1;
          } else if (price < shares[company].price) {
            shares[company]["color"] = 2;
          } else {
            shares[company]["color"] = 0;
          }
        } else {
          if (Object.keys(shares).length > 25) break;
          shares[company] = {};
          shares[company]["price"] = price;
          shares[company]["color"] = 0;
        }
      }

      return {
        ...state,
        shares: { ...state.shares }
      };
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;
