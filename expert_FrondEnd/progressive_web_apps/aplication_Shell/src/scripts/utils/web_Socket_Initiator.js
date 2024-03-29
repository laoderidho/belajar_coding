import NotificationHelper from './notification_helper'
import Config from '../global/config'

const WebSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },
  _onMessageHandler (message) {
    console.log(JSON.parse(message.data))

    const movie = JSON.parse(message.data)
    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${Config.BASE_IMAGE_URL + movie.poster_path}`
      }
    })
  }
}

export default WebSocketInitiator
