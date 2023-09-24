
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
        alert("Password tidak boleh kurang dari 8 dan lebih dari 20");
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
        alert("Password harus terdiri dari angka!");
        return false;
    } else if(!upperExist || !lowerExist){
        alert("Password harus terdiri dari kombinasi huruf kecil, kapital dan angka!");
        return false;
    }

    return true;
}

function isValidPhoneNum(phoneNum){
    let areAllNum = true;

    for (let index = 0; index < phoneNum.length; index++) {
        if(isNaN(phoneNum[index])){
            alert("Nomor Telepon hanya boleh terdiri dari angka!");
            areAllNum = false;
            break;
        }
    }
    return areAllNum;
}

function isValidAge(birthDate){
    var newDate = new Date(birthDate);

    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    let lahir = day + (month*30) + (year*12*30);


    let currDate = new Date();
    let currDay = currDate.getDate();
    let currMonth = currDate.getMonth();
    let currYear = currDate.getFullYear();
    let sekarang = currDay + (currMonth*30) + (currYear*12*30)

    let Age = (sekarang - lahir)/(12*30);
    if(Age < 15){
        alert("Pengguna Minimal Harus Berumur 15 Tahun!");
        return false;
    } else {
        console.log("Umur : " + Age);
    }
}

function ValidationResult(){
    let Fname = document.getElementById("fname").value;
    let Lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phoneNum = document.getElementById("nomor_telepon").value;
    const gender = document.getElementById("genders").value;
    let birthDate = document.getElementById("birth").value;
    let Address = document.getElementById("address").value;
    let checkBox = document.getElementById("checkBox");

    if(!Fname || !Lname || !email || !password || !phoneNum || !birthDate || !Address){
        alert("Mohon isi semua data yang diminta!");
        return false;
    }

    // NAMA DEPAN
    console.log("Nama Depan : "+Fname);

    // NAMA BELAKANG
    console.log("Nama Belakang : "+Lname);

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

    // NOMOR TELEPON
    if(isValidPhoneNum(phoneNum) == false){
        return false;
    } else {
        console.log("No. Telp : " + phoneNum);
    }


    // GENDER
    console.log("Jenis Kelamin : " + gender);


    // TANGGAL LAHIR
    if(isValidAge(birthDate) == false){
        return false;
    }

    // ALAMAT
    console.log("Alamat : " + Address);

    // CHECKBOX
    if(checkBox.checked == false){
        alert("Mohon untuk menyetujui syarat dan ketentuan agar dapat mendaftar!");
    }

    alert("Terima kasih telah mendaftar! Selamat menjadi bagian dari FARBUCKS 👍");
}