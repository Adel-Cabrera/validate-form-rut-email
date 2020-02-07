/* 
TODO

CHECK Formulario invisible, al hacer click con un botón (Registrarse), se despliega (hacerlo con jQuery).
CHECK Validar que todos los campos no estén vacíos.
CHECK Validar RUT.
CHECK Validar email.
CHECK Si user no ingresa valor en un campo, dar señal a través de jQuery (borde rojo).
CHECK Botón limpiar y de enviar.

*/

$(document).ready(function(){

    function validateRut(rut){

        rut = rut.split('.').join("");
        var rutArray = rut.split("-");
        var verificador = rutArray.pop();
        var iterArray = [];
        for(var i = 0; i<rutArray[0].length; i++){
          iterArray.push(rutArray[0][i]);
        }
        iterArray = iterArray.reverse();
      
        var sumArray = 0;
        var counter = 0;
        var aux = 2;
      
        while(counter < iterArray.length){
          if (aux > 7){
            aux = 2;
          }
          sumArray += (iterArray[counter] * aux)
          counter += 1;
          aux += 1;
        }
        var firstValidation = Math.floor(sumArray/11);
        var secondValidation = firstValidation * 11;
        var thirdValidation = sumArray - secondValidation;
        var finalValidation = 11 - thirdValidation;
      
        if(verificador == finalValidation){
          return true;
        } else {
          alert('RUT inválido');
          $("#rut").css("border-color", "red");
          return false;
        }
      
      }
      
      function emptyInput(){
            var fields = $('input');
            for(var i=0;i<fields.length;i++){
                if($(fields[i]).val() == ''){
                    $(fields[i]).css("border-color", "red");
                    $(fields[i]).attr("placeholder", "Este campo no puede estar vacío.");

                 } else {
                    $(fields[i]).css("border-color", "black");
                 }
            }         
      }

      function validateEmail(email) { 
          if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)){
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
          } else {
            alert("email incorrecto");
            $("#email").css("border-color", "red");}
          }
      
      
      $(".erase").click(function (){
        $("input").val("");
       });
  
      $('.click').click(function(){
        $('.visible').addClass('d-none');
        $('.invisible').css('display', 'block');
      });

    $('form').submit(function(e) {
        e.preventDefault();
        var rut = $("#rut").val();
        var email = $("#email").val();

        emptyInput();
        validateRut(rut);
        validateEmail(email);

    });

});
