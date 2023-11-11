import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import ingredients, { IIngredientsSliceState } from './ingredients'
import burgerConstructor, { IBurgerConstructorSliceState } from './burgerConstructor'
import auth, { IAuthSliceState } from './auth'
import order, { IOrderSliceState } from './order'
import orders, { IOrdersSliceState } from './orders'
import webSocket, { IWebSocketSliceState } from './web-socket'

import { socketMiddleware } from '../middleware/socket-middleware'
import SocketClient from '../services/socket-client'

const socket = new SocketClient()

export interface IRootState {
  ingredients: IIngredientsSliceState,
  burgerConstructor: IBurgerConstructorSliceState,
  auth: IAuthSliceState,
  order: IOrderSliceState,
  orders: IOrdersSliceState,
  webSocket: IWebSocketSliceState,
}

const store = configureStore({
  reducer: {
    ingredients,
    burgerConstructor,
    auth,
    order,
    orders,
    webSocket,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(socketMiddleware(socket) as any),
})

export default store

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const persistor = persistStore(store)
