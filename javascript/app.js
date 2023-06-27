// const form = ducument.querySelector('#form')
// const username = ducument.querySelector('#username');
// const email = ducument.querySelector('#email');
// const password = ducument.querySelector('#password');
// const cpassword = ducument.querySelector('#cpassword');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     ValidateInputs();
// })

// function ValidationInputs(){
//     const usernameval = username.value.trim()
//     const emailval = email.value.trim();
//     const passwordval = password.value.trim();
//     const cpasswordval = cpassword.value.trim();
   

//     if (username===''){
//     setError(username,'Username is Required')
//     }
//     else  {
//         setSuccess(username)
//     }

//     if (email===''){
//         setError(email,'Email is Required')
//         }
//         else if 
//             (!validateEmail(emailval)){
//                 setError(email,'Please enter valid email')
            
//         }
//         else {
//             setSuccess(email)
//         }

//         if (passwordval===''){
//             setError(password,'Password is Required')
//         }
//         else if (passwordval.length<8){
//             setError(password,'password must be atleast 8 char long ')
//         }
//         else {
//             setSuccess(password)
//         }

//         if (cpasswordval===''){
//             setError(cpassword,'Confirm password is required')
//         }
//         else if (cpasswordval===passwordval){
//             setError(cpassword,'Password does not Match')
//         }
//         else{
//             setSuccess(cpassword)
//         }
// }
// //element - password, msg-pwd is reqd
// function setError(element,message){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySeletor('.error')

//     errorElement.innerText = message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')
// }

// function setSuccess(element){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySeletor('.error')

//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
// }

// const validateEmail = (email)=> {
//     return String(email)
//     .toLowerCase()
//     .match(
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     );
// };







// function validateForm(){
//     username = document.getElementById(username).value;
//     email = document.getElementById(email).value;

//     if (username===""){
//         alert("plz enter the username");
//         return false;
//     }
//     else if (email===""){
//     alert("plz enter your email");
//     return false;
//     }
// }
// <form onsubmit ="return validateForm()"></form>


      
    //   function validateForm(event) {
    //     event.preventDefault(); // Prevent form submission if validation fails
      
    //     // Clear previous error messages
    //     clearErrors();
      
    //     // Get form input values
    //     var username = document.getElementById('username').value;
    //     var email = document.getElementById('email').value;
    //     var password = document.getElementById('password').value;
    //     var cpassword = document.getElementById('cpassword').value;
      
    //     // Validate each field
    //     var isValid = true;
      
    //     if (username.trim() === '') {
    //       displayError('username-error', 'Username is required');
    //       isValid = false;
    //     }
      
    //     if (email.trim() === '') {
    //       displayError('email-error', 'Email is required');
    //       isValid = false;
    //     } else if (!isValidEmail(email)) {
    //       displayError('email-error', 'Invalid email format');
    //       isValid = false;
    //     }
      
    //     if (password.trim() === '') {
    //       displayError('password-error', 'Password is required');
    //       isValid = false;
    //     }
      
    //     if (cpassword.trim() === '') {
    //       displayError('cpassword-error', 'Confirm Password is required');
    //       isValid = false;
    //     } else if (password !== cpassword) {
    //       displayError('cpassword-error', 'Passwords do not match');
    //       isValid = false;
    //     }
      
    //     if (isValid) {
    //       // Form is valid, perform further actions (e.g., submit the form)
    //       document.getElementById('form').submit();
    //     }
    //   }
      
    //   // Helper function to display an error message
    //   function displayError(errorElementId, message) {
    //     var errorElement = document.getElementById(errorElementId);
    //     errorElement.textContent = message;
    //     errorElement.style.display = 'block';
    //   }
      
    //   // Helper function to clear all error messages
    //   function clearErrors() {
    //     var errorElements = document.getElementsByClassName('error');
    //     for (var i = 0; i < errorElements.length; i++) {
    //       errorElements[i].style.display = 'none';
    //     }
    //   }
      
    //   // Helper function to validate email format
    //   function isValidEmail(email) {
    //     // Use a regular expression to check email format
    //     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailPattern.test(email);
    //   }
 

        function validateForm() {
          event.preventDefault(); // Prevent form submission
      
          // Reset previous error messages
          document.querySelectorAll('.error').forEach(error => error.textContent = '');
      
          // Get form values
          var username = document.getElementById('username').value;
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          var cpassword = document.getElementById('cpassword').value;
      
          // Validate username
          if (username.trim() === '') {
            document.getElementById('username-error').textContent = 'Username is required.';
          }
      
          // Validate email
          if (email.trim() === '') {
            document.getElementById('email-error').textContent = 'Email is required.';
          } else if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'Invalid email format.';
          }
      
          // Validate password
          if (password.trim() === '') {
            document.getElementById('password-error').textContent = 'Password is required.';
          }
      
          // Validate confirm password
          if (cpassword.trim() === '') {
            document.getElementById('cpassword-error').textContent = 'Confirm password is required.';
          } else if (cpassword !== password) {
            document.getElementById('cpassword-error').textContent = 'Passwords do not match.';
          }
      
          // If all fields are valid, submit the form
          if (username && email && password && cpassword && password === cpassword) {
            document.getElementById('form').submit();
          }
        }
      
        // Email validation helper function
        function isValidEmail(email) {
          // Simple email validation regex
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        }
      
        // Add event listeners to input fields
        document.getElementById('username').addEventListener('blur', validateForm);
        document.getElementById('email').addEventListener('blur', validateForm);
        document.getElementById('password').addEventListener('blur', validateForm);
        document.getElementById('cpassword').addEventListener('blur', validateForm);
      </script>