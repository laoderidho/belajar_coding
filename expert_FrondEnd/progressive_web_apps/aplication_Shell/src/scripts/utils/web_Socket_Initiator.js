import NotificationHelper from './notification_helper'
import Config from '../global/config'

const webSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },

  _onMessageHandler (message) {
    const movie = JSON.parse(message.data)
    console.log(movie)

    const getNotif = NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${Config.BASE_IMAGE_URL + movie.poster_path}`
      }
    })

    console.log(getNotif)
  }
}

export default webSocketInitiator
