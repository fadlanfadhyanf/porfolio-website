var toggleButton = document.getElementById('navButton');
toggleButton.addEventListener('click', function() {
var navElements = document.querySelectorAll('.nav-large');
navElements.forEach(function(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
});
});

var toggleButton = document.getElementById('closeNav');
toggleButton.addEventListener('click', function() {
var navElements = document.querySelectorAll('.nav-large');
navElements.forEach(function(element) {
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
});
});

function getScreenWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
  function checkScreenWidth() {
    var screenWidth = getScreenWidth();
    var navLarge = document.querySelector('.nav-large');

    if (screenWidth > 425) {
      navLarge.style.display = 'block';
    } else {
      navLarge.style.display = 'none';
    }
  }
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);