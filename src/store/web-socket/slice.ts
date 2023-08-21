import { createSlice } from '@reduxjs/toolkit'

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

export const { reducer, actions } = webSocketSlice
