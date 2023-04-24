import API_ENDPOINT from '../global/api-endpoint'

class themoviedb {
  static async nowPlaying () {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING)
    const responseJson = await response.json()
    return responseJson.results
  }

  static async upcoming () {
    const response = await fetch(API_ENDPOINT.UPCOMING)
    const responseJson = await response.json()
    return responseJson.results
  }

  static async detail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }
}

export default themoviedb
