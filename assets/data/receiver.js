window.addEventListener('message', function (eventData) {
    const parsedEventData = JSON.parse(eventData.data)
    if (parsedEventData.event_code === "welcome-screen-child") {
        var scriptTag = document.createElement('script');
        scriptTag.src = "/gsk/assets/js/custom.js";
        scriptTag.type = "text/javascript";
        document.getElementById('bodyContent').append(scriptTag);
        setTimeout(() => {
            loadHome();
        }, 1000);
    }
});