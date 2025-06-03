$(document).ready(function(){
    $('.assislist').slick({
   dots: true,
   arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
   
   
  //   autoplay: true,
  //   autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
   
    responsive: [
    {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:3
        }
      },
    {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    });
  
    $('#listings').slick({
   dots: true,
   arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
   
   
    autoplay:false,
    autoplaySpeed:4000,
    centerMode: true,
    centerPadding: '60px',
   
    responsive: [
    {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:3
        }
      },
    {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    });
  
  
  
  
  });

$(document).ready(function () {
  
      $('#psb1').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ssb1').show();     // Show #ss1
      $('#ssb2').hide();     // Show #ss1
      $('#ssb3').hide();     // Show #ss1
   
  
      $('#psb2').show();     // Show #ps1
      $('#psb3').show();     // Show #ps1
    
      resetAllVoices1();    resetAllVoices2();
  });
  $('#psb2').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ssb2').show();     // Show #ss1
      $('#ssb1').hide();     // Show #ss1
      $('#ssb3').hide();     // Show #ss1
      $('#ssb4').hide();     // Show #ss1
  
      $('#psb1').show();     // Show #ps1
      $('#psb3').show();     // Show #ps1
      $('#psb4').show();     // Show #ps1
      resetAllVoices1();    resetAllVoices2();
  });
  
  $('#psb3').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ssb3').show();     // Show #ss1
      $('#ssb2').hide();     // Show #ss1
      $('#ssb1').hide();     // Show #ss1
      $('#ssb4').hide();     // Show #ss1
  
      $('#psb2').show();     // Show #ps1
      $('#psb1').show();     // Show #ps1
      $('#psb4').show();     // Show #ps1
      resetAllVoices1();    resetAllVoices2();
  });
  
  $('#psb4').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ssb4').show();     // Show #ss1
      $('#ssb2').hide();     // Show #ss1
      $('#ssb1').hide();     // Show #ss1
      $('#ssb3').hide();     // Show #ss1
  
      $('#psb2').show();     // Show #ps1
      $('#psb3').show();     // Show #ps1
      $('#psb1').show();     // Show #ps1
      resetAllVoices1();    resetAllVoices2();
  });
  
  
      $('#ps1ai').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss1ai').show();     // Show #ss1
      $('#ss2ai').hide();     // Show #ss1
      $('#ss3ai').hide();     // Show #ss1
      $('#ss4ai').hide();     // Show #ss1
      $('#ss5ai').hide();     // Show #ss1
  
      $('#ps2ai').show();     // Show #ps1
      $('#ps3ai').show();     // Show #ps1
      $('#ps4ai').show();     // Show #ps1
      $('#ps5ai').show();     // Show #ps1 
  
      $('#canvasai1').show();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
      resetAllVoices1();
  });
  
  function resetAllVoices1(){
      $('#canvas4').hide();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
      $('#ss2').hide();     // Show #ss1
      $('#ss1').hide();     // Show #ss1
      $('#ss3').hide();     // Show #ss1
      $('#ss4').hide();     // Show #ss1
      $('#ps2').show();     // Show #ps1
      $('#ps2').show();     // Show #ps1
      $('#ps3').show();     // Show #ps1
      $('#ps4').show();     // Show #ps1
  }
  
  function resetAllVoices2(){
      $('#ss1ai').hide();     // Show #ss1
      $('#ss2ai').hide();     // Show #ss1
      $('#ss3ai').hide();     // Show #ss1
      $('#ss4ai').hide();     // Show #ss1
      $('#ss5ai').hide();     // Show #ss1
  
      $('#ps1ai').show();     // Show #ps1
      $('#ps2ai').show();     // Show #ps1
      $('#ps3ai').show();     // Show #ps1
      $('#ps4ai').show();     // Show #ps1
      $('#ps5ai').show();     // Show #ps1 
  
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
  
  }
  
  
      $('#ps1').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss1').show();     // Show #ss1
      $('#ss2').hide();     // Show #ss1
      $('#ss3').hide();     // Show #ss1
      $('#ss4').hide();     // Show #ss1
  
    
  
      $('#ps2').show();     // Show #ps1
      $('#ps3').show();     // Show #ps1
      $('#ps4').show();     // Show #ps1
  
      $('#canvas1').show();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas4').hide();     // Show #ps1
      resetAllVoices2();
  
  });
  
  $('#ss1').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps1').show();     // Show #ps1
  
      $('#canvas4').hide();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
  
  });
  $('#ssb1').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#psb1').show();     // Show #ps1
  
  });
  $('#ssb2').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#psb2').show();     // Show #ps1
  
  });
  $('#ssb3').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#psb3').show();     // Show #ps1
  
  });
  $('#ssb4').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#psb4').show();     // Show #ps1
  
  });
  $('#ss1ai').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps1ai').show();     // Show #ps1
  
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
  });
  $('#ps2').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss2').show();     // Show #ss1
      $('#ss1').hide();     // Show #ss1
      $('#ss3').hide();     // Show #ss1
      $('#ss4').hide();     // Show #ss1
  
  
      $('#ps1').show();     // Show #ps1
      $('#ps3').show();     // Show #ps1
      $('#ps4').show();     // Show #ps1
  
      $('#canvas2').show();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas4').hide();     // Show #ps1
  
      resetAllVoices2();
  
  });
  
  $('#ps2ai').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss2ai').show();     // Show #ss1
      $('#ss1ai').hide();     // Show #ss1
      $('#ss3ai').hide();     // Show #ss1
      $('#ss4ai').hide();     // Show #ss1
      $('#ss5ai').hide();     // Show #ss1
  
      $('#ps1ai').show();     // Show #ps1
      $('#ps3ai').show();     // Show #ps1
      $('#ps4ai').show();     // Show #ps1
      $('#ps5ai').show();     // Show #ps1
  
  
      $('#canvasai2').show();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
      resetAllVoices1();
  });
  
  
  $('#ss2').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps2').show();     // Show #ps1
      $('#canvas4').hide();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
  });
  
  
  $('#ss2ai').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps2ai').show();     // Show #ps1
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
  });
  
  $('#ps3').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss3').show();     // Show #ss1
      $('#ss2').hide();     // Show #ss1
      $('#ss1').hide();     // Show #ss1
      $('#ss4').hide();     // Show #ss1
  
      $('#ps2').show();     // Show #ps1
      $('#ps1').show();     // Show #ps1
      $('#ps4').show();     // Show #ps1
  
      $('#canvas3').show();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
      $('#canvas4').hide();     // Show #ps1
      resetAllVoices2();
  });
  
  $('#ps3ai').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss3ai').show();     // Show #ss1
      $('#ss2ai').hide();     // Show #ss1
      $('#ss1ai').hide();     // Show #ss1
      $('#ss4ai').hide();     // Show #ss1
      $('#ss5ai').hide();     // Show #ss1
  
      $('#ps2ai').show();     // Show #ps1
      $('#ps1ai').show();     // Show #ps1
      $('#ps4ai').show();     // Show #ps1
      $('#ps5ai').show();     // Show #ps1
  
      $('#canvasai3').show();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
      resetAllVoices1();
  });
  
  $('#ss3').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps3').show();     // Show #ps1
  
      $('#canvas4').hide();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
  });
  
  
  $('#ss3ai').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps3ai').show();     // Show #ps1
  
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
  });
  $('#ps4').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss4').show();     // Show #ss1
  
      $('#ss3').hide();     // Show #ss1
      $('#ss1').hide();     // Show #ss1
      $('#ss2').hide();     // Show #ss1
  
  
      $('#ps2').show();     // Show #ps1
      $('#ps1').show();     // Show #ps1
      $('#ps3').show();     // Show #ps1
  
      $('#canvas4').show();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
      resetAllVoices2();
  });
  
  
  $('#ps4ai').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss4ai').show();     // Show #ss1
  
      $('#ss3ai').hide();     // Show #ss1
      $('#ss1ai').hide();     // Show #ss1
      $('#ss2ai').hide();     // Show #ss1
      $('#ss5ai').hide();     // Show #ss1
  
      $('#ps2ai').show();     // Show #ps1
      $('#ps1ai').show();     // Show #ps1
      $('#ps3ai').show();     // Show #ps1
      $('#ps5ai').show();     // Show #ps1
  
      $('#canvasai4').show();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
      resetAllVoices1();
      
  });
  
  $('#ps5ai').on("click", function() {
      $(this).hide();       // Hide #ps1
      $('#ss5ai').show();     // Show #ss1
  
      $('#ss3ai').hide();     // Show #ss1
      $('#ss1ai').hide();     // Show #ss1
      $('#ss2ai').hide();     // Show #ss1
      $('#ss4ai').hide();     // Show #ss1
  
      $('#ps2ai').show();     // Show #ps1
      $('#ps1ai').show();     // Show #ps1
      $('#ps3ai').show();     // Show #ps1
      $('#ps4ai').show();     // Show #ps1
  
      $('#canvasai5').show();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai4').hide();     // Show #ps1
      resetAllVoices1();
      
  });
  $('#ss4').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps4').show();     // Show #ps1
  
      
      $('#canvas4').hide();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
  });
  
  
  $('#ss4ai').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps4ai').show();     // Show #ps1
  
      
      $('#canvasai5').hide();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
  });
  
  
  $('#ss5ai').on("click", function() {
      $(this).hide();       // Hide #ss1
      $('#ps5ai').show();     // Show #ps1
  
      
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
  });
  
  let currentAudios = []; // This will track all currently playing audios
       function initializeAudio(audioSrc, audioContainer) {
      const audio = new Audio(audioSrc);
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const canvas = audioContainer.find('.audio-graph')[0];
      const canvasContext = canvas.getContext('2d');
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
  
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.85;
  
      const source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
  
      function draw() {
          requestAnimationFrame(draw);
          analyser.getByteFrequencyData(dataArray);
          canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  
          const barWidth = (canvas.width / bufferLength) * 2.5;
          let x = 0;
  
          for (let i = 0; i < bufferLength; i++) {
              const barHeight = dataArray[i];
                 canvasContext.fillStyle = `rgb(${barHeight + 173}, 34, 239)`;
              canvasContext.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);
              x += barWidth + 1;
          }
      }
  
      function stopAllAudios() {
          currentAudios.forEach((audioObj) => {
              audioObj.audio.pause();
              audioObj.audio.currentTime = 0; // Reset to the beginning
          });
          currentAudios = []; // Clear the array of current audios
      }
  
      audioContainer.find('.play-sound').click(function () {
          if (audioContext.state === 'suspended') {
              audioContext.resume(); // Resume AudioContext if suspended
          }
  
          // Stop all currently playing audios
          stopAllAudios();
  
          // Play the new audio
          audio.play().then(() => {
              draw(); // Start the graph visualization when audio starts playing
              currentAudios.push({ audio, draw }); // Add to current audios
          }).catch((error) => {
              console.error('Error playing audio:', error);
          });
      });
  
      audioContainer.find('.stop-sound').click(function () {
          audio.pause();
          audio.currentTime = 0; // Reset audio playback
          currentAudios = currentAudios.filter(a => a.audio !== audio); // Remove this audio from the array
      });
  
      // Reset and remove audio when it ends
      audio.onended = function () {
          audio.currentTime = 0; // Reset to the start
          $('#canvas4').hide();     // Show #ps1
      $('#canvas1').hide();     // Show #ps1
      $('#canvas3').hide();     // Show #ps1
      $('#canvas2').hide();     // Show #ps1
      $('#ss2').hide();     // Show #ss1
      $('#ss1').hide();     // Show #ss1
      $('#ss3').hide();     // Show #ss1
      $('#ss4').hide();     // Show #ss1
      $('#ps1').show();     // Show #ps1
      $('#ps2').show();     // Show #ps1
      $('#ps3').show();     // Show #ps1
      $('#ps4').show();     // Show #ps1
          currentAudios = currentAudios.filter(a => a.audio !== audio); // Remove from the current playing audios
          
      };
  }
  
        initializeAudio('voice/aaa.mp3', $('#audio-1')); // Replace with your first audio file path
        initializeAudio('voice/ecommercecandlescent1delayedorder.mp3', $('#audio-2')); // Replace with your second audio file path
        initializeAudio('voice/ecommercecandlescent2refundangrycustomer.mp3', $('#audio-3')); // Replace with your third audio file path
        initializeAudio('voice/sunshinerealestatedemoExample2AskingInformationAboutaListingforSale.mp3', $('#audio-4')); // Replace with your third audio file path
      
  
  
  
  
  
   let currentAudios2 = []; // This will track all currently playing audios
       function initializeAudio2(audioSrc, audioContainer) {
      const audio = new Audio(audioSrc);
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const canvas = audioContainer.find('.audio-graph2')[0];
      const canvasContext = canvas.getContext('2d');
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
  
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.85;
  
      const source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
  
      function draw() {
          requestAnimationFrame(draw);
          analyser.getByteFrequencyData(dataArray);
          canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  
          const barWidth = (canvas.width / bufferLength) * 2.5;
          let x = 0;
  
          for (let i = 0; i < bufferLength; i++) {
              const barHeight = dataArray[i];
          canvasContext.fillStyle = `rgb(${barHeight + 173}, 34, 239)`;
              canvasContext.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);
              x += barWidth + 1;
          }
      }
  
      function stopAllAudios() {
          currentAudios2.forEach((audioObj) => {
              audioObj.audio.pause();
              audioObj.audio.currentTime = 0; // Reset to the beginning
          });
          currentAudios2 = []; // Clear the array of current audios
      }
  
      audioContainer.find('.play-sound2').click(function () {
          if (audioContext.state === 'suspended') {
              audioContext.resume(); // Resume AudioContext if suspended
          }
  
          // Stop all currently playing audios
          stopAllAudios();
  
          // Play the new audio
          audio.play().then(() => {
              draw(); // Start the graph visualization when audio starts playing
              currentAudios2.push({ audio, draw }); // Add to current audios
          }).catch((error) => {
              console.error('Error playing audio:', error);
          });
      });
  
      audioContainer.find('.stop-sound2').click(function () {
          audio.pause();
          audio.currentTime = 0; // Reset audio playback
          currentAudios2 = currentAudios2.filter(a => a.audio !== audio); // Remove this audio from the array
      });
  
              // Add an event listener to reset the audio once it ends
              audio.onended = function () {
                resetAudio2();
             
      $('#canvasai4').hide();     // Show #ps1
      $('#canvasai1').hide();     // Show #ps1
      $('#canvasai3').hide();     // Show #ps1
      $('#canvasai2').hide();     // Show #ps1
      $('#canvasai5').hide();     // Show #ps1
      $('#ss2ai').hide();     // Show #ss1
      $('#ss1ai').hide();     // Show #ss1
      $('#ss3ai').hide();     // Show #ss1
      $('#ss4ai').hide();     // Show #ss1
      $('#ss5ai').hide();     // Show #ss1
      $('#ps1ai').show();     // Show #ps1
      $('#ps2ai').show();     // Show #ps1
      $('#ps3ai').show();     // Show #ps1
      $('#ps4ai').show();     // Show #ps1
      $('#ps5ai').show();     // Show #ps1
                currentAudios2 = currentAudios2.filter(a => a !== audio); // Remove from the current playing audios
              };
           
        
        }
  
  
        initializeAudio2('voice2/Jordan_English(AntoniEL).mp3', $('#audioai-1')); // Replace with your first audio file path
        initializeAudio2('voice2/Casey_English(Arnold).mp3', $('#audioai-2')); // Replace with your second audio file path
        initializeAudio2('voice2/Taylor_English(AliceEL).mp3', $('#audioai-3')); // Replace with your third audio file path
        initializeAudio2('voice2/Morgan_English(LilyEL).mp3', $('#audioai-4')); // Replace with your third audio file path
        initializeAudio2('voice2/Alex_English(AdamEL).mp3', $('#audioai-5')); // Replace with your third audio file path
  
  
  
   
  
      let currentAudios3 = []; // This will track all currently playing audios
       function initializeAudio3(audioSrc, audioContainer) {
      const audio = new Audio(audioSrc);
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const canvas = audioContainer.find('.audio-graph3')[0];
      const canvasContext = canvas.getContext('2d');
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
  
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.85;
  
      const source = audioContext.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioContext.destination);
  
      function draw() {
          requestAnimationFrame(draw);
          analyser.getByteFrequencyData(dataArray);
          canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  
          const barWidth = (canvas.width / bufferLength) * 2.5;
          let x = 0;
  
          for (let i = 0; i < bufferLength; i++) {
              const barHeight = dataArray[i];
            canvasContext.fillStyle = `rgb(${barHeight + 173}, 34, 239)`;
              canvasContext.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);
              x += barWidth + 1;
          }
      }
  
      function stopAllAudios() {
          currentAudios3.forEach((audioObj) => {
              audioObj.audio.pause();
              audioObj.audio.currentTime = 0; // Reset to the beginning
          });
          currentAudios3 = []; // Clear the array of current audios
      }
  
      audioContainer.find('.play-sound3').click(function () {
          if (audioContext.state === 'suspended') {
              audioContext.resume(); // Resume AudioContext if suspended
          }
  
          // Stop all currently playing audios
          stopAllAudios();
  
          // Play the new audio
          audio.play().then(() => {
              draw(); // Start the graph visualization when audio starts playing
              currentAudios3.push({ audio, draw }); // Add to current audios
          }).catch((error) => {
              console.error('Error playing audio:', error);
          });
      });
  
      audioContainer.find('.stop-sound3').click(function () {
          audio.pause();
          audio.currentTime = 0; // Reset audio playback
          currentAudios3 = currentAudios3.filter(a => a.audio !== audio); // Remove this audio from the array
      });
  
       
              audio.onended = function () {
                resetAudio3();
                 
   
   
      $('#ssb2').hide();     // Show #ss1
      $('#ssb1').hide();     // Show #ss1
      $('#ssb3').hide();     // Show #ss1
      $('#ssb4').hide();     // Show #ss1
  
  
      $('#psb1').show();     // Show #ps1
      $('#psb2').show();     // Show #ps1
      $('#psb3').show();     // Show #ps1
      $('#psb4').show();     // Show #ps1
                      currentAudios3 = currentAudios3.filter(a => a !== audio); // Remove from the current playing audios
              };
           
        
        }
      initializeAudio3('voice/aaa.mp3', $('#audiob-1')); // Replace with your first audio file path
        initializeAudio3('voice/ecommercecandlescent1delayedorder.mp3', $('#audiob-2')); // Replace with your second audio file path
        initializeAudio3('voice/ecommercecandlescent2refundangrycustomer.mp3', $('#audiob-3')); // Replace with your third audio file path
        initializeAudio3('voice/sunshinerealestatedemoExample2AskingInformationAboutaListingforSale.mp3', $('#audiob-4')); // Replace with your third audio file path
  
  
  
});
  
  
  
  
   
          $(document).ready(function () { 
              // Automatically trigger the button click after 3 seconds
              setTimeout(function() {
                  $("#load-video-btn").trigger("click");
              }, 0);
  
              $("#load-video-btn").on("click", function () {
                  $.ajax({
                      url: "videos.php", // Load the video HTML file
                      type: "GET",
                      beforeSend: function () {
                          $("#video-container").html("<p><img src='images/preloader_final.gif' /></p>");
                          $('#coverplay').hide();
                          $("#load-video-btn").hide();
                      },
                      success: function (response) {
                          $("#video-container").html(response);
  
                          // Wait for a short delay to ensure video is loaded
                          setTimeout(function() {
                              let video = $("#video-container video")[0]; // Select the video element
                              if (video) {
                                  video.play().catch(error => console.log("Autoplay blocked:", error));
                              }
                          },0); // Wait 1 second after loading video to play
                      },
                      error: function () {
                          $("#video-container").html("<p>Failed to load video.</p>");
                      }
                  });
              });
          });


$(document).ready(function () {
    let cover = document.getElementById('coverplay2');

    // Intersection Observer to detect when the cover image is visible
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Cover image is visible! Loading video...");

                // Trigger the button click to load the video
                $("#load-video-btn2").trigger("click");

                // Stop observing after triggering once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the cover image is visible

    observer.observe(cover);

    // Load video when the button is clicked
    $("#load-video-btn2").on("click", function () {
        $.ajax({
            url: "videos2.php", // Load the video HTML file
            type: "GET", 
            beforeSend: function () {
                $("#video-container2").html("<p><img src='images/preloader_final.gif' /></p>");
                $('#coverplay2').hide();
                $("#load-video-btn2").hide();
            },
            success: function (response) {
                $("#video-container2").html(response);
                $("#video-container2").show(); // Show the video container

                // Ensure the video starts playing after loading
                setTimeout(function() {
                    let video = $("#video-container2 video")[0];
                    if (video) {
                        video.play().catch(error => console.log("Autoplay blocked:", error));
                    }
                }, 0);
            },
            error: function () {
                $("#video-container2").html("<p>Failed to load video.</p>");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
var video = document.getElementById("myVideo");
video.play().catch(error => console.log("Autoplay prevented:", error));
var video2 = document.getElementById("myVideo2");
video2.play().catch(error => console.log("Autoplay prevented:", error));
});



//navigation
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navigation = document.getElementById('nav-container');
const clickableItems = document.querySelectorAll('.menu-item');

// Toggle mobile menu
hamburgerBtn.addEventListener('click', () => {
  navigation.classList.toggle('active');
  hamburgerBtn.classList.toggle('active');
});

// Toggle submenu for each menu item
clickableItems.forEach(item => {
  item.addEventListener('click', () => {
    const submenu = item.querySelector('.sub-menu');
    if (submenu) {
      submenu.classList.toggle('show-submenu');
    }
  });
});


