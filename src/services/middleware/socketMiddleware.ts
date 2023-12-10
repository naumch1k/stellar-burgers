import type { Middleware, MiddlewareAPI } from 'redux'
import { AppDispatch, IRootState } from '../../store/store'
import { connected } from '../../store/webSocket/webSocket.slice'
import { setOrders, clearOrders } from '../../store/orders/orders.slice'

export const socketMiddleware = (socket: any): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, IRootState>) => {
    const { dispatch } = store
    let url = undefined

    return next => action => {
      const { type, payload } = action

      switch (type) {
        case 'webSocket/connect':
          url = payload
          socket.connect(url)

          socket.on('open', () => dispatch(connected()))

          socket.on('message', (event: MessageEvent) => {
            const { success, ...data } = JSON.parse(event.data)
            dispatch(setOrders(data))
          })

          break

        case 'webSocket/disconnect':
          socket.disconnect()
          dispatch(clearOrders())
          break

        default:
          break
      }

      next(action)
    }
  }
}
