window.addEventListener('message', function (eventData) {
    const parsedEventData = JSON.parse(eventData.data)
    if (parsedEventData.event_code === "welcome-screen-child") {
        setTimeout(() => {
            loadHome();
        }, 1000);
    }

    if (parsedEventData.event_code === "termsui-screen-child") {
        setTimeout(() => {
            tncAccept();
        }, 1000);
    }
});