
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getLocalStorageData, 500));

function getLocalStorageData(e) {
    const stringData = JSON.stringify(e)
    localStorage.setItem(STORAGE_KEY, stringData)
}


// беремо час після паузи
const timePaused = localStorage.getItem(STORAGE_KEY);
    

const parsedTime = JSON.parse(timePaused);

const secondsEl = parsedTime.seconds;


//починаємо відео з місця паузи після перезавантаження

player.setCurrentTime(secondsEl).then(function(seconds) {

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

