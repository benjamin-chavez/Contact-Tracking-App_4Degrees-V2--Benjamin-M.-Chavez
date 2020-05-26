// Script to delete Contact
let currentContactName = document.querySelector("#name");
let currentContactEmail = document.querySelector("#email");
let currentContactNote = document.querySelector("#note");

function deleteRow(element){
  element.parentElement.remove()
  noContactWarning();
};



