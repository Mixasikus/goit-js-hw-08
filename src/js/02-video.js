import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const STORAGE_KEY = 'videoplayer-current-time';

function onPlayer(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
player.on('timeupdate', throttle(onPlayer, 1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
