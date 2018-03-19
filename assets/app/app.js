
let movies="";
let cont=0;

//Esta función se ejecuta cada vez que se  carga la página
$(function () {
  $.ajax({
    type: 'GET',
    url:'https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean',
    success: function(data) {
      movies = data.results;
      console.log(movies);
      question(cont);
    },
   error: function() {
      alert('error con la api');
    }
  });
});

// El proceso es interactivo, cada vez que la persona responde se ejecuta una pregunta
function question(cont){
  const quest = $.parseHTML(movies[cont].question);
  //console.log(quest[0]);
// Esto es para corregir los caracteres especiales de html, 
// el parseHTML los convierte pero me trae un array
// le especificio que lo que busco esta en la posición cero
// En este caso es la pregunta
  $('#pregunta').html(quest[0]);
}

$('#btn_true').click(function(){
  $('#btn_false').prop('disabled',true);
  if(movies[cont].correct_answer == 'True'){
    $('#informacion').html('Respuesta Correcta')
  }else if(movies[cont].correct_answer == 'False'){
    $('#informacion').html('Respuesta Incorrecta')
  }
   
})

$('#btn_false').click(function(){
  $('#btn_true').prop('disabled',true);
  if(movies[cont].correct_answer == 'False'){
    $('#informacion').html('Respuesta Correcta')
  }else if(movies[cont].correct_answer == 'True'){
    $('#informacion').html('Respuesta Incorrecta')
  }
   
})

$('#sesion').click(function(){
   if(cont < 4){
   $('#btn_true').prop('disabled',false);
   $('#btn_false').prop('disabled',false);
   cont++;
   $('#informacion').html('');
   question(cont);
 }else  {
  document.location.replace('final.html')
 }
})



