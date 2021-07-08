function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('input event fired');
  console.log(event.target.name);
}

function handleSubmit(event) {
  event.preventDefault();
  var formData = {};
  formData.name = $form.elements.name.value;
  formData.email = $form.elements.email.value;
  formData.message = $form.elements.message.value;
  console.log('formData', formData);
  $form.reset();
}

var $name = document.getElementById('user-name');
var $email = document.getElementById('user-email');
var $msg = document.getElementById('user-message');
var $form = document.getElementById('contact-form');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$msg.addEventListener('focus', handleFocus);
$msg.addEventListener('blur', handleBlur);
$msg.addEventListener('input', handleInput);

$form.addEventListener('submit', handleSubmit);
