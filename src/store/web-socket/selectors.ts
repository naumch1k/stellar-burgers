import type { IRootState } from '../store'

const selectIsConnecting = (state: IRootState) => state.webSocket.isConnecting

export {
  selectIsConnecting,
}
