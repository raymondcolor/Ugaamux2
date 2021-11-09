const valid = false;
const x = document.form1.gender;

const radiovalidate = () => {
    for (const i = 0; i < x.length; i + 1) {
        if (x[i].checked) {
            valid = true;
            break;
        }
    }
}; // this validates the radio button to be able to choose only one button either male or female


const Bname = document.form1.birthname;
const Email = document.form1.email;
const Paswd = document.form1.password;


const BNerror = document.getElementById('BN');
const merr = document.getElementById('Em');
const paserror = document.getElementById('pass');


const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const systemIDFormat = /[a-z0-9]/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const key = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const Date =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const validate = (event) => {

    let Isvalid = true;

    const birthnameC_A = Bname.value.trim();
    if (birthnameC_A == '') {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'enter birthname';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    } else if (!(birthnameC_A.length > 1)) {
        Bname.style = 'border-bottom:1px solid red';
        BNerror.innerHTML = 'should be be more than one letter';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    } else if (!birthnameC_A.match(nonumber)) {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'should not contain a number';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    } else if (!birthnameC_A.match(capitalize)) {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'should start with capital';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    } else {
        Bname.style.border = ' 1px solid green';
        BNerror.innerHTML = '';
    }
    //email validation
    const emailadress = Email.value.trim();
    if (emailadress == '') {
        Email.style = 'border-bottom: 1px solid red';
        merr.innerHTML = 'enter email';
        merr.style = 'color:red; position:absolute; font-size:0.7em';
        Email.focus();
        Isvalid = false;
    } else if (!emailadress.match(emailFormat)) {
        Email.style = 'border-bottom: 1px solid red';
        merr.innerHTML = 'enter email correctly';
        merr.style = 'color:red; position:absolute; font-size:0.7em';
        Email.focus();
        Isvalid = false;
    } else {
        Email.style.border = ' 1px solid green';
        merr.innerHTML = '';
    }

    //validates password
    const Password = Paswd.value.trim();
    if (Password == '') {
        Paswd.style = 'border-bottom: 1px solid red';
        paserror.innerHTML = 'enter password';
        paserror.style = 'color:red; position:absolute; font-size:0.7em';
        Paswd.focus();
        Isvalid = false;
    } else if (!Password.match(key)) {
        Paswd.style = 'border-bottom: 1px solid red';
        paserror.innerHTML =
            'should contain uppercase , lowercase and atleast anumber and more than 8 character';
        paserror.style = 'color:red; position:absolute; font-size:0.7em';
        Paswd.focus();
        Isvalid = false;
    } else {
        Paswd.style.border = ' 1px solid green';
        paserror.innerHTML = '';
    }

    if (!Isvalid) {
        event.preventDefault();
        return false;

    }

};

const myformartist = document.getElementById('formA_C');

myformartist.addEventListener('submit', (event) => {
    validate(event);
});