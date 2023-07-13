import Sorting from './sortData';
import dataArray from './data.json';
import Table from './renderTable';

const params = ['id', 'title', 'year', 'imdb'];
const main = document.querySelector('main');

function clear() {
  if (document.querySelector('table')) {
    document.querySelector('table').remove();
  }
}

function sortUpId() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortUp(params[0]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][0].classList.add('header-list__title-down');
}

function sortDownId() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortDown(params[0]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][0].classList.add('header-list__title-up');
}

function sortUpTitle() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortUp(params[1]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][1].classList.add('header-list__title-down');
}

function sortDownTitle() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortDown(params[1]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][1].classList.add('header-list__title-up');
}

function sortUpYear() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortUp(params[2]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][2].classList.add('header-list__title-down');
}

function sortDownYear() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortDown(params[2]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][2].classList.add('header-list__title-up');
}

function sortUpImdb() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortUp(params[3]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][3].classList.add('header-list__title-down');
}

function sortDownImdb() {
  clear();
  const sort = new Sorting(dataArray);
  const sortedTable = new Table(main, sort.sortDown(params[3]));
  sortedTable.viewTable();
  [...document.querySelectorAll('.header-list__title')][3].classList.add('header-list__title-up');
}

const funcArray = [sortUpId, sortDownId, sortUpTitle, sortDownTitle,
  sortUpYear, sortDownYear, sortUpImdb, sortDownImdb];

export default funcArray;
