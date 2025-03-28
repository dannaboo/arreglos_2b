function ejecutarejercicio(){
switch(1){
case 1:
    indicarimc();
    break;
case 2:
    preciofinal();
    break;
    case 3:
        numprimo();
        break;
        case 4:
            numdivisible();
            break;
            case 5:
                vocales();

}
}
//primer ejercicio
function indicarimc(){
    let peso = prompt("Ingrese su peso en kg:")
    let altura = prompt("Ingrese su altura en cm:")
    if((peso)|| (altura) || altura <= 0){
        console.log("Datos invalidos")
        return;
    }
    let imc = peso / (altura * altura)
    let resultado;
    if(imc < 18.5){
        resultado = "Bajo de peso"
    }else if (imc >= 18.5 && imc <= 24.9 ){
        resultado = "Peso normal"
    }else if (imc >= 25 && imc <= 29.9 ){
        resultado = "Sobrepeso"
    }else{
        resultado = "Obeso"
    }
console.log('Su imc es ${imc.toFixed(2)} y su clasificacion es: ${resultado}')
}
 ejecutarejercicio(1) 

 function esPrimo(n){
    let numero = prompt("Ingrese el numero")
    if (n <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt (n); i++){
        if (n % i === 0){
            return false;
        }
    }
    return true;
}
let numero = parseInt()
let resultado = "" ;
if (isNaN(numero) || numero <= 0){
    resultado = "Por favor, ingresa un numero valido"
}else{
    if(esPrimo(numero)){
    resultado = "El numero" + numero + "Es primo."
}else{
resultado = "El numero" + numero + "no es primo."
}
}


console.log(resultado)