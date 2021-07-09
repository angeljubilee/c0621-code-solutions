var toggle = true;
var lightbox = document.querySelector('.lightbox');
lightbox.addEventListener('click', handleClick);

function handleClick(event) {
  toggle = !toggle;
  if (toggle) {
    lightbox.className = 'lightbox flex-center on';
  } else {
    lightbox.className = 'lightbox flex-center off';
  }
}
