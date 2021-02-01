var formulario = document.getElementById('formulario'),
nombre = formulario.nombre,
correo = formulario.correo,
sexo = formulario.sexo,
terminos = formulario.terminos;
error = document.getElementById('error');
function validarNombre(evt){
    if(nombre.value.length == '' || nombre.value.length == null){
        console.log('Falta completar el nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Falta completar el nombre</li>'
        evt.preventDefault();
    }else{
        error.style.display = 'none';
    }
}
function validarCorreo(evt){
    if(correo.value.length == '' || correo.value.length == null){
        console.log('Falta completar el correo');
        error.style.display = 'block';
        error.innerHTML += '<li>Falta completar el correo</li>'
        evt.preventDefault();
    }else{
        error.style.display = 'none';
    }
}
function validarSexo(evt){
    if(sexo.value.length == '' || sexo.value.length == null){
        console.log('Falta elegir el sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Falta elegir el sexo</li>'
        evt.preventDefault();
    }else{
        error.style.display = 'none';
    }
}
function validarTerminos(evt){
    if(terminos.checked == false){
        console.log('Falta aceptar los terminos');
        error.style.display = 'block';
        error.innerHTML += '<li>Falta aceptar los terminos</li>'
        evt.preventDefault();
    }else{
        error.style.display = 'none';
    }
}
function validarFormulario(evt){
    error.innerHTML = '';
    validarNombre(evt);
    validarCorreo(evt);
    validarSexo(evt);
    validarTerminos(evt);
}
formulario.addEventListener('submit',validarFormulario);