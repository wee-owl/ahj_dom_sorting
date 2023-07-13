export default class Table {
  constructor(element, dataArray) {
    this.element = element;
    this.data = JSON.parse(JSON.stringify(dataArray, ['id', 'title', 'year', 'imdb']));
  }

  viewTable() {
    this.renderTable();
    this.renderTitle(this.data[0]);
    this.data.forEach((item) => this.renderTr(item));
  }

  renderTable() {
    const table = document.createElement('table');
    table.classList.add('table');

    const caption = document.createElement('caption');
    caption.classList.add('table__title');
    caption.textContent = 'Loading and sorting task';

    const thead = document.createElement('thead');
    thead.classList.add('table__header');

    const headTr = document.createElement('tr');
    headTr.classList.add('table__header-list');
    thead.append(headTr);

    const tbody = document.createElement('tbody');
    tbody.classList.add('table__body');

    table.append(caption, thead, tbody);
    this.element.append(table);

    this.headTr = headTr;
    this.tbody = tbody;
  }

  renderTitle(data) {
    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        const headTh = document.createElement('th');
        headTh.classList.add('header-list__title');
        headTh.setAttribute('scope', 'col');
        headTh.textContent = key;
        this.headTr.append(headTh);
      }
    }
  }

  renderTr(data) {
    const bodyTr = document.createElement('tr');
    bodyTr.classList.add('table__body-row');
    bodyTr.setAttribute('data-id', data.id);
    bodyTr.setAttribute('data-title', data.title);
    bodyTr.setAttribute('data-year', data.year);
    bodyTr.setAttribute('data-imdb', data.imdb.toFixed(2));
    this.bodyTr = bodyTr;

    for (const key in data) {
      if (Object.hasOwn(data, key)) {
        if (key === 'imdb') {
          this.renderTd(key, data[key].toFixed(2));
        } else {
          this.renderTd(key, data[key]);
        }
      }
    }

    this.tbody.append(bodyTr);
  }

  renderTd(key, data) {
    const td = document.createElement('td');
    td.classList.add('body-row__text');

    if (key === 'imdb') {
      td.textContent = `${key}: ${data}`;
    } else if (key === 'year') {
      td.textContent = `(${data})`;
    } else {
      td.textContent = data;
    }

    this.bodyTr.append(td);
  }
}
