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

function removeRowFromTable(userData) {
  result = confirm("Вы действительно хотите удалить запись?");
  if (result) {
    usersList = usersList.filter((item) => item.id !== userData.id);
    removeRow(userData);
  }
}

function removeRow(userData) {
  $("#" + userData?.id + "-row").remove();
}

//____________________________________________________________________________________________________________________________________

// функция, которая генерирует случайный id
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// функция для добавления записи в массив
function addUser(data) {
  data.id = getRandomIntInclusive(0, 1000);
  usersList.push(data);
  addRow(data);
}

// очистка формы
function clearForm() {
  $("#fname").val(function () {
    return "";
  });
  $("#sname").val(function () {
    return "";
  });
  $("#mname").val(function () {
    return "";
  });
  $("#stud").val(function () {
    return "";
  });
  $("#age").val(function () {
    return "";
  });
}

$(document).ready(function () {
  addRows();

  // событие submit для добавления новой строчки в таблицу
  $("#addUserForm").submit(function (event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addUser(data);
    clearForm();
    return false;
  });
});
