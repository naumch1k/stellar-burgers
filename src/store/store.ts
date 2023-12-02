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

import ingredients from './ingredients'
import burgerConstructor from './burgerConstructor'
import auth from './auth'
import order from './order'
import { ordersReducer } from './orders/orders.slice'
import webSocket from './web-socket'

import { socketMiddleware } from '../middleware/socket-middleware'
import SocketClient from '../services/socket-client'

const socket = new SocketClient()

const store = configureStore({
  reducer: {
    ingredients,
    burgerConstructor,
    auth,
    order,
    orders: ordersReducer,
    webSocket,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(socketMiddleware(socket) as any),
})

export type IRootState = ReturnType<typeof store.getState>

export default store

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const persistor = persistStore(store)
