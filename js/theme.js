function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('theme-toggle');
  
    // toggle for dark theme class within the body
  
    body.classList.toggle('dark-theme');
  
    //buttin that changes text based on the current state
  
    if (body.classList.contains('dark-theme')) {
      button.textContent = 'Switch to Light Mode';
    } else {
      button.textContent = 'Switch to Dark mode';
    }
  }
  
  // code used to save the users preference theme
  
  document.addEventListener('DOMContentLoaded'), () => {
      const savedTheme = localStorage.getItem('theme');
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