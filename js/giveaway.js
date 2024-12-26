$.noConflict();
jQuery(document).ready(function () {
  jQuery('#myForm').on('submit', function (e) {
    e.preventDefault();
    
  });
});

$(document).ready(function () {
  $('#myForm').on('submit', function (e) {
    e.preventDefault(); // prevent submissiob by default

    // this gets data from the form
    const formData = {
      email: $('#email').val(),
    };

    try {
      // simulation for a database, sves the data
      const savedData = JSON.parse(localStorage.getItem('formData')) || [];
      savedData.push(formData);
      localStorage.setItem('formData', JSON.stringify(savedData));

      // this shows success message
      $('#message')
        .text('Data saved successfully!')
        .css('color', 'green')
        .fadeIn(); 
      $('#myForm')[0].reset(); // this resets the form
    } catch (error) {
      // this shows error message
      $('#message')
        .text('An error occurred. Please try again.')
        .css('color', 'red')
        .fadeIn();
    }
  });
});
