// Images behind doors
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

// Door #1
let doorImage1 = document.getElementById('door1');
doorImage1.onclick = () => {
    doorImage1.src = botDoorPath;
};

// Door #2
let doorImage2 = document.getElementById('door2');
doorImage2.onclick = () => {
    doorImage2.src = beachDoorPath;
};

// Door #3
let doorImage3 = document.getElementById('door3');
doorImage3.onclick = () => {
    doorImage3.src = spaceDoorPath;
};

// Randomly generate what's behind doors
let numClosedDoors = 3;
const randomChoreDoorGenerata = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
};