var $users = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  xhr.response.forEach(user => {
    var newLi = document.createElement('li');
    newLi.textContent = user.name;
    $users.append(newLi);
  });
});
xhr.send();
