import { createSlice } from '@reduxjs/toolkit'
import { IRootState } from '../store'

export interface IWebSocketSliceState {
  isConnecting: boolean;
  connected: boolean;
}

const initialState: IWebSocketSliceState = {
  isConnecting: false,
  connected: false,
}

const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    connect(state, _) {
      state.isConnecting = true
    },
    connected(state) {
      state.isConnecting = false
      state.connected = true
    },
    disconnect(state) {
      state.connected = false
    },
  },
})

export const {
  connect,
  connected,
  disconnect,
} = webSocketSlice.actions

export const webSocketReducer = webSocketSlice.reducer

// Selectors
export const selectIsConnecting = (state: IRootState) => state.webSocket.isConnecting
