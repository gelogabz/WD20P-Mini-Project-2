
// NAVBAR 
// var nav = document.querySelector('nav');
// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
//   } else {
//     nav.classList.remove('bg-light', 'shadow',);
//   }
// });


const closebtn = function (){
  let x = document.getElementById('close')

   location.reload();
}




const yourname = function(){
  let firstname = document.getElementById('fname').value.trim();

      if (firstname ===""){
        fname.style.borderColor = "red";
        fname.style.borderWidth = "2px";
        document.getElementById('error1').innerHTML = "Input Required !"
      }
      else{
        fname.style.borderColor = "green";
        fname.style.borderWidth = "2px";
        document.getElementById('error1').innerHTML = " "
      }
}

const Lastname = function(){
  let lastname = document.getElementById('lname').value.trim();

  if (lastname ===""){
    lname.style.borderColor = "red";
    lname.style.borderWidth = "2px";
    document.getElementById('error2').innerHTML = "Input Required !"
  }
  else{
    lname.style.borderColor = "green";
    lname.style.borderWidth = "2px";
    document.getElementById('error2').innerHTML = " "
  }
}

const emailko = function(){
  let email = document.getElementById('inputEmail').value.trim();

  if (email ===""){
    inputEmail.style.borderColor = "red";
    inputEmail.style.borderWidth = "2px";
    document.getElementById('error3').innerHTML = "Input Required !"
  }
  else{
    inputEmail.style.borderColor = "green";
    inputEmail.style.borderWidth = "2px";
    document.getElementById('error3').innerHTML = " "
  }
}

const contactNo = function(){
  let contact = document.getElementById('contacts').value.trim();

      if (contact ===""){
        contacts.style.borderColor = "red";
        contacts.style.borderWidth = "2px";
        document.getElementById('error4').innerHTML = "Input Required !"
      }
      else{
        contacts.style.borderColor = "green";
        contacts.style.borderWidth = "2px";
        document.getElementById('error4').innerHTML = " "
      }
}

const message = function(){
  let messCom = document.getElementById('mess').value.trim();

      if (messCom ===""){
        mess.style.borderColor = "red";
        mess.style.borderWidth = "2px";
        document.getElementById('error5').innerHTML = "Input Required !"
      }
      else{
        mess.style.borderColor = "green";
        mess.style.borderWidth = "2px";
        document.getElementById('error5').innerHTML = " "
      }
}




const btn = function(){
  let firstname = document.getElementById('fname').value.trim();
  let lastname = document.getElementById('lname').value.trim();
  let email = document.getElementById('inputEmail').value.trim();
  let contact = document.getElementById('contacts').value.trim();
  let messCom = document.getElementById('mess').value.trim();
  // let all = firstname + lastname + email + contact;
  // let error = "Input Required !"
    
    if (firstname === ""  &&  lastname === ""){
      fname.style.borderColor = "red";
      fname.style.borderWidth = "2px";
      document.getElementById('error1').innerHTML = "Input Required !"
    }

    else if (lastname === ""){
      lname.style.borderColor = "red";
      lname.style.borderWidth = "2px";
      document.getElementById('error2').innerHTML = "Input Required !"
    }

    else if (email === ""){
      inputEmail.style.borderColor = "red";
      inputEmail.style.borderWidth = "2px";
      document.getElementById('error3').innerHTML = "Input Required !"
    }

    else if (contact === ""){
      contacts.style.borderColor = "red";
      contacts.style.borderWidth = "2px";
      document.getElementById('error4').innerHTML = "Input Required !"
    }

    else if (messCom === ""){
      mess.style.borderColor = "red";
      mess.style.borderWidth = "2px";
      document.getElementById('error5').innerHTML = "Input Required !"
    }
    else{
      alert('success');
      location.reload();
    }
}





// let firstname = document.getElementById('fname').value.trim();
// let lastname = document.getElementById('lname').value.trim();
// let email = document.getElementById('inputEmail').value.trim();
// let contact = document.getElementById('contacts').value.trim();
// let messCom = document.getElementById('mess').value.trim();

//   if (firstname !== ""){
//     fname.style.borderColor = "green";
//     fname.style.borderWidth = "2px";
//   }

// const btn = function(){


//   if (firstname !== ""){
//     fname.style.borderColor = "green";
//     fname.style.borderWidth = "2px";
//   }
//   else if (lastname !== ""){
//     lname.style.borderColor = "green";
//     lname.style.borderWidth = "2px";
//   }
//   else if (email !== ""){
//     inputEmail.style.borderColor = "green";
//     inputEmail.style.borderWidth = "2px";
//   }
//   else if (contact !== ""){
//     contacts.style.borderColor = "green";
//     contacts.style.borderWidth = "2px";
//   }
//   else if (messCom !== ""){
//     mess.style.borderColor = "green";
//     mess.style.borderWidth = "2px";
//   }
//   else{
//     fname.style.borderColor = "red";
//     fname.style.borderWidth = "2px";
//     document.getElementById('error1').innerHTML = "Input Required !"
//     lname.style.borderColor = "red";
//     lname.style.borderWidth = "2px";
//     document.getElementById('error2').innerHTML = "Input Required !"
//     inputEmail.style.borderColor = "red";
//     inputEmail.style.borderWidth = "2px";
//     document.getElementById('error3').innerHTML = "Input Required !"
//     contacts.style.borderColor = "red";
//     contacts.style.borderWidth = "2px";
//     document.getElementById('error4').innerHTML = "Input Required !"
//     mess.style.borderColor = "red";
//     mess.style.borderWidth = "2px";
//     document.getElementById('error5').innerHTML = "Input Required !"
//   }
// }

// let count = 0;

// function tryko (){
//   count = count + 1;
//   console.log(count);
// }

// const submit(){
// 	let x = document.getElementbyId('firstname').value.trim();
// let y = document.getElementbyId('variable')
	
// 	if ( x !== "")
// 	alert('Success')

// }





