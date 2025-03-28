function generarCaracter(n, caracter){
let result = "";
    for (let i = 0 ; i < n ; i++){
        result += caracter; 

    }
    return result;
}
   console.log (generarCaracter(8, 'x'))
