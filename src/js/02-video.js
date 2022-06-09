import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

player.on('timeupdate', function (data) {
  console.log(data);
});

const onPlay = function (data) {
  //   console.log(data);
};

player.on('play', onPlay);

player
  .setCurrentTime(settings)
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

// const settings = {
//   data: 'videoplayer-current-time',
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object
