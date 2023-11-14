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

function updateCounterDisplay(years, months, days, hours, minutes, seconds) {
    // Update the counter display
    document.getElementById("y").innerHTML = years;
    document.getElementById("m").innerHTML = months;
    document.getElementById("d").innerHTML = days;
    document.getElementById("h").innerHTML = hours;
    document.getElementById("n").innerHTML = minutes;
    document.getElementById("s").innerHTML = seconds;
}

function checkAndSendNotification() {
    var start = new Date(2023, 7, 15, 0, 0);
    var now = new Date();

    var years = now.getFullYear() - start.getFullYear();
    var months = now.getMonth() - start.getMonth();
    var days = now.getDate() - start.getDate();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

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

    // Update the counter display
    updateCounterDisplay(years, months, days, hours, minutes, seconds);

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
