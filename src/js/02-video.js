
import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (timeupdate) {
    const dataTimeValue = localStorage.setItem('videoplayer-current-time', JSON.stringify(timeupdate))
    // _.throttle('timeupdate', 10)

})


// беремо час після паузи
    const timePaused = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(timePaused);
const secondsEl = parsedTime.seconds;
    

//починаємо відео з місця паузи після перезавантаження

player.setCurrentTime(secondsEl).then(function(seconds) {
// seconds = the actual time that the player seeked to


}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

