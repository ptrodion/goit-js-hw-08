import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time-local'));

const saveTimeThrottled = throttle(currentTime => {
  localStorage.setItem(
    'videoplayer-current-time-local',
    JSON.stringify(currentTime)
  );
}, 1000);

player.on('timeupdate', function (data) {
  saveTimeThrottled(data.seconds);
});
