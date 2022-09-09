function savedata() {
    event.preventDefault()
    let city, course, name, fname, email, phone, st_cnic, f_cnic, date, gender, address, qualification

    city = document.getElementById("city").value;
    course = document.getElementById("course").value;
    name = document.getElementById("name").value;
    fname = document.getElementById("fname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    st_cnic = document.getElementById("st_cnic").value;
    f_cnic = document.getElementById("f_cnic").value;
    date = document.getElementById("date").value;
    gender = document.getElementById("gender").value;
    address = document.getElementById("address").value;
    qualification = document.getElementById("qualification").value;
    file = document.getElementById("file").value;


    var nameregex = /[\S\s]+[\S]+/.test(name);
    var fnameregex = /[\S\s]+[\S]+/.test(fname);
    var emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
    var phoneregex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(phone);
    var st_cnicregex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/.test(st_cnic);
    var f_cnicregex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/.test(f_cnic);
    var fileregex = /[0-9a-z]+$/.test(file);


    if (nameregex === false) {
        swal("Something Wrong!", "...Please Enter Correct Name!");
    }
    else if (fnameregex === false) {
        swal("Something Wrong!", "...Please Enter Correct Father Name!");
    }
    else if (emailregex === false) {
        swal("Something Wrong!", "...Please Enter Correct Email!");
    }
    else if (phoneregex === false) {
        swal("Something Wrong!", "...Please Enter Correct phone number!");
    }
    else if (st_cnicregex === false) {
        swal("Something Wrong!", "...Please Enter Correct Student CNIC!");
    }
    else if (f_cnic === false) {
        swal("Something Wrong!", "...Please Enter Correct Father CNIC!");
    }
    else if (fileregex === false) {
        swal("Something Wrong!", "...Please Choose Correct File!");
    } else {
        swal("Congratulations ! Your Form Will be Submitted");

        var getting = JSON.parse(localStorage.getItem("data"))
        if (getting === null) {
            obj = {}
        } else {
            obj = getting
        }
        
        obj[name] = {
            
            city : city,
            course : course,
            name : name,
            fname : fname,
            email : email,
            phone : phone,
            st_cnic: st_cnic,
            f_cnic : f_cnic,
            date : date,
            gender : gender,
            address : address,
            qualification : qualification,
            file : file,
            
        }
        localStorage.setItem("data", JSON.stringify(obj))
    }
    
    city.value = "";
    course.value = "";
    name.value = "";
    fname.value = "";
    email.value = "";
    phone.value = "";
    st_cnic.value = "";
    f_cnic.value = "";
    date.value = "";
    gender.value = "";
    address.value = "";
    qualification.value = "";
    file.value = "";
    
    // location.reload()
}

var input = document.getElementById("adminpass")
function admin() {
    var btn = document.getElementById("btn")
    input.style.display = "block"
    btn.style.display = "block"

}
function check() {
    if (input.value === "admin") {
        window.location.href = "admin.html"
    } else {
        swal("plzz enter the valid password", "Password Is password", "error")
    }
    input.value = ""
}
function dlt() {
    var getdata = JSON.parse(localStorage.getItem("data"))
    var names = Object.keys(getdata)
    console.log(names)
    for (var key in getdata)
        event.target.parentNode.parentNode.remove()
    localStorage.removeItem(getdata[key][0])
    console.log(getdata)
}


function buttons () {
    var btn = document.getElementById("adminpass")
    var btn2 = document.getElementById("btn")
}

        
        // obj["student"] = {
        //     name: name,
        //     fname: fname,
        //     email: email,
        //     phone: phone,
        //     st_cnic: st_cnic,
        //     f_cnic: f_cnic,
        //     date: date,
        //     gender: gender,
        //     address: address,
        //     qualification: qualification,
        //     file: file,
            
        // }
        // localStorage.setItem("data", JSON.stringify(obj))
        // // console.log (obj)
//     }
    
// }







 

// if (getting === null) {
//     obj = {}
// } else {
//     obj = getting
// }
// var getting = JSON.parse(localStorage.getItem("data"))

// var table = document.getElementById('table');
// for(key in getting){
//     table.innerHTML += `
//     <tr>
//     <td>${getting[key].name}</td>
//     <td>${getting[key].email}
    
//     </tr>
//     `
//     console.log(getting[key].name)
// }








// localStorage.setItem("city", city)
// localStorage.setItem("course", course)
// localStorage.setItem("name", name)
// localStorage.setItem("fname", fname)
// localStorage.setItem("email", phone)
// localStorage.setItem("st_cnic", st_cnic)
// localStorage.setItem("f_cnic", f_cnic)
// localStorage.setItem("date", date)
// localStorage.setItem("gender", gender)
// localStorage.setItem("address", address)
// localStorage.setItem("qualification", qualification)
// localStorage.setItem("city", city)
// localStorage.setItem("file", file)