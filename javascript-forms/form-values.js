
function handleSubmit(event) {
  event.preventDefault();
  var formData = {};
  formData.name = $form.elements.name.value;
  formData.email = $form.elements.email.value;
  formData.message = $form.elements.message.value;
  console.log('formData', formData);
  $form.reset();
}

var $form = document.getElementById('contact-form');

$form.addEventListener('submit', handleSubmit);
