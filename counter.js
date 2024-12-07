let startX;
let endX;

// Function to handle touch start
function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

// Function to handle touch end
function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
}

// Function to determine swipe direction
function handleSwipe() {
    const swipeDistance = endX - startX;
    if (swipeDistance > 50) {
        // Swipe right: Go to the previous page
        navigateToPreviousPage();
    } else if (swipeDistance < -50) {
        // Swipe left: Go to the next page
        navigateToNextPage();
    }
}

// Attach touch event listeners to the document
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchend', handleTouchEnd, false);

// Define navigation functions for swiping
function navigateToNextPage() {
    // Add logic to move to the next page or URL
    window.location.href = 'home2.html'; // Replace with your actual next page URL
}

function navigateToPreviousPage() {
    // Add logic to move to the previous page or URL
    window.location.href = 'counter.html'; // Replace with your actual previous page URL
}

var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;
var ok = 2; // Ensure it's initialized with 2

function timer() {
    var start = new Date(2023, 7, 15, 0, 0);
    var now = new Date();

    var years = now.getFullYear() - start.getFullYear();
    var months = now.getMonth() - start.getMonth();
    var days = now.getDate() - start.getDate();

    if (days < 0) {
        months--;
        var lastDayOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastDayOfLastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years < 0) {
        years = 0;
        months = 0;
        days = 0;
    }

    var h = now.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    var m = now.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    var s = now.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    
    document.getElementById("y").innerHTML = years;
    document.getElementById("m").innerHTML = months;
    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = h;
    document.getElementById("n").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    } else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function () {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);

// Log a message to ensure the script is loaded
console.log('counter.js loaded');
