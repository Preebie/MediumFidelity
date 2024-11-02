let currentPost = 0; // Initialize the current post index
const posts = document.querySelectorAll('.post'); // Select all posts

// Show the first post
posts[currentPost].classList.add('active');

// Function to show the next post
function showNextPost() {
    // Hide the current post
    posts[currentPost].classList.remove('active');
    currentPost++; // Move to the next post

    // Check if there are more posts to show
    if (currentPost < posts.length) {
        posts[currentPost].classList.add('active'); // Show the next post
    } else {
        // Optional: Reset to the first post or do nothing
        currentPost = 0; // Uncomment to loop back to the first post
        // posts[currentPost].classList.add('active'); // Uncomment if looping back
    }
}

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Check if the user has scrolled near the bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        showNextPost(); // Call the function to show the next post
    }
});
