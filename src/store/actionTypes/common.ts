export const STORE_LOGIN_DATA = 'STORE_LOGIN_DATA'

export interface LoggedInUserdetails {
  accessToken: string
  roles: Array<number>
}

export interface CommonState {
  loggedInUserData: LoggedInUserdetails | null
}

interface StoreLoginData {
  type: typeof STORE_LOGIN_DATA
  payload: {
    loggedInUserData: LoggedInUserdetails | null
  }
}

export type CommonTypes = StoreLoginData
