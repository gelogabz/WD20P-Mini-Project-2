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
    var email = document.getElementById("re").value.trim();
    var password = document.getElementById("rp").value.trim();
    var passwordRetype = document.getElementById("rrp").value.trim();
    
    
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
        alert("Passwords don't match, retype your Password.");
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
        return;
    }
    else if(emailArray.indexOf(email) == -1){
        emailArray.push(email);
        passwordArray.push(password);
        alert("Hi " +email + ", " + "thank you for registering. \n You will now be redirected to the Accounts page.");
        document.getElementById("re").value ="";
        document.getElementById("rp").value="";
        document.getElementById("rrp").value="";
        window.location= "MembersLounge.html";
        return;
    }
    else{
        alert(email + " is already registered.");
        return ;
    }
}

function login(){
  event.preventDefault();
    var email = document.getElementById("se").value.trim();
    var password = document.getElementById("sp").value.trim();
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
    else  {
        alert(email + " Login Sucessfully. Welcome to our Website.");
        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        window.location= "MembersLounge.html";
        return ;
    }
}

function newsletter(){
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    
    if (name == ""){
        alert("Name required.");
    }
    else if (email == ""){
        alert("Email required.");
    }
    else{
        alert(name + " " + email + " Successfully Submitted Thank you ");
        window.location = "index.html"; 
    }
};

//for FOOTER includehtml function

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  };

includeHTML();