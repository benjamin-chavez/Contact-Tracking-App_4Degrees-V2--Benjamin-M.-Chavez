// Script Validates that a name exists, an email exists, and the email is correctly formatted for the new contact

const formValidation = () => {
    if(newContactName.value == "") {
      alert( "Please provide your name!" );
      document.myForm.Name.focus() ;
      return false;
    };
    if(newContactEmail.value == "") {
      alert( "Please provide your Email!" );
      document.myForm.Name.focus() ;
      return false;
    };
    val_email();
    if (val_email() == false) {
      console.log('falssss');
      alert( "Please provide proper email" );
      document.myForm.Name.focus();
      return false;
  };
};

const val_email = () => {
  var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/;
  var isValid = pattern.test(newContactEmail.value);
  return isValid
};
