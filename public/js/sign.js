//below is the validation for the sign in page
const validateS = () => {
    const signemail = document.signform.email;
    const signpass = document.signform.password;
    const error = document.getElementById('signid')
    const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    //email validation
    const emailadress = signemail.value.trim();
    if (emailadress == '') {
        signemail.style = 'border: 2px solid red';
        error.innerHTML = 'enter email';
        error.style = 'color:red; position:absolute; font-size:0.7em';
        signemail.focus();
    } else if (!emailadress.match(emailFormat)) {
        signemail.style = 'border: 2px solid red';
        error.innerHTML = 'enter email correctly';
        error.style = 'color:red; position:absolute; font-size:0.7em';
        error.email.focus();
    } else {
        signidemail.style.border = ' 1px solid green';
    }
};