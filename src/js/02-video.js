
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getLocalStorageData, 500));

function getLocalStorageData(e) {
    var stringData = JSON.stringify(e)
    localStorage.setItem(STORAGE_KEY, stringData)
}


// беремо час після паузи
let timePaused = localStorage.getItem(STORAGE_KEY);
    
if (!timePaused) {
  timePaused = { seconds: 0 };
} else {
  timePaused = JSON.parse(timePaused);
}



player.setCurrentTime(timePaused.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});