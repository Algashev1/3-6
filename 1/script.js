// список студентов по умолчанию, которые будут изначально в таблице
let usersList = [
  {
    id: 1,
    fname: "Иванов",
    sname: "Иван",
    mname: "Иванович",
    stud: 35231,
    age: 18,
  },
  {
    id: 2,
    fname: "Петров",
    sname: "Пётр",
    mname: "Петрович",
    stud: 85341,
    age: 19,
  },
  {
    id: 3,
    fname: "Комаров",
    sname: "Олег",
    mname: "Николаевич",
    stud: 54363,
    age: 17,
  },
  {
    id: 4,
    fname: "Яковлева",
    sname: "Оксана",
    mname: "Игоревна",
    stud: 43453,
    age: 18,
  },
  {
    id: 5,
    fname: "Смоляков",
    sname: "Антон",
    mname: "Владимирович",
    stud: 55433,
    age: 18,
  },
];

// функция для добавления строк в таблицу (инициализация таблицы)
function addRows() {
  usersList.forEach((item) => {
    addRow(item);
  });
}

// функция для добавления строки в таблицу
function addRow(userData) {
  // создание ячейки таблицы
  const idEl = document.createElement("td");
  idEl.innerText = userData?.id;

  const fnameEl = document.createElement("td");
  fnameEl.innerText = userData?.fname;

  const snameEl = document.createElement("td");
  snameEl.innerText = userData?.sname;

  const mnameEl = document.createElement("td");
  mnameEl.innerText = userData?.mname;

  const studEl = document.createElement("td");
  studEl.innerText = userData?.stud;

  const ageEl = document.createElement("td");
  ageEl.innerText = userData?.age;
  ageEl.classList.add("user-age");

  // создание кнопки "Редактировать"
  const actionEl = document.createElement("td");
  const editEl = document.createElement("div");
  editEl.innerText = "Редактировать";
  editEl.classList.add("table-btn", "edit-btn");
  editEl.onclick = function () {
    // тут будет код для изменения строки
  };

  // создание кнопки "Удалить"
  const removeEl = document.createElement("div");
  removeEl.innerText = "Удалить";
  removeEl.classList.add("table-btn", "remove-btn");
  removeEl.onclick = function () {
    // тут будет код для удаления строки
  };
  actionEl.append(editEl, removeEl);

  // создание строки с id и добавление в неё ячеек
  const row = document.createElement("tr");
  row.setAttribute("id", userData?.id + "-row");
  row.classList.add("data-row");
  row.append(idEl, fnameEl, snameEl, mnameEl, studEl, ageEl, actionEl);

  // добавление строки в таблицу
  $(".table").append(row);
}

$(document).ready(function () {
  // функция для добавления строк вызывается тогда, когда страница готова к работе
  addRows();
});
