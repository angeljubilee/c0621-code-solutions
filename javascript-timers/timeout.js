setTimeout(setHeading, 2 * 1000);

function setHeading() {
  var $heading = document.querySelector('h1');
  $heading.textContent = 'Hello There';
}
