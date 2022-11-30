import { LoggedInUserdetails, STORE_LOGIN_DATA, CommonTypes } from 'store/actionTypes/common'

export const SetLoggedInUserDetails = (
  loggedInUserData: LoggedInUserdetails | null,
): CommonTypes => {
  return {
    type: STORE_LOGIN_DATA,
    payload: {
      loggedInUserData,
    },
  }
}
