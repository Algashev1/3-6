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
    // updateForm(userData);
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
    removeRow(userData);
  }
}

function removeRow(userData) {
  $("#" + userData?.id + "-row").remove();
}

//____________________________________________________________________________________________________________________________________

$(document).ready(function () {
  addRows();

  $("#addUserForm").submit(function (event) {
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    addUser(data);
    return false;

    // этот код пока не смотрим
    // const value = $("#submitBtn").val();
    // if (value === "Добавить") {
    //   addUser(data);
    // } else {
    //   updateUser(data);
    // }
  });
});

// $(document).ready(function () {
//   // функция для добавления новой строки в таблицу из формы
//   $("#addUserForm").submit(function (event) {
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);

//     const value = $("#submitBtn").val();
//     if (value === "Добавить") {
//       addUser(data);
//     } else {
//       updateUser(data);
//     }
//     return false;
//   });
// });

// // функция для добавления нового
// function addUser(userData) {
//   // const newRows = [];
//   addRow(userData);
//   clearForm();
// }

// function updateRow(userData) {
//   const cells = $("#" + selectedRowId + "-row").children();
//   cells[1].innerText = userData?.fname;
//   cells[2].innerText = userData?.sname;
//   cells[3].innerText = userData?.mname;
//   cells[4].innerText = userData?.stud;
//   cells[5].innerText = userData?.age;
// }

// function removeRowFromTable(userData) {
//   $("#" + userData?.id + "-row").remove();
// }

// function clearForm() {
//   $("#fname").val(function () {
//     return "";
//   });
//   $("#sname").val(function (i) {
//     return "";
//   });
//   $("#mname").val(function () {
//     return "";
//   });
//   $("#stud").val(function () {
//     return "";
//   });
//   $("#age").val(function () {
//     return "";
//   });
// }

// function returnAddBtn() {
//   clearForm();
//   $(".submit-btn-red").remove();
//   $(".submit-btn").val(function () {
//     return "Добавить";
//   });
//   selectedRowId = null;
// }

// function updateForm(userData) {
//   returnAddBtn();
//   selectedRowId = userData?.id;
//   const cells = $("#" + selectedRowId + "-row").children();
//   $("#fname").val(function () {
//     return cells[1].innerText;
//   });
//   $("#sname").val(function (i) {
//     return cells[2].innerText;
//   });
//   $("#mname").val(function () {
//     return cells[3].innerText;
//   });
//   $("#stud").val(function () {
//     return cells[4].innerText;
//   });
//   $("#age").val(function () {
//     return cells[5].innerText;
//   });

//   $(".submit-btn").val(function () {
//     return "Изменить";
//   });

//   const cancelEl = document.createElement("input");
//   cancelEl.classList.add("submit-btn", "submit-btn-red");
//   cancelEl.setAttribute("type", "button");
//   cancelEl.setAttribute("value", "Отменить");
//   cancelEl.onclick = function () {
//     returnAddBtn();
//   };
//   $(".submit-btn-wrapper").append(cancelEl);
// }

// function removeRow(userData) {
//   result = confirm("Вы действительно хотите удалить запись?");
//   if (result) {
//     removeUser(userData);
//   }
// }
