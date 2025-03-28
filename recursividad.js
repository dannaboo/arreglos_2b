// Contador de 5 a 1
//5-1 = 4 return...
/*function cuentaAtras (num){
     //Caso base
    if(num ===0){
        return
    }
    //
    console.log(num);
    return cuentaAtras(num -1);
}
cuentaAtras(5);*/
//numero par e impar

function numeroParImpar(num){
    if(num <= 1){
        if(num === 0){
            console.log("Es par")
        } else {
            console.log("Es impar")
        }
        return 
    }
return numeroParImpar(num -2)
}
numeroParImpar(100)

