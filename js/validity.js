
    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();

      // Clear previous error messages
      const errorMessages = document.querySelectorAll(".error");
      errorMessages.forEach((error) => (error.textContent = ""));

      let isValid = true;

      // Validate email
      const email = document.getElementById("loginName").value.trim();
      if (!email) {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
      }

      // Validate date of birth
      const dob = document.getElementById("dob").value.trim();
      if (!dob) {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        isValid = false;
      }

      // Validate phone number
      const phone = document.getElementById("phoneNumber").value.trim();
      if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
        isValid = false;
      }

      // Validate address
      const address = document.getElementById("address").value.trim();
      if (address.length < 10) {
        document.getElementById("addressError").textContent = "Address must be at least 10 characters.";
        isValid = false;
      }

      // Validate password
      const password = document.getElementById("loginPassword").value.trim();
      if (password.length < 10 || password.length > 15) {
        document.getElementById("passwordError").textContent = "Password must be between 10 and 15 characters.";
        isValid = false;
      }

      // If valid, show success message
      if (isValid) {
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        successMessage.innerText = "Data saved successfully!";
        
        // Clear the form
        event.target.reset();
      }
    });
 

 
    src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.js"


