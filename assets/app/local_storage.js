$( document ).ready(function(){

guardar_localstorage();

    
    $("#sesion").click(function() {
     //let usuario = $("#usuario").val();
     let datos = obtener_localstorage();
     let name = $("#usuario").val();
     let pasword = $("#clave").val();
     if (name == datos.usuario && pasword == datos.clave){
        document.location.replace('trivia.html')
     }else {
         if (name != datos.usuario && pasword != datos.clave){
       $("#mensaje_usuario_correcto").fadeIn();
       return false;
     }else{
       $("#mensaje_usuario_correcto").fadeOut();
       if(name == ""){
       $("#mensaje_usuario").fadeIn();
       return false;
     }else{
        $("#mensaje_usuario").fadeOut();
         if(pasword == ""){
        $("#mensaje_clave").fadeIn();
       return false;
     }else{
        $("#mensaje_clave").fadeOut();
         if(pasword.length < 6 ){
        $("#mensaje_clave2").fadeIn();
       return false;
    }else{
        $("#mensaje_clave2").fadeOut();
         if(pasword == "123456"){
        $("#mensaje_clave3").fadeIn();
       return false;
        }
       }
      }
     }
 }
}
  })

});





function obtener_localstorage(){

    if(localStorage.getItem("persona")){
    //let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    return persona;
    }else
    console.log("no hay entradas")
};




function guardar_localstorage(){
    let persona = {
        usuario: "gabycasti",
        clave: "11223344"
    }
    //localStorage.setItem("nombre",nombre);
    localStorage.setItem("persona",JSON.stringify(persona));
    console.log("guardo");
}

