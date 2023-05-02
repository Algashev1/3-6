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
    updateForm(userData);
  };

  const removeEl = document.createElement("div");
  removeEl.innerText = "Удалить";
  removeEl.classList.add("table-btn", "remove-btn");
  removeEl.onclick = function () {
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

function addUser(data) {
  data.id = getRandomIntInclusive(0, 1000);
  usersList.push(data);
  addRow(data);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

//____________________________________________________________________________________________________________________________________

function updateForm(userData) {
  // returnAddBtn();
  selectedRowId = userData?.id;
  // с помощью метода children мы получаем дочерние элемента (ячейки таблицы) строки с id '{n}-row'
  const cells = $("#" + selectedRowId + "-row").children();
  $("#fname").val(function () {
    return cells[1].innerText;
  });
  $("#sname").val(function () {
    return cells[2].innerText;
  });
  $("#mname").val(function () {
    return cells[3].innerText;
  });
  $("#stud").val(function () {
    return cells[4].innerText;
  });
  $("#age").val(function () {
    return cells[5].innerText;
  });

  // изменение текста кнопки "Добавить" на "Изменить"
  $(".submit-btn").val(function () {
    return "Изменить";
  });

  // добавление новой кнопки для отмены
  const cancelEl = document.createElement("input");
  cancelEl.classList.add("submit-btn", "submit-btn-red");
  cancelEl.setAttribute("type", "button");
  cancelEl.setAttribute("value", "Отменить");
  cancelEl.onclick = function () {
    returnAddBtn();
  };
  $(".submit-btn-wrapper").append(cancelEl);
}

// изменение записи в массиве
function updateUser(data) {
  usersList.map((item) => {
    if (item.id === data.id) {
      return data;
    }
    return item;
  });

  updateRow(userData);
}

// изменение данных в строке
function updateRow(userData) {
  const cells = $("#" + selectedRowId + "-row").children();
  cells[1].innerText = userData.fname;
  cells[2].innerText = userData.sname;
  cells[3].innerText = userData.mname;
  cells[4].innerText = userData.stud;
  cells[5].innerText = userData.age;
}

// удаление кнопки "Отмена" и изменение кнопки "Изменить" на кнопку "Добавить"
function returnAddBtn() {
  clearForm();
  $(".submit-btn-red").remove();
  $(".submit-btn").val(function () {
    return "Добавить";
  });
  selectedRowId = null;
}

$(document).ready(function () {
  addRows();

  $("#addUserForm").submit(function (event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const value = $("#submitBtn").val();
    if (value === "Добавить") {
      data.id = getRandomIntInclusive(0, 1000);
      addUser(data);
    } else if (value === "Изменить") {
      updateRow(data);
    }
    clearForm();
    return false;
  });
});
