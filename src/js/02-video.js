const _ = require('lodash');
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

import Player from "@vimeo/player";


const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
   const previousVideoProgress = localStorage.getItem(LOCALSTORAGE_KEY);
if (previousVideoProgress) {
  player.setCurrentTime(Number(previousVideoProgress));
}

    player.on('play', function() {
        console.log('played the video!');
    });
    player.on('timeupdate', _.throttle(onTimeUpdate, 1000)
);
function onTimeUpdate (e) {
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(e.seconds));
  }  
    
