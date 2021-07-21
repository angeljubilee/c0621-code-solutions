var $heading = document.querySelector('h1');

var intervalId = setInterval(setHeading, 1 * 1000);

function setHeading() {
  var count = parseInt($heading.textContent);

  if (count === 1) {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    count--;
    $heading.textContent = count.toString();
  }
}
