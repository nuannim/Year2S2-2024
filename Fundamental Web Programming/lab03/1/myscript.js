function submitForm() {
    // ID

    let id = document.getElementById("ID").value;
    if (id.length != 13) {
        alert("เลขบัตรประชาชนต้องมี 13 หลักเท่านั้นนะเพื่อน");
        return false;
    }

    let prefix = document.getElementById("prefix").value;
    if (!prefix) {
        alert("เลือกหน่อยเจ๊")
    }

    let fname = document.getElementById("fName").value;
    if (fname.length < 3 ) {
        alert("แหม นี่ชื่อหรือเค้ก สั้นขนาด");
        return false;
    } else if (fname.length > 20) {
        alert("โอ้ย นี่ชื่อหรือเนื้อเพลงคะ ขอสั้นกว่านี้ได้ไหม เว็บพังค่ะ");
        return false;
    }

    let lname = document.getElementById("lName").value;
    if (lname.length < 3 ) {
        alert("อย่ามาเค้กกับพี่ รบกวนใส่นามสกุลด้วยค่ะ");
        return false;
    } else if (lname.length > 30) {
        alert("อันนี้ก็นามสกุลยาวเกิน อย่ามาแกล้งค้ะ");
        return false;
    }

    let address = document.getElementById("address").value;
    if (address.length < 15) {
        alert("ขอที่อยู่อย่างน้อย 15 ตัวได้มุ้ยย");
        return false;
    }

    let sdistrict = document.getElementById("subdistrict").value;
    if (sdistrict.length < 2 ) {
        alert("พี่ลืมใส่ตำบลค่ะ");
        return false;
    }

    let district = document.getElementById("district").value;
    if (district.length < 2 ) {
        alert("พี่ลืมใส่อำเภอค่ะ");
        return false;
    }

    let province = document.getElementById("province").value;
    if (!province) {
        alert("กรุณาเลือกจังหวัด งับ");
        return false;
    }

    let postcode = document.getElementById("postcode").value;
    if (postcode.length != 5) {
        alert("รหัสไปรษณีย์ต้องเป็นตัวเลข 5 หลักเน้อเจ้า");
        return false;
    }



    document.getElementById("myForm").submit();
    return true;
    // postcode
}