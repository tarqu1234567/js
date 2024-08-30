let fanStatus = 1;
let acStatus = false;

// Function to toggle AC on/off
function toggleAC() {
    if (!acStatus) { // Using shorthand for checking if acStatus is false
        acStatus = true;
        console.log("AC is ON");
    } else {
        acStatus = false;
        console.log("AC is OFF");
    }
}

// Function to increase fan speed
function Plus() {
    if (fanStatus < 5 && acStatus) { // Checking that fan speed can increase and AC is ON
        fanStatus += 1;
        console.log("Fan speed: " + fanStatus);
    }
}

// Function to decrease fan speed
function minus() {
    if (fanStatus > 0 && acStatus) { // Checking that fan speed can decrease and AC is ON
        fanStatus -= 1;
        console.log("Fan speed: " + fanStatus);
    }
}

// Function to control fan logic
function fan() {
    if (acStatus) { // Check if AC is ON
        if (fanStatus < 3) {
            fanStatus++;
        } else {
            fanStatus = 1;
        }
        console.log("Fan status adjusted: " + fanStatus);
    }
}