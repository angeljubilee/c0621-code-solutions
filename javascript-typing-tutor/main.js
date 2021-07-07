var $spanList = document.querySelectorAll('span');
var current = 0;
$spanList[current].className += 'underline';

document.addEventListener('keypress', handleKey);

function handleKey(event) {
  if ($spanList[current].textContent === event.key ||
    ($spanList[current].textContent === String.fromCharCode(160) &&
    event.key === ' ')) {
    $spanList[current].className = 'span green';
    current++;
    $spanList[current].className += 'underline';
  } else {
    $spanList[current].className = 'span red underline';
  }
}
