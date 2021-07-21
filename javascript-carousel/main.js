var $dots = document.querySelector('ul');
var $pokemon = document.querySelector('.pokemon');
var $arrowLeft = document.querySelector('.fa-chevron-left');
var $arrowRight = document.querySelector('.fa-chevron-right');
var intervalID = null;
var currentIndex = 0;

$dots.addEventListener('click', handleClick);
$arrowLeft.addEventListener('click', goLeft);
$arrowRight.addEventListener('click', goRight);
window.addEventListener('load', setTimer);

function setTimer() {
  intervalID = setInterval(goRight, 3000);
}

function resetTimer() {
  clearInterval(intervalID);
  intervalID = setInterval(goRight, 3000);
}

function handleClick(event) {
  var $icon = event.target;

  if (!$icon.matches('i')) {
    return;
  }

  handleDot(currentIndex, 'hide');
  currentIndex = $icon.getAttribute('data-view') - 1;

  showPokemon(currentIndex);
  handleDot(currentIndex, 'display');
  resetTimer();
}

function handleDot(index, display) {
  var $li = $dots.children[index];

  if (display === 'display') {
    $li.children[0].className = 'fas fa-circle';
    $li.children[1].className = 'far fa-circle hidden';
  } else {
    $li.children[0].className = 'fas fa-circle hidden';
    $li.children[1].className = 'far fa-circle';
  }
}

function handleArrow(direction) {
  handleDot(currentIndex, 'hide');

  if (direction === 'left') {
    if (currentIndex === 0) {
      currentIndex = $pokemon.children.length - 1;
    } else {
      currentIndex--;
    }
  } else {
    if (currentIndex === $pokemon.children.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }

  showPokemon(currentIndex);
  handleDot(currentIndex, 'display');
  resetTimer();
}

function goRight() {
  handleArrow('right');
}

function goLeft() {
  handleArrow('left');
}

function showPokemon(index) {
  $pokemon.children[index].className = '';
  for (var i = 0; i < $pokemon.children.length; i++) {
    if (i !== index) {
      $pokemon.children[i].className = 'hidden';
    }
  }
}
