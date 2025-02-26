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


// Add cat eyes for ec
document.addEventListener('DOMContentLoaded', function() {
  const eyes = document.querySelectorAll('.pupil');
  const eyeContainers = document.querySelectorAll('.eye');
  
  // Get the container boundaries for calculations
  const container = document.getElementById('cat-eyes-container');
  
  document.addEventListener('mousemove', function(e) {
    // Get mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // For each eye, calculate the position of the pupil
    eyes.forEach((eye, index) => {
      // Get the position of the eye container
      const rect = eyeContainers[index].getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;
      
      // Calculate angle between mouse and eye center
      const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
      
      // Calculate distance (limited to stay within the eye)
      const distance = Math.min(
        rect.width / 4,
        Math.hypot(mouseX - eyeX, mouseY - eyeY) / 10
      );
      
      // Calculate new position
      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;
      
      // Apply the transformation
      eye.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
  });
  
  // Add some interactivity when clicking on the eyes
  container.addEventListener('click', function() {
    // Make eyes blink
    eyeContainers.forEach(eye => {
      eye.style.height = '5px';
      setTimeout(() => {
        eye.style.height = '40px';
      }, 150);
    });
  });
});
