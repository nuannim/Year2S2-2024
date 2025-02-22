/** File : validator.js **/

function validateForm() {    

    let fname = document.getElementById("FirstName").value;

    if (fname.length < 3 ) {
        alert("Firstname must be filled out");
        return false;
    }

    let country = document.getElementById("Country").value; 
    if (country =="00" ) {
        alert("Country must be selected");
        return false;
    }
}

/**
     - การตรวจสอบความยาวของตัวอักษร
     let str = new String( "This is string" );
     document.write("str.length is:" + str.length);
     // str.length is: 14
     - การหาตำแหน่งข้อความในชุดตัวอักษร
     let str = "Hello world, welcome to the universe.";
     let n = str.indexOf("welcome"); 
     // n = 13
*/