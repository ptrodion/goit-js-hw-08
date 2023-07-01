import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { saveLocalStorage, takeLocalStorage } from './add-localStorage';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(
  takeLocalStorage('videoplayer-current-time-local', 'localStorage')
);

const saveTimeThrottled = throttle(currentTime => {
  saveLocalStorage(
    'videoplayer-current-time-local',
    currentTime,
    'localStorage'
  );
}, 1000);

player.on('timeupdate', function (data) {
  saveTimeThrottled(data.seconds);
});

// saveSessioStorage(
//   'videoplayer-current-time-session',
//   data.seconds,
//   'sessionStorage'
// );
