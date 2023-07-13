import dataArray from './data.json';
import Table from './renderTable';
import funcArray from './sortFunc';

const main = document.querySelector('main');
const newTable = new Table(main, dataArray);
newTable.viewTable();

let i = 0;
setInterval(() => {
  (funcArray[i])();
  if (i === funcArray.length - 1) {
    i = 0;
  } else {
    i += 1;
  }
}, 2000);

// то же с помощью генератора
// function* Gen(arr) {
//   let i = 0;
//   while (true) {
//     yield arr[i];
//     if (i === arr.length - 1) {
//       i = 0;
//     } else {
//       i += 1;
//     }
//   }
// }
// const arrayLoop = Gen(funcArray);
// setInterval(() => (arrayLoop.next().value)(), 2000);
