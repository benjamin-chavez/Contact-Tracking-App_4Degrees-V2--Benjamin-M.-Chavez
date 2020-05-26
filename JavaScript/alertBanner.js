// Script checks the number of rows in the table, removes the 'no contacts' alert banner if there are contacts, and adds 
//  the 'no contacts' alert banner if there aren't any contacts

const noContactWarning = () => {
  let tableRows =(tableRowCount = () => {
    let oRows = document.getElementById("contact-list").getElementsByTagName('tr');
    let iRowCount = oRows.length;
    return iRowCount;
  })();
  console.log(tableRows);
  if(tableRows >= 2) {
    contactWarning.style.display = 'none';
  }else {
    contactWarning.style.display ='inherit';
  };
  
};