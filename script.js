// Images behind doors
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// Task #46
const playDoor = () => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
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
    if (!isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor();
    };
    
};

// Door #2
let doorImage2 = document.getElementById('door2');
doorImage2.onclick = () => {
    if (!isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor();
    };
};

// Door #3
let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
    if (!isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor();
    };
};

// Randomly generate what's behind doors
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const randomChoreDoorGenerata = () => {
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

randomChoreDoorGenerata();

// Game over
const startButton = document.getElementById('start');
const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
    }
};