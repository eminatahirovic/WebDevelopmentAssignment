
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();

      // this clears error messages
      const errorMessages = document.querySelectorAll(".error");
      errorMessages.forEach((error) => (error.textContent = ""));

      let isValid = true;

      //this validates the email
      const email = document.getElementById("loginName").value.trim();
      if (!email) {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
      }

      //this validates the date of birth
      const dob = document.getElementById("dob").value.trim();
      if (!dob) {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        isValid = false;
      }

      // this validates the phone number
      const phone = document.getElementById("phoneNumber").value.trim();
      if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
        isValid = false;
      }

      // this validates the address
      const address = document.getElementById("address").value.trim();
      if (address.length < 10) {
        document.getElementById("addressError").textContent = "Address must be at least 10 characters.";
        isValid = false;
      }

      // this validates the password
      const password = document.getElementById("loginPassword").value.trim();
      if (password.length < 10 || password.length > 15) {
        document.getElementById("passwordError").textContent = "Password must be between 10 and 15 characters.";
        isValid = false;
      }

      // if the rresponse is valid a success message will show
      if (isValid) {
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        successMessage.innerText = "Data saved successfully!";
        
       // this clears the form 
        event.target.reset();
      }
    });
 

 
    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.js"


