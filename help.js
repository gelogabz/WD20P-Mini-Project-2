
// NAVBAR 
// var nav = document.querySelector('nav');
// window.addEventListener('scroll', function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add('bg-light', 'shadow', 'bg-opacity-75');
//   } else {
//     nav.classList.remove('bg-light', 'shadow',);
//   }
// });


// const form = document.getElementById('form');
// const firstname = document.getElementById('fname');
// const lastname = document.getElementById('lname');
// const email = document.getElementById('email');
// const contact = document.getElementById('contact');
// const message = document.getElementById('mess');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();
//       checkInputs();
      
//   })

//     function checkInputs() {
//       const fvalue = firstname.value.trim();
//       const lvalue =lastname.value.trim();
//       const evalue =email.value.trim();
//       const cvalue =contact.value.trim();
//       const mvalue =message.value.trim();

//       if (fvalue === ' '){
//         setErrorFor(firstname, '')
//       } else{
//         setSuccessFor(username);
//       } 
//     }


const btn = function(){
    let firstname = document.getElementById('fname').value
    let lastname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let contact = document.getElementById('contact').value
    let message = document.getElementById('mess').value


      // if (firstname ===""){
      //   alert('Please input First name')
      // }
      // else if (lastname ===""){
      //   alert('Please input Last name')
      // }
      // else if (email ===""){
      //   alert('Please input Email')
      // }
      // else if (contact ===""){
      //   alert('Please input Contact No:')
      // }
      // else if (message ===""){
      //   alert('Please input Message')
      // }
      // else{
      //   alert('The form is Submitted')
      // }


      if (firstname ===""){
        fname.style.borderColor = "red";
        alert('Please input Your Name')
       
      }
      else{
        fname.style.borderColor = "green";
      }

  // alert('The form is Submitted')
}

// let count = 0;

// function tryko (){
//   count = count + 1;
//   console.log(count);
// }






