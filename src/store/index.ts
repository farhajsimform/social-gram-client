import { Action, applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer, { RootState } from './reducers'
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStates = ReturnType<typeof store.getState>
// Inferred type: {register: RegisterState, common: CommonState..}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

declare const window: any

const persistConfig = {
  key: 'root',
  storage,
  timeout: 0,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares: Array<any> = [thunk]
if (process.env.NODE_ENV === 'development') {
  middleWares.push(createLogger({}))
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composed = [applyMiddleware(...middleWares)]

export const store = createStore(persistedReducer, {}, composeEnhancers(...composed))

export const persistor = persistStore(store)
