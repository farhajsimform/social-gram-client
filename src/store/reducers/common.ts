import { CommonState, CommonTypes, STORE_LOGIN_DATA } from '../actionTypes/common'
const initialState: CommonState = {
  loggedInUserData: null,
}

export default function (state = initialState, action: CommonTypes) {
  switch (action.type) {
    case STORE_LOGIN_DATA:
      return {
        ...state,
        loggedInUserData: action.payload?.loggedInUserData
          ? { ...state?.loggedInUserData, ...action.payload?.loggedInUserData }
          : null,
      }
    default:
      return state
  }
}
