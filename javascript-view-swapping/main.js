var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  $tabs.forEach(element => {
    if (event.target === element) {
      element.className = 'tab active';
    } else {
      element.className = 'tab';
    }
  });

  var activeView = event.target.getAttribute('data-view');
  $views.forEach(element => {
    if (element.getAttribute('data-view') === activeView) {
      element.className = 'view';
    } else {
      element.className = 'view hidden';
    }
  });
}
