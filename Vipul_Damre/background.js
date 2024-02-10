chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.incluedes('youtube.com/watch')) {


        // queryParameters is unique id for each video 
        const queryParameters = tab.url.split('?')[1];
        console.log(queryParameters);


        // URLSearchParams() returns the object which have parameters of url for better useability without using direct url 
        const urlParameters = new URLSearchParams(queryParameters)
        console.log(urlParameters);

        chrome.tabs.sendMessage(tabId, {
            type: 'NEw',
            videoId: urlParameters.get('v')
        })
    }
})







// const queryParameters = 'https://www.youtube.com/watch?v=0n809nd4Zu4&ab_channel=freeCodeCamp.org'
// const urlParameters = new URLSearchParams(queryParameters)
//         console.log(urlParameters);


// console.log(urlParameters.get('v'));