import { SET_SHARES } from "../../Components/Constants";

export const setShares = shareObj => ({
  type: SET_SHARES,
  payload: {
    shareObj
  }
});
