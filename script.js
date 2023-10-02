function addNewWe() {
  //alert("hello");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAq() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewec() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("ecField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("placeholder", "Enter here");
  let ecOb = document.getElementById("ec");
  let ecAddButtonOb = document.getElementById("ecAddButton");

  ecOb.insertBefore(newNode, ecAddButtonOb);
}
