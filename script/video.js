var videoBody = document.getElementById('videoBody');
var playBtn = document.getElementById('playBtn');
var videoBg = document.getElementById('videoBg');
var video = document.getElementById('video');
console.log(video.src);

playBtn.addEventListener('click', () => {
  playBtn.style.display = 'none';
  videoBg.style.display = 'none';
  video.src = video.src + '?playlist=i4Zg6_yKOh8&autoplay=1';
});
