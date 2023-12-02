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

import { ingredientsReducer } from './ingredients/ingredients.slice'
import { burgerConstructorReducer } from './burgerConstructor/burgerConstructor.slice'
import auth from './auth'
import { orderReducer } from './order/order.slice'
import { ordersReducer } from './orders/orders.slice'
import webSocket from './web-socket'

import { socketMiddleware } from '../middleware/socket-middleware'
import SocketClient from '../services/socket-client'

const socket = new SocketClient()

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    auth,
    order: orderReducer,
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
