var sliderImages = document.querySelectorAll('.slider-image img');

var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');

var imageIndex = 0;
var sliderImageLength = sliderImages.length;

leftBtn.addEventListener('click', function() {
  if (imageIndex > 0) {
    sliderImages[imageIndex].setAttribute('class', 'deactive-image');
    imageIndex--;
    sliderImages[imageIndex].setAttribute('class', 'active-image');
  }
});

rightBtn.addEventListener('click', function() {
  if (imageIndex < sliderImageLength - 1) {
    sliderImages[imageIndex].setAttribute('class', 'deactive-image');
    imageIndex++;
    sliderImages[imageIndex].setAttribute('class', 'active-image');
  }
});
