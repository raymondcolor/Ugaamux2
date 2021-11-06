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