// Select the button and audio elements
const kickButton = document.getElementById('kick-button');
const kickSound = document.getElementById('kick-sound');
const snareButton = document.getElementById('snare-button');
const snareSound = document.getElementById('snare-sound');
const hihatButton = document.getElementById('hihat-button');
const hihatSound = document.getElementById('hihat-sound');
const tomButton = document.getElementById('tom-button');
const tomSound = document.getElementById('tom-sound');
const rideButton = document.getElementById('ride-button');
const rideSound = document.getElementById('ride-sound');


// Function to play the kick sound
function playKickSound() {
    kickSound.currentTime = 0; // Rewind to the start
    kickSound.play(); // Play the sound
}

// Function to play the snare sound
function playSnareSound() {
    snareSound.currentTime = 0; // Rewind to the start
    snareSound.play(); // Play the sound
}

// Function to play the hi-hat sound
function playHihatSound() {
    hihatSound.currentTime = 0; // Rewind to the start
    hihatSound.play(); // Play the sound
}

// Function to play the tom sound
function playTomSound() {
    tomSound.currentTime = 0; // Rewind to the start
    tomSound.play(); // Play the sound
}

// Function to play the ride sound
function playRideSound() {
    rideSound.currentTime = 0; // Rewind to the start
    rideSound.play(); // Play the sound
}


// Add event listeners to the buttons
kickButton.addEventListener('click', playKickSound);
snareButton.addEventListener('click', playSnareSound);
hihatButton.addEventListener('click', playHihatSound);
tomButton.addEventListener('click', playTomSound);
rideButton.addEventListener('click', playRideSound);


// Add a single event listener for keydown events
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'a') {
        playKickSound();
    } else if (key === 's') {
        playSnareSound();
    } else if (key === 'd') {
        playHihatSound();
    } else if (key === 'f') {
        playTomSound();
    } else if (key === 'g') {
        playRideSound();
    }
});

























/*
// Select the kick button and audio elements
const kickButton = document.getElementById('kick-button');
const kickSound = document.getElementById('kick-sound');

// Add an event listener to the button
// When the button is clicked, play the kick sound
kickButton.addEventListener('click', () => {
    kickSound.currentTime = 0; // Rewind to the start
    kickSound.play(); // Play the sound
});


// Select the ride button and audio elements
const rideButton = document.getElementById('ride-button');
const rideSound = document.getElementById('ride-sound');

// Add an event listener to the button
// When the button is clicked, play the kick sound
rideButton.addEventListener('click', () => {
    rideSound.currentTime = 0; // Rewind to the start
    rideSound.play(); // Play the sound
});

*/
/*
// Select the button and audio elements
const kickButton = document.getElementById('kick-button');
const kickSound = document.getElementById('kick-sound');
const rideButton = document.getElementById('ride-button');
const rideSound = document.getElementById('ride-sound');

// Function to play the kick sound
function playKickSound() {
    kickSound.currentTime = 0; // Rewind to the start
    kickSound.play(); // Play the sound
}

// Function to play the ride sound
function playRideSound() {
    rideSound.currentTime = 0; // Rewind to the start
    rideSound.play(); // Play the sound
}

// Add event listener to the kick button
// When the kick button is clicked, play the kick sound
kickButton.addEventListener('click', playKickSound);

// Add event listener to the ride button
// When the snare button is clicked, play the snare sound
rideButton.addEventListener('click', playRideSound);

/*
// Add event listener for keydown events
document.addEventListener('keydown', (event) => {
    // Check if the 'a' key is pressed
    if (event.key === 'a' || event.key === 'A') {
        playKickSound();
    }
});

// Add event listener for keydown events
document.addEventListener('keydown', (event) => {
    // Check if the 'a' key is pressed
    if (event.key === 's' || event.key === 'S') {
        playRideSound();
    }
});




// Add a single event listener for keydown events
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'a') {
        playKickSound();
    } else if (event.key.toLowerCase() === 's') {
        playRideSound();
    }
});

*/
