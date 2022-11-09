// NAVBAR 
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
  } else {
    nav.classList.remove('bg-light', 'shadow',);
  }
});

//LOGIN & REGISTER

var emailArray=[];
var passwordArray=[];
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");


function register(){
  event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    
    if (email == ""){
        alert("Username required.");
        return ;
    }
    else if (password == ""){
        alert("Password required.");
        return ;
    }
    else if (passwordRetype == ""){
        alert("Password required.");
        return ;
    }
    else if ( password != passwordRetype ){
        alert("Password don't match retype your Password.");
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        alert(email + " " + "Thanks for registration. \n Try to login Now");
        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
        return;
    }
    else{
        alert(email + " is already register.");
        return ;
    }
}
function login(){
  event.preventDefault();
    var email = document.getElementById("se").value;
    var password = document.getElementById("sp").value;
    var i = emailArray.indexOf(email);

    if(emailArray.indexOf(email) == -1){
        if (email == ""){
            alert("Username required.");
            return ;
        }
        alert("Username does not exist.");
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Password required.");
            return ;
        }
        alert("Password does not match.");
        return ;
    }
    else {
        alert(email + " Login Sucessfully. Welcome to our Website.");
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        location.reload();
        return ;
    }
}
