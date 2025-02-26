document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from The Cat API
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            displayCatData(data[0]);
        })
        .catch(error => {
            console.error('Error fetching cat data:', error);
            document.getElementById('api-content').innerHTML = 
                '<p>Failed to load cat data. Please try again later.</p>';
        });
});

function displayCatData(cat) {
    const apiContent = document.getElementById('api-content');
    
    // Create elements to display the cat data
    const catCard = document.createElement('div');
    catCard.className = 'cat-card';
    
    catCard.innerHTML = `
        <h3>Random Cat</h3>
        <img src="${cat.url}" alt="Random cat" style="max-width: 100%; border-radius: 8px;">
        <details>
            <summary>Cat Details</summary>
            <p><strong>Image ID:</strong> ${cat.id}</p>
            <p><strong>Width:</strong> ${cat.width}px</p>
            <p><strong>Height:</strong> ${cat.height}px</p>
        </details>
    `;
    
    apiContent.appendChild(catCard);
}
