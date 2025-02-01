async function send_user_id() 
{
    try
    {
        let send_user_id = localStorage.getItem('user_id');

        let send_data = await fetch('data.php', 
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: send_user_id }) // Correct structure
            })
        let fetch_data = await send_data.json();
        displayData(fetch_data);
    }catch(error)
    {
        alert('The JSON has an error: ' + error);
    }    
}

function displayData(data) 
{
    const tableBody = document.getElementById('data-table-body'); // Assuming you have a <tbody> element with this ID
    tableBody.innerHTML = ''; // Clear existing content

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.user_info_details_id}</td>
            <td>${item.site_name}</td>
            <td>${item.site_url}</td>
            <td>${item.site_username}</td>
            <td>${item.site_password}</td>
            <td>${item.notes}</td>
        `;
        tableBody.appendChild(row);
    });
}

send_user_id();