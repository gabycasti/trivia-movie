
$(function() {

  $.ajax({
    type: 'GET',
    url:'https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean',
    success: function(data) {
      console.log('success',data)
    }
  });
});

/*$(function () {

  $.ajax({
    type: 'GET',
    url:'https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean',
    success: function(data) {
     // movies(data)
      console.log('success',data)

    },
   // error: function() {
      //alert('error con la api');
    }
  });
});*/



/*function movies(data){
  console.log(news);
  const movies_new = sucess.response_code.results;
 movies.forEach(function(movies){
 const categoria = ;
 const snippet = article.snippet;
  let $li = $('<li />').addClass('articleClass').text(title +'\n'+snippet);

  $responseContainer.append($li);

  });
  
}


function handleError(){
    console.log('Se ha presentado un error');
}*/



