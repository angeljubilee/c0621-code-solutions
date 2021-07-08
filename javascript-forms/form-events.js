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

var $name = document.getElementById('user-name');
var $email = document.getElementById('user-email');
var $msg = document.getElementById('user-message');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$msg.addEventListener('focus', handleFocus);
$msg.addEventListener('blur', handleBlur);
$msg.addEventListener('input', handleInput);
