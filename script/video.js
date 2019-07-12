var playBtn = document.getElementById('playBtn');
var videoBg = document.getElementById('videoBg');
var video = document.getElementById('video');

playBtn.addEventListener('click', playVideo);
videoBg.addEventListener('click', playVideo);

function playVideo() {
  playBtn.style.display = 'none';
  videoBg.style.display = 'none';
  video.src = video.src + '?playlist=i4Zg6_yKOh8&autoplay=1';
}
