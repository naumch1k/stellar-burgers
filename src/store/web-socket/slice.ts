import { createSlice } from '@reduxjs/toolkit'

export interface IWebSocketSliceState {
  connected: boolean;
  connecting: boolean;
}

const initialState: IWebSocketSliceState = {
  connected: false,
  connecting: false,
}

const webSocketSlice = createSlice({
  name: 'webSocket',
  initialState,
  reducers: {
    connect(state, _) {
      state.connecting = true
    },
    connected(state) {
      state.connected = true
      state.connecting = false
    },
    disconnect(state) {
      state.connected = false
    },
  },
})

export const { reducer, actions } = webSocketSlice
