const bandname = document.form2.bandname;
const home = document.form2.home;
const bandslogan = document.form2.bandslogan;
const bandsponsers = document.form2.bandsponsers;
const numberofmembers = document.form2.numberofmembers;
const members = document.form2.members;
const bandmail = document.form2.bandmail;
const bandpassword = document.form2.bandpassword;

const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');
const id4 = document.getElementById('id4');
const id5 = document.getElementById('id5');
const id6 = document.getElementById('id6');
const id7 = document.getElementById('id7');
const id8 = document.getElementById('id8');

const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const key = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const Date =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;


const validateband = () => {

    const BandN = bandname.value.trim();
    if (BandN == '') {
        bandname.style = 'border-bottom: 1px solid red';
        id1.innerHTML = 'enter Bandname';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
    } else if (!(BandN.length > 1)) {
        bandname.style = 'border-bottom:1px solid red';
        id1.innerHTML = 'should be be more than one letter';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
    } else if (!BandN.match(nonumber)) {
        bandname.style = 'border-bottom: 1px solid red';
        id1.innerHTML = 'should not contain a number';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
    } else if (!BandN.match(capitalize)) {
        bandname.style = 'border-bottom: 1px solid red';
        id1.innerHTML = 'should start with capital';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
    } else {
        bandname.style.border = ' 1px solid green';
    }

    //validates band home
    const BandH = home.value.trim();
    if (BandH == '') {
        home.style = 'border-bottom: 1px solid red';
        id2.innerHTML = 'enter Bandhome';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
    } else if (!(BandH.length > 1)) {
        home.style = 'border-bottom:1px solid red';
        id2.innerHTML = 'should be be more than one letter';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
    } else if (!BandH.match(nonumber)) {
        home.style = 'border-bottom: 1px solid red';
        id2.innerHTML = 'should not contain a number';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
    } else if (!BandH.match(capitalize)) {
        home.style = 'border-bottom: 1px solid red';
        id2.innerHTML = 'should start with capital';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
    } else {
        home.style.border = ' 1px solid green';
    }

    //validates band home
    const BandS = bandslogan.value;
    if (BandS == '') {
        bandslogan.style = 'border-bottom: 1px solid red';
        id3.innerHTML = 'enter Band slogan';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
    } else if (!(BandS.length > 1)) {
        bandslogan.style = 'border-bottom:1px solid red';
        id3.innerHTML = 'should be be more than one letter';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
    } else if (!BandS.match(nonumber)) {
        bandslogan.style = 'border-bottom: 1px solid red';
        id3.innerHTML = 'should not contain a number';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
    } else if (!BandS.match(capitalize)) {
        bandslogan.style = 'border-bottom: 1px solid red';
        id3.innerHTML = 'should start with capital';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
    } else {
        bandslogan.style.border = ' 1px solid green';
    }

    //validates 
    const BandM = numberofmembers.value;
    if (BandM == '') {
        BandM.style = 'border-bottom: 1px solid red';
        id4.innerHTML = 'enter number of members';
        id4.style = 'color:red; position:absolute; font-size:0.7em';
        numberofmembers.focus();
    } else {
        numberofmembers.style.border = ' 1px solid green';
    }

    //email validation
    const emailadress = bandmail.value.trim();
    if (emailadress == '') {
        bandmail.style = 'border-bottom: 1px solid red';
        id7.innerHTML = 'enter email';
        id7.style = 'color:red; position:absolute; font-size:0.7em';
        bandmail.focus();
    } else if (!emailadress.match(emailFormat)) {
        bandmail.style = 'border-bottom: 1px solid red';
        id7.innerHTML = 'enter email correctly';
        id7.style = 'color:red; position:absolute; font-size:0.7em';
        bandmail.focus();
    } else {
        bandmail.style.border = ' 1px solid green';
    }

    //password validation
    const Password = bandpassword.value.trim();
    if (Password == '') {
        bandpassword.style = 'border-bottom: 1px solid red';
        id8.innerHTML = 'enter password';
        id8.style = 'color:red; position:absolute; font-size:0.7em';
        bandpassword.focus();
    } else if (!emailadress.match(key)) {
        bandpassword.style = 'border-bottom: 1px solid red';
        id8.innerHTML =
            'should contain uppercase , lowercase and atleast anumber and more than 8 character';
        id8.style = 'color:red; position:absolute; font-size:0.7em';
        bandpassword.focus();
    } else {
        bandpassword.style.border = ' 1px solid green';
    }
};

const myform = document.getElementById('myform2');
myform.addEventListener('submit', validateband);