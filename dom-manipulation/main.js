var numberClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', handleClick);

function handleClick() {
  numberClicks++;
  $clickCount.textContent = 'Clicks: ' + numberClicks;

  if (numberClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}
