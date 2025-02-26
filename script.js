document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from a free API
    // For example, let's use the Random User API
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            displayUserData(data.results[0]);
        })
        .catch(error => {
            console.error('Error fetching API data:', error);
            document.getElementById('api-content').innerHTML = 
                '<p>Failed to load API data. Please try again later.</p>';
        });
});

function displayUserData(user) {
    const apiContent = document.getElementById('api-content');
    
    // Create elements to display the user data
    const userCard = document.createElement('div');
    userCard.className = 'user-card';
    
    userCard.innerHTML = `
        <h3>Random User Data</h3>
        <img src="${user.picture.large}" alt="Random user">
        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
        <details>
            <summary>More Information</summary>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Age:</strong> ${user.dob.age}</p>
            <p><strong>Registered:</strong> ${new Date(user.registered.date).toLocaleDateString()}</p>
        </details>
    `;
    
    apiContent.appendChild(userCard);
}
