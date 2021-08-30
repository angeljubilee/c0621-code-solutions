fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/roselia')
  .then(res => res.json())
  .then(data => console.log(data));
