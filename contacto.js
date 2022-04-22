document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var usuario = document.getElementById('nombre').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }

    var email = document.getElementById('email').value;
    if (email.length < 9) {
      alert('Es necesario un correo electrónico válido');
      return;
    }
    
    var comentario = document.getElementById('comentario').value;
    if (comentario.length < 5) {
      alert('El comentario es muy corto');
      return;
    }
    
    this.submit();
  }

/*
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Por favor, indica un correo electrónico válido");
  } else {
    email.setCustomValidity("");
  }
});
*/