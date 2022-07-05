window.addEventListener('message', function (eventData) {
    let parsedEventData = JSON.parse(eventData.data);
    if(parsedEventData.event_code === "welcome-screen-parent" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'welcome-screen-child',
            data: parsedEventData.data
        }), '*');
    }
});