let name = document.getElementById("iny");
let pass = document.getElementById("inp");
let email = document.getElementById("ine");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let nam = /[a-z]+ +[a-z]/i;
let pas = /[pass.length>=8]+[0-9]/;
let ema = /[a-z0-9]+\@+[a-z]+\.+[a-z]/;

function namer () {
    if(nam.test(name.value)===false) {
        p1.innerHTML="Enter your name correctly";
        name.style.borderBottomColor="red";
    }else{
        p1.innerHTML="";
        name.style.borderBottomColor="green";
    }
}
function passw () {
    if(pas.test(pass.value)===false) {
        p3.innerHTML="Enter your password correctly";
        pass.style.borderBottomColor="red";
    }else{
        p3.innerHTML="";
        pass.style.borderBottomColor="green";
    }
}
function emai () {
    if(ema.test(email.value)===false) {
        p2.innerHTML="Enter your password correctly";
        email.style.borderBottomColor="red";
    }else{
        p2.innerHTML="";
        email.style.borderBottomColor="green";
    }
}
function sign () {
    let result = "welcom "+" { "+name.value+" } "+" \n "+" your email is "+" { "+email.value+ " } "+ "\n" +" your password is "+" { "+pass.value+" } "; 
alert(result);
}