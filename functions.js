//Sintaxis

function Saludar(){
    console.log("Funcion saludar")
//Body function
}
//Uso de funcion
Saludar()

//Funcion con parametros
function miName(name){
    console.log("Mi name is:"+ name)
}
miName('Juanito')

function sumNumbers(num1, num2){
    let sum = num1 + num2
    console.log('La suma es:' + sum)
}
sumNumbers(3, 8)
function findSquare(num){
    console.log("Dentro de la ejecucion")
    return console.log(num * num)
    console.log("Fuera de ejecucion")
}
findSquare(4)