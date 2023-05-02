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

function addRows() {
  usersList.forEach((item) => {
    addRow(item);
  });
}

function addRow(userData) {
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

  const actionEl = document.createElement("td");
  const editEl = document.createElement("div");
  editEl.innerText = "Редактировать";
  editEl.classList.add("table-btn", "edit-btn");
  editEl.onclick = function () {
    // тут будет код для изменения строки
  };

  const removeEl = document.createElement("div");
  removeEl.innerText = "Удалить";
  removeEl.classList.add("table-btn", "remove-btn");
  removeEl.onclick = function () {
    // вызов функции для удаления строки
    removeRowFromTable(userData);
  };
  actionEl.append(editEl, removeEl);

  const row = document.createElement("tr");
  row.setAttribute("id", userData?.id + "-row");
  row.classList.add("data-row");
  row.append(idEl, fnameEl, snameEl, mnameEl, studEl, ageEl, actionEl);
  $(".table").append(row);
}

//____________________________________________________________________________________________________________________________________

// вызов окна для подтверждения удаления строки
function removeRowFromTable(userData) {
  const result = confirm("Вы действительно хотите удалить запись?");
  if (result) {
    usersList = usersList.filter((item) => item.id !== userData.id);
    removeRow(userData);
  }
}

// удаление строки
function removeRow(userData) {
  $("#" + userData.id + "-row").remove();
}

$(document).ready(function () {
  addRows();
});
