import ConfigDataApi from '../global/config';

class CatalogData {
  static async GetData() {
    const response = await fetch(`${ConfigDataApi.basic_link + ConfigDataApi.GetData}`);
    const resJson = await response.json();
    return resJson.restaurants;
  }

  static async GetDetail(id) {
    const response = await fetch(`${ConfigDataApi.basic_link + ConfigDataApi.GetDetail}/${id}`);
    const resJson = await response.json();
    return resJson.restaurant;
  }
}

export default CatalogData;
