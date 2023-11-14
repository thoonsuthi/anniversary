// Define an array of video IDs
const videoIds = ["X9Caq9Bal5g", "9BgNVW4T1eo", "Honosw3kvx8", "K9SyeAjtwU0", "O5Z7cG8NaOo", "8A7-54UguKg", "uJ9ZL-hwpQc", "P_qbVDZq5uo", "ao5TvF-lavg", "USCaDCTZLD0", "ic1mniRptvA", "T-doQhcwDS8", "S4i0bUL-jhg", "XwPDxTBIRSc", "1NrXaCir6BA", "d4_QuMkOdCI", "mk3XycambgI", "0LHmevWVvpc", "3wxyN3z9PL4", "pfUnm6S3pH0", "YhsTB4rq1XU"];
// Index to keep track of the current video
let currentVideoIndex = 0;

// Initialize the YouTube player
function initializeYouTubePlayer() {
    const container = document.querySelector('.video-frame');
    const maxAspectRatio = 0.5625; // Maximum aspect ratio

    const width = container.offsetWidth;
    const height = width * maxAspectRatio;

    const player = new YT.Player("player", {
        height: height,
        width: "100%", // Set width to 100%
        videoId: videoIds[currentVideoIndex],
        playerVars: {
            controls: 1,
            modestbranding: 1,
        },
        events: {
            onReady: onPlayerReady,
        },
    });
}

// Event handler when a video is ready to play
function onPlayerReady(event) {
    event.target.playVideo();
    event.target.addEventListener("onStateChange", function (e) {
        if (e.data === YT.PlayerState.ENDED) {
            // Load and play the next video
            currentVideoIndex++;
            if (currentVideoIndex >= videoIds.length) {
                currentVideoIndex = 0; // Reset to the first video
            }
            event.target.loadVideoById(videoIds[currentVideoIndex]);
        }
    });
}

// Initialize the YouTube player when the API is ready
function onYouTubeIframeAPIReady() {
    initializeYouTubePlayer();
}
