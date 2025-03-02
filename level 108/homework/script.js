// Function to start countdown timer
function startCountdown(targetDate) {
    const countdown = setInterval(() => {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "Time's up!";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Usage: Set target date and start countdown
const targetDate = new Date("December 31, 2025 23:59:59").getTime();
startCountdown(targetDate);














function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Example usage:
delayedMessage("This is a delayed message", 2000); // Displays the message after 2 seconds
