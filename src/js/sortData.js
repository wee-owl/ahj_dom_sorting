/* eslint-disable no-confusing-arrow */
export default class Sorting {
  constructor(dataArray) {
    this.array = dataArray;
  }

  sortUp(param) {
    let result;
    if (!param) {
      throw new Error('Invalid parameter passed');
    } else if (param === 'title') {
      result = this.array.sort((prev, next) => prev[param] > next[param] ? 1 : -1);
    } else {
      result = this.array.sort((prev, next) => prev[param] - next[param]);
    }
    return result;
  }

  sortDown(param) {
    let result;
    if (!param) {
      throw new Error('Invalid parameter passed');
    } else if (param === 'title') {
      result = this.array.sort((prev, next) => prev[param] < next[param] ? 1 : -1);
    } else {
      result = this.array.sort((prev, next) => next[param] - prev[param]);
    }
    return result;
  }
}
