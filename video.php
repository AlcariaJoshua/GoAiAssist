<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Multiple YouTube Videos with Dynamic Play Buttons</title>
  <style>
    .video-thumbnail {
      cursor: pointer;
      width: 560px;
      height: 315px;
      background-size: cover;
      background-position: center;
      position: relative;
      margin-bottom: 20px;
    }
    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 60px;
      color: white;
      opacity: 0.8;
      pointer-events: none;
    }
  </style>
</head>
<body>
<div class="video-container">
    <!-- Thumbnail for first video -->
    <div class="video-thumbnail" data-video-id="BuRCLVzb7_A?si=9WvLR4a3-5yotAZ-" style="background-image: url('images/preview6.png');">
      <div class="play-button">&#9658;</div>
    </div>

    <!-- Thumbnail for second video -->
    <div class="video-thumbnail" data-video-id="Oum-KhIvwnE?si=carX_DFf5F4diH66" style="background-image: url('images/preview8.png');">
      <div class="play-button">&#9658;</div>
    </div>

    <!-- Thumbnail for third video -->
    <div class="video-thumbnail" data-video-id="ltLgarWxOzg?si=wwZt-3-5KuXxKzJ" style="background-image: url('images/preview9.png');">
      <div class="play-button">&#9658;</div>
    </div>
<section id="automate">
<div id="automate_inside">

</div>
</section>
  </div>
  <div   id="audioai-1">
        
        <button class="play-sound2 buttonp" id="ps5ai"><img src="images/play22.webp" width="auto"/></button>
        <button class="stop-sound2 buttonp" id="ss5ai"><img src="images/stop.webp" width="auto"/></button> 

        <canvas class="audio-graph2" id="canvasai5"></canvas>
      </div>
  <!-- Load the YouTube Iframe API -->
  <script src="https://www.youtube.com/iframe_api"></script>
  <script>
    // This function is required by the API; leave it empty if not needed.
    function onYouTubeIframeAPIReady() {}

    // Attach click listeners to each thumbnail
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const container = this;

        // Create a unique id for the player container
        const playerDiv = document.createElement('div');
        const playerId = 'player-' + videoId + '-' + Math.floor(Math.random() * 10000);
        playerDiv.id = playerId;
        playerDiv.style.width = container.offsetWidth + 'px';
        playerDiv.style.height = container.offsetHeight + 'px';

        // Replace the thumbnail with the player container
        container.innerHTML = '';
        container.appendChild(playerDiv);

        // Initialize the YouTube player using the Iframe API
        new YT.Player(playerId, {
          height: container.offsetHeight,
          width: container.offsetWidth,
          videoId: videoId,
          playerVars: {
            'autoplay': 1,
            'mute': 1,  // Muting helps to allow autoplay in most browsers
            'origin': window.location.origin
          },
          events: {
            'onReady': function(event) {
              event.target.playVideo();
            }
          }
        });
      });
    });






    function initializeAudio2(audioSrc, audioContainer) {
  const audio = new Audio(audioSrc); // Set the audio source dynamically
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  const canvas = audioContainer.find('.audio-graph2')[0];
  const canvasContext = canvas.getContext('2d');

  // Set up the audio element and connect it to the analyser
  audio.preload = 'auto';

  // Connect the audio to the analyser node
  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // Optional: keeping these for potential future use, though not needed for a simple progress bar
  analyser.fftSize = 1024;
  analyser.smoothingTimeConstant = 0.85;

  // Function to draw a loading/progress bar
  function draw() {
    requestAnimationFrame(draw);
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate progress as a percentage (0 to 1)
    let progress = 0;
    if (audio.duration > 0) {
      progress = audio.currentTime / audio.duration;
    }

    // Draw the background bar (a light gray rectangle)
    const barHeight = 10;
    const y = (canvas.height - barHeight) / 2;
    canvasContext.fillStyle = '#ddd';
    canvasContext.fillRect(0, y, canvas.width, barHeight);

    // Draw the progress bar (blue rectangle)
    canvasContext.fillStyle = '#007BFF';
    canvasContext.fillRect(0, y, canvas.width * progress, barHeight);
  }

  // Function to reset the audio (for replay)
  function resetAudio2() {
    audio.currentTime = 0;
    audio.pause();
  }

  // Start the progress bar update once the audio starts playing
  audioContainer.find('.play-sound2').click(function () {
    if (audio.readyState >= 3) {
      // Stop all currently playing audios before starting a new one
      currentAudios.forEach(function (aud) {
        if (!aud.paused) {
          aud.pause();
          aud.currentTime = 0;
        }
      });

      // Clear the current playing audios array and start the new one
      currentAudios = [audio];
      audio.play();
      draw(); // Start updating the progress bar

      // When the audio ends, reset and update the UI as needed
      audio.onended = function () {
        resetAudio2();
        $('#canvasai4').hide();
        $('#canvasai1').hide();
        $('#canvasai3').hide();
        $('#canvasai2').hide();
        $('#canvasai5').hide();
        $('#ss2ai').hide();
        $('#ss1ai').hide();
        $('#ss3ai').hide();
        $('#ss4ai').hide();
        $('#ss5ai').hide();
        $('#ps1ai').show();
        $('#ps2ai').show();
        $('#ps3ai').show();
        $('#ps4ai').show();
        $('#ps5ai').show();
        currentAudios = currentAudios.filter(a => a !== audio);
      };
    } else {
      console.error('Audio file is not fully loaded yet.');
    }
  });

  // Stop button functionality
  audioContainer.find('.stop-sound2').click(function () {
    if (audio && !audio.paused) {
      resetAudio2();
      currentAudios = currentAudios.filter(a => a !== audio);
    }
  });
}

initializeAudio2('voice2/Jordan_English(AntoniEL).mp3', $('#audioai-1')); // Replace with your first audio file path
initializeAudio2('voice2/Casey_English(Arnold).mp3', $('#audioai-2')); // Replace with your second audio file path
initializeAudio2('voice2/Taylor_English(AliceEL).mp3', $('#audioai-3')); // Replace with your third audio file path
initializeAudio2('voice2/Morgan_English(LilyEL).mp3', $('#audioai-4')); // Replace with your fourth audio file path
initializeAudio2('voice2/Alex_English(AdamEL).mp3', $('#audioai-5')); // Replace with your fifth audio file path

  </script>
</body>
</html>
