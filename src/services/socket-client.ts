export default class SocketClient {
  private socket: WebSocket | null

  constructor() {
    this.socket = null
  }

  connect(url: string) {
    if (!this.socket) {
      this.socket = new WebSocket(url)
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
  }

  on(eventName: string, callback: () => void) {
    if (this.socket) {
      this.socket.addEventListener(eventName, callback)
    }
  }
}
