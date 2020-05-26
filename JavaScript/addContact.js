// Script to take the data form the inputs and create a new contact 

let newContactID = document.querySelector("#index-number");
let newContactName = document.querySelector("#name");
let newContactEmail = document.querySelector("#email");
let newContactNote = document.querySelector("#note");
const contactWarning = document.querySelector("#contactWarning");
const list = document.querySelector('#contact-list');

const addContactBTN = document.getElementById("add-contact-btn");
  addContactBTN.addEventListener("click", (event) => {
    formValidation();
    list.insertAdjacentHTML('beforeend', `<tr><td>${newContactName.value}</td><td>${newContactEmail.value}</td><td>${newContactNote.value}</td><td onclick="deleteRow(this);""><div  type="submit" id="contact1" class="btn btn-danger btn-sm">Delete</div></td>`);
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('note').value = '';
    noContactWarning();
  });
