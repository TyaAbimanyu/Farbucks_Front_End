
function isValidEmail(email){
    let confirmEmail = email.endsWith("@gmail.com");
    
    if(!email){
        alert("Masukkan Email Anda!")
        return false;
    }else if(!confirmEmail) {
        alert("Format Email anda salah!");
        return false;
    }
    return true;
}

function isValidPassword(password){
    let numExist = false;
    let upperExist = false;
    let lowerExist = false;
    
    if(password.length < 8 || password.length > 20){
        alert("Password anda salah");
        return false;
    }

    for (let index = 0; index < password.length; index++) {
        let currentChar = password[index];
        if(isNaN(currentChar) && currentChar == currentChar.toUpperCase()){
            upperExist = true;
        }
        if(isNaN(currentChar) && currentChar == currentChar.toLowerCase()){
            lowerExist = true;
        }
        if(!isNaN(currentChar)){
            numExist = true;
        }   
    }

    if(!numExist){
        alert("Password anda salah");
        return false;
    } else if(!upperExist || !lowerExist){
        alert("Password anda salah");
        return false;
    }

    return true;
}


function ValidationResult(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if( !email || !password){
        alert("Mohon isi semua data yang diminta!");
        return false;
    }


    // EMAIL
    if(isValidEmail(email) == false){
        return false;
    } else {
        console.log("Email : " + email);
    }

    // PASSWORD
    if(isValidPassword(password) == false){
        return false;
    } else {
        console.log("Password : " + password);
    }

    alert("Halo, Kawan Farbucks! 😁");
}