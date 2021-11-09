const faname = document.contactform.fname;
const laname = document.contactform.lname;
const emailC = document.contactform.email;
const messegetext = document.contactform.message;

const FNerror = document.getElementById('error1');
const LNerror = document.getElementById('error2');
const emailerror = document.getElementById('error3');
const messerror = document.getElementById('error4');

const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;



//This fuction validate the form on the contact page for starting with capital no number, no space cant be left empty
const validate = (event) => {
    let Valid = true;
    const firstname = faname.value.trim();
    if (firstname == '') {
        faname.style.border = ' 2px solid red';
        FNerror.innerHTML = 'enter first name';
        FNerror.style = 'color:red;';
        faname.focus();
        Valid = false;
    } else if (!(firstname.length > 1)) {
        faname.style.border = ' 2px solid red';
        FNerror.innerHTML = 'should be be more than one letter';
        FNerror.style = 'color:red;';
        faname.focus();
        Valid = false;
    } else if (!firstname.match(nonumber)) {
        faname.style.border = ' 2px solid red';
        FNerror.innerHTML = 'should not contain a number';
        FNerror.style = 'color:red;';
        faname.focus();
        Valid = false;
    } else if (!firstname.match(capitalize)) {
        faname.style.border = ' 2px solid red';
        FNerror.innerHTML = 'should start with capital';
        FNerror.style = 'color:red;';
        faname.focus();
        Valid = false;
    } else {
        faname.style.border = ' 2px solid green';

    }

    const lastname = laname.value.trim();
    if (lastname == '') {
        laname.style.border = ' 2px solid red';
        LNerror.innerHTML = 'enter last name';
        LNerror.style = 'color:red;';
        laname.focus();
        Valid = false;
    } else if (!(lastname.length > 1)) {
        laname.style.border = ' 2px solid red';
        LNerror.innerHTML = 'should be be more than one letter';
        LNerror.style = 'color:red;';
        laname.focus();
        Valid = false;
    } else if (!lastname.match(nonumber)) {
        laname.style.border = ' 2px solid red';
        LNerror.innerHTML = 'should not contain a number';
        LNerror.style = 'color:red;';
        laname.focus();
        Valid = false;
    } else if (!firstname.match(capitalize)) {
        laname.style.border = ' 1px solid red';
        LNerror.innerHTML = 'should start with capital';
        LNerror.style = 'color:red;';
        laname.focus();
        Valid = false;
    } else {
        laname.style.border = ' 2px solid green';

    }

    const emailadress = emailC.value.trim();
    if (emailadress == '') {
        emailC.style.border = ' 2px solid red';
        emailerror.innerHTML = 'enter email';
        emailerror.style = 'color:red;';
        emailC.focus();
        Valid = false;
    } else if (!emailadress.match(emailFormat)) {
        emailC.style.border = ' 2px solid red';
        emailerror.innerHTML = 'enter email correctly';
        emailerror.style = 'color:red;';
        emailC.focus();
        Valid = false;
    } else {
        emailC.style.border = ' 2px solid green';

    }

    if (!Valid) {
        event.preventDefault();
        return false;
    }

};

const myformcontact = document.getElementById('myform');
myformcontact.addEventListener('submit', (event) => {
    validate(event);
});