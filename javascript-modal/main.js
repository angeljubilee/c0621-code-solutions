var $openButton = document.querySelector('.openModal');
var $container = document.querySelector('.container');
var $modal = document.querySelector('.modal');
var $modalButton = document.querySelector('.closeModal');

$openButton.addEventListener('click', handleOpenClick);
$modalButton.addEventListener('click', handleCloseClick);

function handleOpenClick(event) {
  $container.className += ' gray-background';
  $modal.className = 'modal';
}

function handleCloseClick(event) {
  $container.className = 'container flex-center';
  $modal.className = 'modal hidden';
}
