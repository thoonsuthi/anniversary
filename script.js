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
    window.location.href = 'index.html'; // Replace with your actual previous page URL
}
// script.js
function initializeNotifications() {
      if ('Notification' in window) {
            Notification.requestPermission().then(function (permission) {
                  console.log("Notification permission:", permission);
            });
      }
}

function showNotification(title, message) {
      Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                  var notification = new Notification(title, {
                        body: message,
                  });
            }
      });
}

function checkAndSendNotification() {
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

      // Check for special notifications
      if (days === 0 && months !== 0) {
            // Situation 2: Today is our Monthsary Honey
            showNotification('Happy Monthsary', 'Today is our Monthsary Honey!');
      } else if (years === 1 && months === 0 && days === 0) {
            // Situation 3: This Is Our Anniversary! LET'S Gooooo
            showNotification('Happy Anniversary', 'This Is Our Anniversary! LET\'S Gooooo');
      } else {
            // Situation 1: Hey Honey, We've been loved for ...months and ...days.
            var notificationMessage = 'Hey Honey, We\'ve been loved for ' + months + ' months and ' + days + ' days.';
            showNotification('Been Love Reminder', notificationMessage);
      }
}

// Call the necessary functions directly when the page loads or refreshes
initializeNotifications();
checkAndSendNotification();

// Log a message to ensure the script is loaded
console.log('script.js loaded');
