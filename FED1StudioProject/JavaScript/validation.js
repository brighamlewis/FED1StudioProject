function validateForm(event) {

    //Gatehr all HTML controls into a collection instead of creating separare variable for each

    let controls = document.getElementsByClassName('form-control');
    console.log(controls);

    let validationMessages = document.getElementsByClassName('invalid');
    console.log(validationMessages);

    //Regular expression object for fields
    let rxp = new RegExp(/^[A-Z]+$/i);

    //Check the length of all controls - if any have not been filled out by the user, stop the form from submitting at all.

    if (controls['firstname'].value.length == 0 || controls['lastname'].value.length == 0 || controls['country'].value.length == 0 || controls['subject'].value.length == 0 || !rxpEmail.test(controls['firstname'].value) || !rxpName.test(controls['lastname'].value)) {

        //Stop form from submitting
        event.preventDefault();

        //check individual controls and display error messages if needed

        //--------------First Name Validation-----------------


        //check length
        if (controls['firstname'].value.length == 0) {
            validationMessages['idfirstname'].textContent = "* First Name is required";
        }
        else {
            validationMessages['idfirstname'].textContent = "";
        }
    }

    //Regex
    if (!rxp.test(controls['firstname'].value) && controls['firstname'].value.length > 0) {
        validationMessages['idfirstname'].textContent = "* First Name must only contain alphabetical characters";
    }

    if (rxp.test(controls['firstname'].value) && controls['firstname'].value.length > 0) {
        validationMessages['idfirstname'].textContent = "";
    }

    //--------------Last Name Validation-----------------


    //check length
    if (controls['lastname'].value.length == 0) {
        validationMessages['idlastname'].textContent = "* Last Name is required";
    }
    else {
        validationMessages['idlastname'].textContent = "";
    }
}

//Regex
if (!rxp.test(controls['lastname'].value) && controls['lastname'].value.length > 0) {
    validationMessages['idlastname'].textContent = "* Last Name must only contain alphabetical characters";
}

if (rxp.test(controls['lastname'].value) && controls['lastname'].value.length > 0) {
    validationMessages['idlastname'].textContent = "";
}



//--------------Country Validation-----------------


//check length
if (controls['country'].value.length == 0) {
    validationMessages['idcountry'].textContent = "* Country is required";
}
else {
    validationMessages['idcountry'].textContent = "";
}
}

//Regex
if (!rxp.test(controls['country'].value) && controls['country'].value.length > 0) {
    validationMessages['idcountry'].textContent = "* Country must only contain alphabetical characters";
}

if (rxp.test(controls['country'].value) && controls['country'].value.length > 0) {
    validationMessages['idcountry'].textContent = "";
}



    //----------------Message Validation -----------------

    if (controls['message'].value.length == 0) {        validationMessages['rfvMessage'].textContent = "* Message is required";    }    else {        validationMessages['rfvMessage'].textContent = "";    }



