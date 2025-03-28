//validacion de usuario y contraseña
function usuarioContraseña(usuario, contraseña){
    if (usuario.length >= 6 && contraseña.length>=6) {
        console.log("Usuario y contraseña validos.") ; 
    } else {
        console.log ("Error: Usuario o contraseña demasiado cortos. ");   
        }
        return usuario, contraseña
    }
    console.log(usuarioContraseña("4334","664"));
    







