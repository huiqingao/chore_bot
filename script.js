// Images behind doors
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// Initiate parameters
let numClosedDoors = 3; // Set three doors
let openDoor1; // The path of the image shown in door #1
let openDoor2; // The path of the image shown in door #2
let openDoor3; // The path of the image shown in door #3
let currentlyPlaying = true; // Currently playing

// Start a new game
const startButton = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
};

const startRound = () => {
    openDoor1 = closedDoorPath;
    openDoor2 = closedDoorPath;
    openDoor3 = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
};

startRound();

// Randomly generate what's behind doors
const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } 
    else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
};

// Determine whether a door is open
const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

// Door #1
let doorImage1 = document.getElementById('door1');
doorImage1.onclick = () => {    
    if (currentlyPlaying && !isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
    
};

// Door #2
let doorImage2 = document.getElementById('door2');
doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    };
};

// Door #3
let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    };
};

// Check if the player wins
const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } 
    else if (isBot(door)) {
        gameOver();
    }
};

// Check if the player loses
const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

// Game over
const startButton = document.getElementById('start');
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    }
    else {
        startButton.innerHTML = 'Game over! Play again?';
    }
    currentlyPlaying = false;
};