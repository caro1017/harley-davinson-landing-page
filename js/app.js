/* Variables validacion informacion ingresada */
const formulario = document.getElementById('formulario')
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const movil = document.getElementById('movil');
const contraseña = document.getElementById('contraseña');
const fecha = document.getElementById('fecha');
const mensaje = document.getElementById('mensaje');

/* Funcion envio y validacion de informacion */
function EnviarFormulario(){

      
    let envio = 'Ok envio formulario';
    /* Uso de If() else if() - else() */
    if ( nombre.value == ''){
        alert('Por favor, escribe tu nombre');
        nombre.focus();
        return false;
    } else if (email.value == ''){
        alert('Por favor, escribe tu email')
        email.focus();
        return false;
    } else if (movil.value == ''){
        alert('Por favor, escribe el numero de tu celular');
        movil.focus();
        return false;
    } else if (contraseña.value == ''){
        alert('Por favor, escribe tu contraseña');
        contraseña.focus();
        return false;
    } else if (fecha.value == ''){
        alert('Por favor, ingresar fecha actual');
        fecha.focus();
        return false;
    } else if (mensaje.value == ''){
        alert('Por favor, escribe un mensaje');
        mensaje.focus();
        return false;
    } else {
        alert(envio);
        console.log(envio);
    }    

    document.getElementById('formulario').submit();

    
}

/* Funcion para limpiar formulario */
function LimpiarFormulario(){
    let limpiar= 'Limpiar formulario';
    /* Uso del operador ternario */
    alert (formulario == '' ? formulario : 'Se limpiara el formulario');
    document.getElementById('formulario').reset();
    console.log(limpiar)

}