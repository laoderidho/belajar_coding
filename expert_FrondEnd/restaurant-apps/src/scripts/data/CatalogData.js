import ConfigDataApi from '../global/config';

class CatalogData {
  static async GetData() {
    const response = await fetch(`${ConfigDataApi.basic_link + ConfigDataApi.GetData}`);
    const resJson = await response.json();
    return resJson.restaurants;
  }

  static async GetDetail(id) {
    const response = await fetch(`${ConfigDataApi.basic_link + ConfigDataApi.GetDetail}/${id}`);
    return response.json();
  }
}

export default CatalogData;
