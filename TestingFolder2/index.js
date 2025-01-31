fetch('data.php')  // Replace with the actual PHP file name
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        console.log(data);  // Log the fetched data
        displayData(data);  // Call function to display data
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display data in an HTML table
function displayData(data) {
    const tableBody = document.getElementById('data-table-body'); // Assuming you have a <tbody> element with this ID
    tableBody.innerHTML = ''; // Clear existing content

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.site_name}</td>
            <td>${item.site_url}</td>
            <td>${item.site_username}</td>
            <td>${item.site_password}</td>
            <td>${item.notes}</td>
        `;
        tableBody.appendChild(row);
    });
}
