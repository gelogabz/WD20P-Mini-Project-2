// NAVBAR 
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
    } else {
        nav.classList.remove('bg-light', 'shadow',);
    }

})
// // // NAVBAR 
// // // var nav = document.querySelector('nav');
// // // window.addEventListener('scroll', function () {
// // //   if (window.pageYOffset > 100) {
// // //     nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
// // //   } else {
// // //     nav.classList.remove('bg-light', 'shadow',);
// // //   }
// // // });

// // // const yourname = function(){
// // //   let firstname = document.getElementById('fname').value.trim();

// // //       if (firstname ===""){
// // //         fname.style.borderColor = "red";
// // //         fname.style.borderWidth = "2px";
// // //         document.getElementById('error1').innerHTML = "Input Required !"
// // //       }
// // //       else{
// // //         fname.style.borderColor = "green";
// // //         fname.style.borderWidth = "2px";
// // //         document.getElementById('error1').innerHTML = " "
// // //       }
// // // }

// // // const Lastname = function(){
// // //   let lastname = document.getElementById('lname').value.trim();

// // //   if (lastname ===""){
// // //     lname.style.borderColor = "red";
// // //     lname.style.borderWidth = "2px";
// // //     document.getElementById('error2').innerHTML = "Input Required !"
// // //   }
// // //   else{
// // //     lname.style.borderColor = "green";
// // //     lname.style.borderWidth = "2px";
// // //     document.getElementById('error2').innerHTML = " "
// // //   }
// // // }

// // // const emailko = function(){
// // //   let email = document.getElementById('inputEmail').value.trim();

// // //   if (email ===""){
// // //     inputEmail.style.borderColor = "red";
// // //     inputEmail.style.borderWidth = "2px";
// // //     document.getElementById('error3').innerHTML = "Input Required !"
// // //   }
// // //   else{
// // //     inputEmail.style.borderColor = "green";
// // //     inputEmail.style.borderWidth = "2px";
// // //     document.getElementById('error3').innerHTML = " "
// // //   }
// // // }

// // // const contactNo = function(){
// // //   let contact = document.getElementById('contacts').value.trim();

// // //       if (contact ===""){
// // //         contacts.style.borderColor = "red";
// // //         contacts.style.borderWidth = "2px";
// // //         document.getElementById('error4').innerHTML = "Input Required !"
// // //       }
// // //       else{
// // //         contacts.style.borderColor = "green";
// // //         contacts.style.borderWidth = "2px";
// // //         document.getElementById('error4').innerHTML = " "
// // //       }
// // // }

// // // const message = function(){
// // //   let messCom = document.getElementById('mess').value.trim();

// // //       if (messCom ===""){
// // //         mess.style.borderColor = "red";
// // //         mess.style.borderWidth = "2px";
// // //         document.getElementById('error5').innerHTML = "Input Required !"
// // //       }
// // //       else{
// // //         mess.style.borderColor = "green";
// // //         mess.style.borderWidth = "2px";
// // //         document.getElementById('error5').innerHTML = " "
// // //       }
// // // }




// // const btn = function(){
// //   let firstname = document.getElementById('fname').value.trim();
// //   let lastname = document.getElementById('lname').value.trim();
// //   let email = document.getElementById('inputEmail').value.trim();
// //   let contact = document.getElementById('contact_no').value.trim();
// //   let messCom = document.getElementById('mess').value.trim();
    
// //   if ((firstname ==="") || (lastname ==="") || (email ==="") || (contact ==="") || (messCom ==="")){
    
// //     fname.style.borderColor = "red";
// //     fname.style.borderWidth = "2px";
// //     // document.getElementById('error1').innerHTML = "Input Required !"
    
// //     lname.style.borderColor = "red";
// //     lname.style.borderWidth = "2px";
// //     // document.getElementById('error2').innerHTML = "Input Required !"
    
// //     inputEmail.style.borderColor = "red";
// //     inputEmail.style.borderWidth = "2px";
// //     // document.getElementById('error3').innerHTML = "Input Required !"
    
// //     contact_no.style.borderColor = "red";
// //     contact_no.style.borderWidth = "2px";
// //     // document.getElementById('error4').innerHTML = "Input Required !"
    
// //     mess.style.borderColor = "red";
// //     mess.style.borderWidth = "2px";
// //     // document.getElementById('error5').innerHTML = "Input Required !"
// //   }

// //   else if (firstname ==="") {
// //     fname.style.borderColor = "red";
// //     fname.style.borderWidth = "2px";
// //     // document.getElementById('error1').innerHTML = "Input Required !"
// //   }
// //   else if (lastname ==="") {
// //     lname.style.borderColor = "red";
// //     lname.style.borderWidth = "2px";
// //     // document.getElementById('error2').innerHTML = "Input Required !"
// //   }
// //   else if (email ==="") {
// //     inputEmail.style.borderColor = "red";
// //     inputEmail.style.borderWidth = "2px";
// //     // document.getElementById('error3').innerHTML = "Input Required !"
// //   }
// //   else if (contact ==="") {
// //     contact_no.style.borderColor = "red";
// //     contact_no.style.borderWidth = "2px";
// //     // document.getElementById('error4').innerHTML = "Input Required !"
// //   }
// //   else if (messCom ==="") {
// //     mess.style.borderColor = "red";
// //     mess.style.borderWidth = "2px";
// //     // document.getElementById('error5').innerHTML = "Input Required !"
// //   }
// //   else{
  
// //    alert('The form is Submitted')
// //  }

// // }


// // function yournameko(){
// //   if (firstname != ""){
// //     fname.style.borderColor = "green";
// //   }
// // }

// // function Lastnameko(){
// //   if (lastname != ""){
// //     lname.style.borderColor = "green";
// //   }
// // }

// // function emailko(){
// //   if (email != ""){
// //     inputEmail.style.borderColor = "green";
// //   }
// // }

// // function contactNoko(){
// //   if (contact != ""){
// //     contact_no.style.borderColor = "green";
// //   }
// // }

// // function messageko(){
// //   if (messCom != ""){
// //     mess.style.borderColor = "green";
// //   }
// // }



























// const btn = function(){
//   let Firstname = document.getElementById('fname').value.trim();
//   let Lastname = document.getElementById('lname').value.trim();
//   let Email = document.getElementById('email').value.trim();
//   let Contact = document.getElementById('contact').value.trim();
//   let Message = document.getElementById('mess').value.trim();  

//   if ((Firstname === "") ||  (Lastname === "") || (Email === "") || (Contact === "") || (Message === "")){
//     fname.style.borderColor = "red";
//     lname.style.borderColor = "red";
//     email.style.borderColor = "red";
//     contact.style.borderColor = "red";
//     mess.style.borderColor = "red";
//      //alert('Please input Your Name');
     
//   }else if (Firstname === ""){
//       fname.style.borderColor = "red";
//       //alert('Please input First name')
//     }
//     else if (Lastname ===""){
//       lname.style.borderColor = "red";
//       //alert('Please input Last name')
//     }
//     else if (Email ===""){
//       email.style.borderColor = "red";
//       //alert('Please input Email')
//     }
//     else if (Contact ===""){
//       contact.style.borderColor = "red";
//       //alert('Please input Contact No:')
//     }
//     else if (Message ===""){
//       mess.style.borderColor = "red";
//       //alert('Please input Message')
//     }
    
     
//     else{
     
//       alert('The form is Submitted');
//       location.reload();
//     }

// }
//     function one(){
//       if (fname != ""){
//         fname.style.borderColor = "green";
//       }
//       }
      
//       function two(){
//       if (lname != ""){
//         lname.style.borderColor = "green";
//       }
//       }
//       function four(){
//       if (contact != ""){
//         contact.style.borderColor = "green";
//       }
//       }
//       function three(){
//       if (email != ""){
//         email.style.borderColor = "green";
//       }
//       }
//       function five(){
//       if (mess != ""){
//         mess.style.borderColor = "green";
//       }
//       }
//     // if ((firstname === "") ||  (lastname === "") || (email === "") || (contact === "") || (message === "")){
//     //  fname.style.borderColor = "red";
//     //  lname.style.borderColor = "red";
//     //  email.style.borderColor = "red";
//     // contact.style.borderColor = "red";
//     // mess.style.borderColor = "red";
//     //   alert('Please input Your Name');
//     // }
//     // else{
//     //   fname.style.borderColor = "green";
//     // }

// // alert('The form is Submitted')


// // let count = 0;

// // function tryko (){
// //   count = count + 1;
// //   console.log(count);
// // }
//     }


const closebtn = function (){
  let x = document.getElementById('close')

   location.reload();
}



function btn(){
 
  one(); 
  two();
  three();
  four();
  five();
  check();


}
function one(){
let firstname = document.getElementById('fname').value;
let xx = document.getElementById('fname');
  if (firstname !== ""){
    xx.style.borderColor = "green";
    //alert("ok")
  }else if (firstname === ""){
    xx.style.borderColor = "red";
    //alert("no")
  }
}
function two(){
let lastname = document.getElementById('lname').value;
let aa = document.getElementById('lname');
  if (lastname !== ""){
    aa.style.borderColor = "green";
    //alert("ok")
  }else if (lastname === ""){
    aa.style.borderColor = "red";
    //alert("no")
  }
}
function three(){
let Email = document.getElementById('email').value;
let bb = document.getElementById('email');
  if (Email !== ""){
    bb.style.borderColor = "green";
    //alert("ok")
  }else if (Email === ""){
    bb.style.borderColor = "red";
    //alert("no")
  }
}
function four(){
  let Contact = document.getElementById('contact').value;
  let cc = document.getElementById('contact');
  if (Contact !== ""){
    cc.style.borderColor = "green";
    //alert("ok")
  }else if (Contact === ""){
    cc.style.borderColor = "red";
    //alert("no")
  }
}
function five(){
  let Message = document.getElementById('mess').value;
  let mm = document.getElementById('mess');
  if (Message !== ""){
    mm.style.borderColor = "green";
    //alert("ok")
  }else if (Message === ""){
    mm.style.borderColor = "red";
    //alert("no")
  }
}

function check(){
  let one = document.getElementById('fname').value;
  let two = document.getElementById('lname').value;
  let three = document.getElementById('email').value;
  let four = document.getElementById('contact').value;
  let five = document.getElementById('mess').value;

  if ((one !="") && (two !="") && (three !="") && (four !="") && (five !="")){
    alert("Submitted Successfully!");
    location.reload();
  }
  else{
    alert("Complete the form!");
  }
}
