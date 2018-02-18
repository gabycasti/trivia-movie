const $form = $('#search-form');
const $searchField = $('#search-keyword');
const $responseContainer = $('#response-container');


$(function() {

  $.ajax({
    type: 'GET',
    url:'https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean',
    success: function(data) {
      console.log('success',data)
    }
  });
});



/*const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const datos_pokemon = document.getElementById('datos_pokemon');
let searchedForText;

//a nuestro form le damos el evento submit
form.addEventListener('submit', function (e){
  e.preventDefault();
  datos_pokemon.innerHTML = '';
 // searchedForText = searchField.value;
  getPokemon();
})

//en la funcion getPokemon haremos nuestras peticiones
function getPokemon() {
  const articleRequest = new XMLHttpRequest();
  //articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  articleRequest.open('GET', `https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean&encode=base64`);
  articleRequest.onload = addNewPokemon;
  articleRequest.onerror = handleError;
  articleRequest.send();
  console.log(articleRequest);
}

//funcion de error
/*function handleError() {
  console.log('Se ha presentado un error');
}

//llamando la data
function addNewPokemon() {
  const data = JSON.parse(this.responseText);
  console.log(data);

  //console.log(article);

//Buscando y agregando nombre del pokemon
let  nom =  document.createElement('span');
 nom.className = 'titulo'
const nombre = [];
  for (let i=0; i < data.forms.length; i++ ){
    nombre.push(data.forms[i].name);
  }
  nom.innerText = nombre;

//Buscando y agregando habilidad de pokemon
let li = document.createElement('span');
 li.className = 'texto'
  const pokemon = [];
  for (let i=0; i < data.abilities.length; i++ ){
    pokemon.push(data.abilities[i].ability.name);
  }
  li.innerText = pokemon;

// Experiencia del pokemon
 let exp =  document.createElement('span');
 exp.innerText = data.base_experience;
 exp.className = "texto"
//obteniendo la imagen del pokemon
  let img = document.createElement('img');
  img.className = 'img2-responsive'
  let picture = data.sprites.front_female;
  img.src = picture;

  let hab = document.createElement('span');
   hab.innerText = 'Habilidad';
   hab.className = 'titulo2';

 let expTxt = document.createElement('span');
   expTxt.innerText = 'Experiencia';
   expTxt.className = 'titulo2'

  datos_pokemon.appendChild(hab);
  datos_pokemon.appendChild(nom);
  datos_pokemon.appendChild(img);
  datos_pokemon.appendChild(hab);
  datos_pokemon.appendChild(li);
  datos_pokemon.appendChild(expTxt);
  datos_pokemon.appendChild(exp);
}

*/



