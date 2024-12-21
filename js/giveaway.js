$.noConflict();
jQuery(document).ready(function () {
  jQuery('#myForm').on('submit', function (e) {
    e.preventDefault();
    
  });
});

$(document).ready(function () {
  $('#myForm').on('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get the form data
    const formData = {
      email: $('#email').val(),
    };

    try {
      // Save the data in localStorage (simulates saving to a file or database)
      const savedData = JSON.parse(localStorage.getItem('formData')) || [];
      savedData.push(formData);
      localStorage.setItem('formData', JSON.stringify(savedData));

      // Show success message
      $('#message')
        .text('Data saved successfully!')
        .css('color', 'green')
        .fadeIn(); // Use fadeIn for better visibility
      $('#myForm')[0].reset(); // Reset the form
    } catch (error) {
      // Show error message
      $('#message')
        .text('An error occurred. Please try again.')
        .css('color', 'red')
        .fadeIn();
    }
  });
});
