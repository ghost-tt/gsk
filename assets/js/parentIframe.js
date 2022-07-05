(function injectJS() {
    try {
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = '';
        iFrameHead.appendChild(modularBars);
    } catch (e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


window.addEventListener('message', function (eventData) {
    try {
        let parsedData = JSON.parse(eventData.data)
        if (parsedData?.event_code == 'pass-event-iframe') {
            console.log("\n\n\n <--- You need to Enable Welcome screen ---> \n\n\n", parsedData);
            document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
                event_code: 'welcome-screen-parent',
                data: parsedData.data
            }), '*');
            return;
        }
    } catch (error) {
        console.error(error);
        return;
    }
}, false);
