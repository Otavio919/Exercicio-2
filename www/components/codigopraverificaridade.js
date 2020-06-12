// This is a JavaScript file
function validacao(e) {

  var idade = document.getElementById('idade').value;

  if(idade >= 18){
     document.getElementById('creator').innerHTML = '<img src="lib/demaior.png" width="90%">';
  }
  else{
    document.getElementById('creator').innerHTML = '<img src="lib/demenor.png" width="90%">';
  }

}
