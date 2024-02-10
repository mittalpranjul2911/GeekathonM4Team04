(() => {
    
    let youtubeLeftControls, youtubePlayer;
    let currentVideo = '';

    // below line take a message comes from background.js of line 14
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, value, videoId } = obj;

        if(type === 'NEW'){
            currentVideo = videoId;
            newVideoLoaded();
        }
    });


})();


