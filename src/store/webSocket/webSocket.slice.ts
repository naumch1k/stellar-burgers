import { createSlice } from '@reduxjs/toolkit'
import { IRootState } from '../store'

export interface IWebSocketSliceState {
  isConnecting: boolean;
  isFetching: boolean;
  connected: boolean;
}

const initialState: IWebSocketSliceState = {
  isConnecting: false,
  isFetching: false,
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
      state.connected = true
      state.isConnecting = false
      state.isFetching = true
    },
    dataFetched(state) {
      state.isFetching = false;
    },
    disconnect(state) {
      state.connected = false
    },
  },
})

export const {
  connect,
  connected,
  dataFetched,
  disconnect,
} = webSocketSlice.actions

export const webSocketReducer = webSocketSlice.reducer

// Selectors
export const selectWebSocketState = (state:IRootState) => state.webSocket
