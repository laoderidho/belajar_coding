import { openDB } from 'idb';
import ConfigDataApi from '../global/config';

const { IndexdbName, IndexdbVersion, ObjectStoreName } = ConfigDataApi;

const dbPromise = openDB(IndexdbName, IndexdbVersion, {
  upgrade(db) {
    db.createObjectStore(ObjectStoreName, { keyPath: 'id' });
  },
});

const FavoriteData = {
  async getRestaurant(id) {
    return (await dbPromise).get(ObjectStoreName, id);
  },
  async getAllRestaurant() {
    return (await dbPromise).getAll(ObjectStoreName);
  },
  async putRestaurant(restaurant) {
    return (await dbPromise).put(ObjectStoreName, restaurant);
  },
  async deleteRestaurant(id) {
    return (await dbPromise).delete(ObjectStoreName, id);
  },
};

export default FavoriteData;
