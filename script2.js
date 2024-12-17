// Get references to DOM elements
const gif = document.getElementById("catGif");
const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");

// Store the GIF source and static placeholder
const gifSrc = "cat.gif"; // Replace with your GIF path
const staticFrame = "cat.png"; // Replace with a static frame (first frame of the GIF)
const sound = new Audio("cat.mp3")

// Initial setup - stop the GIF (display the static frame)
gif.src = staticFrame;

// Function to play GIF once
function startGif() {

    sound.currentTime = 0;
    sound.play();

    // Replace the src with the GIF source that plays once
    gif.src = ""; // Clear the src to reset the animation
    setTimeout(() => {
        gif.src = gifSrc + "?playonce"; // Append a query to ensure reload
    }, 0);
}

// Function to stop the GIF (show static frame)
function stopGif() {
    gif.src = staticFrame;
    sound.pause();
    sound.currentTime = 0;
}

// Event listeners
startButton.addEventListener("click", startGif);
stopButton.addEventListener("click", stopGif);
