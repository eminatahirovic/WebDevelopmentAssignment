// about us accordion menu 

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }



//INDEX HTML
//GEOLOCATION API from index.html 

  const successCallback = (position) => {
console.log(position);
};

const errorCallback = (error) => {
console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//READ MORE SECTION 


function showMore(){
//removes the link
document.getElementById('link').parentElement.removeChild('link');
//shows the #more
document.getElementById('more').style.display = "block";
}


//content toggle section faq from index page 

function toggleContent(contentId) {
  var content = document.getElementById(contentId); // this is a function to check the toggle visibility of the content

  if (content.style.display === "block") {
    content.style.display = "none"; // this function hides the content if it is already visible
  } else {
    content.style.display = "block"; // this function shows the content if it is hidden 
  }
}


//toastr success message from index page 

  window.onload = function() {
  toastr.success('Welcome! SHOPPINGWEBSITE is successfully loaded!', 'Success!');
  };



// validation script FOR LOGIN 


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





//light dark mode functions from mens html

  
// Function that switches from light and dark themes 

function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('theme-toggle');

  // toggle for dark theme class within the body

  body.classList.toggle('dark-theme');

  //buttin that changes text based on the current state

  if (body.classList.contains('dark-theme')) {
    button.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    button.textContent = 'Switch to Dark mode';
    localStorage.setItem('theme', 'dark');
  }
}

// code used to save the users preference theme

document.addEventListener('DOMContentLoaded'), () => {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const button = document.getElementById('theme-toggle');

}

if (savedTheme=== 'dark') {
  document.body.classList.add('dark-theme');
  document.getElementById('theme-toggle').textContent = 'Switch to Light Mode';
}

//Event listener for changes within the theme toggle button

document.getElementById('theme-toggle').addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light')
  }
});


//this is for interactive galleries 
 

// Add this JavaScript to handle the image enlargement and back to normal behavior
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.images img');
    const enlargedImageContainer = document.createElement('div');
    enlargedImageContainer.classList.add('enlarged-image');
    document.body.appendChild(enlargedImageContainer);

    const enlargedImage = document.createElement('img');
    enlargedImageContainer.appendChild(enlargedImage);

    // Click event to enlarge the image
    images.forEach(image => {
        image.addEventListener('click', function() {
            enlargedImage.src = image.src; // Set the source of the enlarged image
            enlargedImageContainer.classList.add('active'); // Show the enlarged image container
        });
    });

    // Click anywhere outside the enlarged image to return to normal view
    enlargedImageContainer.addEventListener('click', function(event) {
        if (event.target === enlargedImageContainer) {
            enlargedImageContainer.classList.remove('active'); // Hide the enlarged image
        }
    });
});



// index section font size changer 



function myFunction() {
  document.getElementById("fontSizeExample").style.fontSize = "x-small";
}


