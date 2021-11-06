const Bname = document.form1.birthname;
const Sname = document.form1.stagename;
const id = document.form1.ID;
const nIN = document.form1.Nin;
const ystart = document.form1.started;
const Place = document.form1.place;
const numbr = document.form1.contact;
const Email = document.form1.email;
const Paswd = document.form1.password;
const maleg = document.form1.male;
const femaleg = document.form1.female;
const picture = document.form1.artpic;

const BNerror = document.getElementById('BN');
const SNerror = document.getElementById('SN');
const iderror = document.getElementById('aid');
const ninerror = document.getElementById('nine');
const yerror = document.getElementById('year');
const stays = document.getElementById('plce');
const nuerror = document.getElementById('cont');
const merr = document.getElementById('Em');
const paserror = document.getElementById('pass');
const gend = document.getElementById('gend');
const picerror = document.getElementById('PE');



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

const validate = () => {
    //validation for the birthname
    const birthnameC_A = Bname.value.trim();
    if (birthnameC_A == '') {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'enter birthname';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
    } else if (!(birthnameC_A.length > 1)) {
        Bname.style = 'border-bottom:1px solid red';
        BNerror.innerHTML = 'should be be more than one letter';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
    } else if (birthnameC_A.match(nonumber)) {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'should not contain a number';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
    } else if (!birthnameC_A.match(capitalize)) {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'should start with capital';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
    } else {
        Bname.style.border = ' 1px solid green';
    }

    //validation for the stage name
    const stagenameC_A = Sname.value;
    if (stagenameC_A == '') {
        Sname.style = 'border-bottom: 1px solid red';
        SNerror.innerHTML = 'enter stagename';
        SNerror.style = 'color:red; position:absolute; font-size:0.7em;';
        Sname.focus();
    } else if (!(stagenameC_A.length > 3)) {
        Sname.style = 'border-bottom:1px solid red';
        SNerror.innerHTML = 'should be be more than three letter';
        SNerror.style = 'color:red; position:absolute; font-size:0.7em;';
        Sname.focus();
    } else if (!stagenameC_A.match(alphaNumeric)) {
        Sname.style = 'border-bottom: 1px solid red';
        SNerror.innerHTML = 'should be alphanumeric';
        SNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Sname.focus();
    } else if (!stagenameC_A.match(capitalize)) {
        Sname.style = 'border-bottom: 1px solid red';
        SNerror.innerHTML = 'should start with capital';
        SNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Sname.focus();
    } else {
        Sname.style.border = ' 1px solid green';
    }

    //validating  ID
    const ID = id.value;
    if (ID == '') {
        id.style = 'border-bottom: 1px solid red';
        iderror.innerHTML = 'enter ID';
        iderror.style = 'color:red; position:absolute;  left:20%;  font-size:0.7em';
        id.focus();
    } else if (!(ID.length > 3)) {
        id.style = 'border-bottom:1px solid red';
        iderror.innerHTML =
            'should be be more than three characters';
        iderror.style = 'color:red; position:absolute; font-size:0.7em';
        id.focus();
    } else if (!ID.match(systemIDFormat)) {
        id.style = 'border-bottom: 1px solid red';
        iderror.innerHTML = 'should not contain a number';
        iderror.style = 'color:red; position:absolute; font-size:0.7em';
        id.focus();
    } else if (!ID.match(capitalize)) {
        id.style = 'border-bottom: 1px solid red';
        iderror.innerHTML = 'should start with capital';
        iderror.style = 'color:red; position:absolute; font-size:0.7em';
        id.focus();
    } else {
        id.style.border = ' 1px solid green';
    }

    //validates 
    const NIN = nIN.value.trim();
    if (NIN == '') {
        nIN.style = 'border-bottom: 1px solid red';
        ninerror.innerHTML = 'enter NIN';
        ninerror.style = 'color:red; position:absolute; font-size:0.7em';
        nIN.focus();
    } else if (!NIN.match(nationalIDFormat)) {
        nIN.style = 'border-bottom: 1px solid red';
        ninerror.innerHTML = 'start with 2 capital-digits-3 capital leters';
        ninerror.style = 'color:red; position:absolute; font-size:0.7em';
        nIN.focus();
    } else {
        nIN.style.border = ' 1px solid green';
    }

    //validates place where they live
    const PlaCe = Place.value.trim();
    if (PlaCe == '') {
        Place.style = 'border-bottom: 1px solid red';
        stays.innerHTML = 'enter place where you stay';
        stays.style = 'color:red; position:absolute; font-size:0.7em';
        Place.focus();
    } else if (!PlaCe.match(capitalize)) {
        Place.style = 'border-bottom: 1px solid red';
        stays.innerHTML = 'should start with capital';
        stays.style = 'color:red; position:absolute; font-size:0.7em';
        Place.focus();
    } else {
        Place.style.border = ' 1px solid green';
    }

    //when saterted to sing
    const Began = ystart.value.trim();
    if (Began == '') {
        ystart.style = 'border-bottom: 1px solid red';
        yerror.innerHTML = 'enter date you started';
        yerror.style = 'color:red; position:absolute; font-size:0.7em';
        ystart.focus();
    } else if (!Began.match(Date)) {
        ystart.style = 'border-bottom: 1px solid red';
        yerror.innerHTML = 'date format DD/MM/YYYY';
        yerror.style = 'color:red; position:absolute; font-size:0.7em';
        ystart.focus();
    } else {
        ystart.style.border = ' 1px solid green';
    }

    //validates number
    const Contact = numbr.value.trim();
    if (Contact == '') {
        numbr.style = 'border-bottom: 1px solid red';
        nuerror.innerHTML = 'enter phone number';
        nuerror.style = 'color:red; position:absolute; font-size:0.7em';
        numbr.focus();
    } else if (!Contact.match(phoneFormat)) {
        numbr.style = 'border-bottom: 1px solid red';
        nuerror.innerHTML = 'only digits';
        nuerror.style = 'color:red; position:absolute; font-size:0.7em';
        numbr.focus();
    } else {
        numbr.style.border = ' 1px solid green';
    }

    //email validation
    const emailadress = Email.value.trim();
    if (emailadress == '') {
        Email.style = 'border-bottom: 1px solid red';
        merr.innerHTML = 'enter email';
        merr.style = 'color:red; position:absolute; font-size:0.7em';
        Email.focus();
    } else if (!emailadress.match(emailFormat)) {
        Email.style = 'border-bottom: 1px solid red';
        merr.innerHTML = 'enter email correctly';
        merr.style = 'color:red; position:absolute; font-size:0.7em';
        Email.focus();
    } else {
        Email.style.border = ' 1px solid green';
    }

    //validates password
    const Password = Paswd.value.trim();
    if (Password == '') {
        Paswd.style = 'border-bottom: 1px solid red';
        paserror.innerHTML = 'enter password';
        paserror.style = 'color:red; position:absolute; font-size:0.7em';
        Paswd.focus();
    } else if (!Password.match(key)) {
        Paswd.style = 'border-bottom: 1px solid red';
        paserror.innerHTML =
            'should contain uppercase , lowercase and atleast anumber and more than 8 character';
        paserror.style = 'color:red; position:absolute; font-size:0.7em';
        Paswd.focus();
    } else {
        Paswd.style.border = ' 1px solid green';
    }


};

const myformartist = document.getElementById('formA_C');
myformartist.addEventListener('submit', validate);