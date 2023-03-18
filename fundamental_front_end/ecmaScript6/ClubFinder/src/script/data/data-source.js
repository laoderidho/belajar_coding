// function DataSource(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }
import clubs from "./clubs.js";

class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) =>
        club.name.toUpperCase().includes(keyword.toUpperCase())
      );

      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}
// DataSource.prototype.searchClub = function (keyword) {
//   var filteredClubs = clubs.filter( club => club.name.toUpperCase().includes(keyword.toUpperCase()));

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(keyword + ' is not found');
//   }
// };

export default DataSource