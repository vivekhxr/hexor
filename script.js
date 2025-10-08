// // JavaScript code for future interactions or enhancements can go here
// document.addEventListener('DOMContentLoaded', () => {
//     // For example, add an event listener to buttons
//     const joinButtons = document.querySelectorAll('.join-btn');
//     joinButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             alert("You have joined the VIP Channel!");
//         });
//     });
// });
// Countdown timer functionality
let timeLeft = 60; // Set the countdown timer to 60 seconds
//KARSH
function updateTimer() {
    const timerElement = document.getElementById('seconds');
    const seconds = Math.max(0, timeLeft);
    timerElement.innerText = seconds < 10 ? '0' + seconds : seconds;

    if (timeLeft === 0) {
        clearInterval(timerInterval);
        timerElement.innerText = '00'; // Reset to 00 when timer finishes
    } else {
        timeLeft--;
    }
}

const timerInterval = setInterval(updateTimer, 1000);
