import { openDB } from 'idb'
import Config from '../global/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME1 } = Config

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME1, { keyPath: 'id' })
  }
})

const FavoriteDb = {
  async getMovie (id) {
    return (await dbPromise).get(OBJECT_STORE_NAME1, id)
  },
  async getAllMovies () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME1)
  },
  async putMovie (movie) {
    return (await dbPromise).put(OBJECT_STORE_NAME1, movie)
  },
  async deleteMovie (id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME1, id)
  }
}

export default FavoriteDb
