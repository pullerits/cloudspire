// Get references to DOM elements
const video = document.getElementById("catVideo");
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const speedSlider = document.getElementById("speedSlider");
const speedValue = document.getElementById("speedValue");

// Initial setup: Pause the video at the start
video.currentTime = 0; 
video.pause();

// Function to start the video (play once)
function startVideo() {
    video.muted = false;        // Unmute the video on user interaction
    video.currentTime = 0; // Reset to the beginning
    video.play();          // Play the video
}

// Function to stop the video
function stopVideo() {
    video.pause();         // Pause the video
    video.currentTime = 0; // Reset to the beginning
}

// Function to update playback speed
function updateSpeed() {
    const speed = parseFloat(speedSlider.value);
    video.playbackRate = speed; // Adjust video speed
    speedValue.textContent = `${speed.toFixed(1)}x`; // Update the displayed speed
}

// Event listeners
startButton.addEventListener("click", startVideo);
stopButton.addEventListener("click", stopVideo);
speedSlider.addEventListener("input", updateSpeed);
