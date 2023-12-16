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
import { authReducer } from './auth/auth.slice'
import { orderReducer } from './order/order.slice'
import { ordersReducer } from './orders/orders.slice'
import { webSocketReducer } from './webSocket/webSocket.slice'

import { socketMiddleware } from 'services/middleware/socketMiddleware'
import SocketClient from 'services/socketClient'

const socket = new SocketClient()

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    auth: authReducer,
    order: orderReducer,
    orders: ordersReducer,
    webSocket: webSocketReducer,
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
