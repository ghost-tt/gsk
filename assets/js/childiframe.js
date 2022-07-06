window.addEventListener('message', function (eventData) {
    let parsedEventData = JSON.parse(eventData.data);
    if(parsedEventData.event_code === "welcome" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'welcome-screen-child',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "'terms_and_conditions" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'termsui-screen-child',
            data: parsedEventData.data
        }), '*');
    }
});