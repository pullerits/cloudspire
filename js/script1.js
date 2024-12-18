function toggleImage() {
    // Get the image element
    const img = document.getElementById('myImage');

    const header = document.getElementById('imageHeader');

    // Check the current image source and toggle it
    if (img.src.includes('happy.png')) {
        // If it's happy, change to sad
        img.src = 'assets/images/sad.png';
        header.textContent = 'Here is sad image';
    } else {
        // If it's sad, change to happy
        img.src = 'assets/images/happy.png';
        header.textContent = 'Here is happy image';
    }
}


let clickCount = 0;    // Keeps track of total clicks
let levelCount = 1;    // Keeps track of the current level
const cookieImages = ['assets/images/cookie0.png', 
                'assets/images/cookie1.png', 
                'assets/images/cookie2.png', 
                'assets/images/cookie3.png', 
                'assets/images/cookie4.png']; // Array of cookie images

function cookieClicker() {
    // Increment the click counter
    clickCount++;
    const clickCountElement = document.getElementById('clickCount');
    const cookie = document.getElementById('cookiePng');
    const cookieLevelElement = document.getElementById('cookieLevel');

    // Update click counter display
    clickCountElement.textContent = `${clickCount}`;

    // Add the shrink effect for visual feedback
    cookie.classList.add('shrink');
    setTimeout(() => cookie.classList.remove('shrink'), 100);

    // Change the cookie image every 10 clicks
    if (clickCount % 10 === 0) {
        levelCount++;  // Increment levelCount (do not reset it)
        const imageIndex = (levelCount - 1) % cookieImages.length; // Cycle through images
        cookie.src = cookieImages[imageIndex];
        cookieLevelElement.textContent = `Level ${levelCount} cookie`; // Display current level
    }

    // Win condition at 100 clicks
    if (clickCount > 99) {
        cookie.src = 'assets/images/youWin.png';
        clickCountElement.textContent = `Congratulations!!!`;
        cookieLevelElement.textContent = `You reached the max level!`;
    }
}


