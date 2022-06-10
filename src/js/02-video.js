import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
});

const onPlay = function (data) {};
player.on('play', onPlay);

const currentTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
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
