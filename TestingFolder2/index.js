let get_user_id = document.getElementById("user_id_php");

async function send_user_id() {
    try {
        console.log('The user id is sent');
        let send_user_id = localStorage.getItem('user_id');

        let response = await fetch('data.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: send_user_id }) // Correct structure
        });

        let fetch_data = await response.json();
        console.log(fetch_data); // Check what is received

        // Ensure you access the user_id key
        if (fetch_data.user_id) {
            get_user_id.innerText = fetch_data.user_id; // Update HTML content
        } else {
            alert("No user_id received");
        }
    } catch (error) {
        alert('The JSON has an error: ' + error);
    }
}

send_user_id(); // Call function when script loads
