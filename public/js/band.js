const bandname = document.form2.bandname;
const home = document.form2.home;
const bandslogan = document.form2.bandslogan;
const bandsponsers = document.form2.bandsponsers;
const numberofmembers = document.form2.numberofmembers;
const members = document.form2.members;
const bandmail = document.form2.email;
const bandpassword = document.form2.password;

const id1 = document.getElementById('id1');
const id2 = document.getElementById('id2');
const id3 = document.getElementById('id3');
const id4 = document.getElementById('id4');
const id5 = document.getElementById('id5');
const id6 = document.getElementById('id6');
const id7 = document.getElementById('id7');



const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const key = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


const validateband = (event) => {

    let Isvalid = true;
    const BandN = bandname.value.trim();
    if (BandN == '') {
        bandname.style = 'border-bottom: 1px solid red';
        id1.innerHTML = 'enter Bandname';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
        Isvalid = false;
    } else if (!(BandN.length > 1)) {
        bandname.style = 'border-bottom:1px solid red';
        id1.innerHTML = 'should be be more than one letter';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
        Isvalid = false;
    } else if (!BandN.match(nonumber)) {
        bandname.style = 'border-bottom: 1px solid red';
        id1.innerHTML = 'should not contain a number';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
        Isvalid = false;
    } else if (!BandN.match(capitalize)) {
        bandname.style = 'border-bottom: 1px solid red';
        id1.innerHTML = 'should start with capital';
        id1.style = 'color:red; position:absolute; font-size:0.7em';
        bandname.focus();
        Isvalid = false;
    } else {
        bandname.style.border = ' 1px solid green';
        id1.innerHTML = '';
    }

    //validates band home
    const BandH = home.value.trim();
    if (BandH == '') {
        home.style = 'border-bottom: 1px solid red';
        id2.innerHTML = 'enter Bandhome';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
        Isvalid = false;
    } else if (!(BandH.length > 1)) {
        home.style = 'border-bottom:1px solid red';
        id2.innerHTML = 'should be be more than one letter';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
        Isvalid = false;
    } else if (!BandH.match(nonumber)) {
        home.style = 'border-bottom: 1px solid red';
        id2.innerHTML = 'should not contain a number';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
        Isvalid = false;
    } else if (!BandH.match(capitalize)) {
        home.style = 'border-bottom: 1px solid red';
        id2.innerHTML = 'should start with capital';
        id2.style = 'color:red; position:absolute; font-size:0.7em';
        home.focus();
        Isvalid = false;
    } else {
        home.style.border = ' 1px solid green';
        id2.innerHTML = '';
    }

    //validates band home
    const BandS = bandslogan.value;
    if (BandS == '') {
        bandslogan.style = 'border-bottom: 1px solid red';
        id3.innerHTML = 'enter Band slogan';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
        Isvalid = false;
    } else if (!(BandS.length > 1)) {
        bandslogan.style = 'border-bottom:1px solid red';
        id3.innerHTML = 'should be be more than one letter';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
        Isvalid = false;
    } else if (!BandS.match(nonumber)) {
        bandslogan.style = 'border-bottom: 1px solid red';
        id3.innerHTML = 'should not contain a number';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
        Isvalid = false;
    } else if (!BandS.match(capitalize)) {
        bandslogan.style = 'border-bottom: 1px solid red';
        id3.innerHTML = 'should start with capital';
        id3.style = 'color:red; position:absolute; font-size:0.7em';
        bandslogan.focus();
        Isvalid = false;
    } else {
        bandslogan.style.border = ' 1px solid green';
        id3.innerHTML = '';
    }

    //validates 
    const BandM = numberofmembers.value;
    if (BandM == '') {
        BandM.style = 'border-bottom: 1px solid red';
        id4.innerHTML = 'enter number of members';
        id4.style = 'color:red; position:absolute; font-size:0.7em';
        numberofmembers.focus();
        Isvalid = false;
    } else {
        numberofmembers.style.border = ' 1px solid green';
    }

    //validating the mebers input
    const BandMbr = members.value;
    if (BandMbr == '') {
        BandMbr.style = 'border-bottom: 1px solid red';
        id5.innerHTML = 'enter names of members';
        id5.style = 'color:red; position:absolute; font-size:0.7em';
        numberofmembers.focus();
        Isvalid = false;
    } else {
        members.style.border = ' 1px solid green';
        id4.innerHTML = '';
    }

    //email validation
    const emailadress = bandmail.value.trim();
    if (emailadress == '') {
        bandmail.style = 'border-bottom: 1px solid red';
        id6.innerHTML = 'enter email';
        id6.style = 'color:red; position:absolute; font-size:0.7em';
        bandmail.focus();
        Isvalid = false;
    } else if (!emailadress.match(emailFormat)) {
        bandmail.style = 'border-bottom: 1px solid red';
        id6.innerHTML = 'enter email correctly';
        id6.style = 'color:red; position:absolute; font-size:0.7em';
        bandmail.focus();
        Isvalid = false;
    } else {
        bandmail.style.border = ' 1px solid green';
        id5.innerHTML = '';
    }

    //password validation
    const Pword = bandpassword.value.trim();
    if (Pword == '') {
        bandpassword.style = 'border-bottom: 1px solid red';
        id7.innerHTML = 'enter password';
        id7.style = 'color:red; position:absolute; font-size:0.7em';
        bandpassword.focus();
        Isvalid = false;
    } else if (!Pword.match(key)) {
        bandpassword.style = 'border-bottom: 1px solid red';
        id7.innerHTML =
            'should contain uppercase , lowercase and atleast anumber and more than 8 character';
        id7.style = 'color:red; position:absolute; font-size:0.7em';
        bandpassword.focus();
        Isvalid = false;
    } else {
        bandpassword.style.border = ' 1px solid green';
        id6.innerHTML = '';
    }

    if (!Isvalid) {
        event.preventDefault();
        return false;

    }
};

const myform = document.getElementById('myform3');

myform.addEventListener('submit', (event) => {
    validateband(event);
});