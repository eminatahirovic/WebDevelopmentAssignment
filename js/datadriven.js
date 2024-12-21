$(document).ready(function () {
    // Example JSON data
    const jsonData = [
      {
        "title": "New Year's Eve",
        "description": "31.12."
      },
      {
        "title": "New Year's Day",
        "description": "01.01."
      },
      {
        "title": "Valentine's Day",
        "description": "14.02."
      },
      {
        "title": "International Women's Day",
        "description": "08.03."
      },
      {
        "title": "Labor Day",
        "description": "01.05."
      }
    ];

    // Dynamically populate the table with JSON data
    let tableBody = $('#nonWorkingDaysTable tbody');
    jsonData.forEach(function (day) {
      let row = `
        <tr>
          <td>${day.description}</td>
          <td>${day.title}</td>
        </tr>
      `;
      tableBody.append(row);
    });
  });