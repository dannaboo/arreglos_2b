//Crear arreglo

let arreglo = [1, 2, 3, 4, 5, 6]
// Acceder al arreglo
console.log(arreglo[0])
arreglo[0] = 2

//declarar arreglo
let array = [1, 2, 3]
array.push(4)
console.log(array)

//Eliminar ultimo elemento del arreglo
let array2 = [1, 2, 3]
array.pop()
console.log(array2)

//Agregar elementos al inicio del arreglo

let miArreglo = ["perro", "gato", "pajaro", "vaca", "elefante"]
miArreglo.unshift("cuyo")
console.log(miArreglo)

// Eliminar el primer elemento de un arreglo

const cities = ["Madrid", "Valencia", "Mexico"]
const first = cities.shift()
console.log(cities)
console.log(first)

//Buscar elemento en un arreglo

let miarreglo = ["caballo", " vaca", "burro"]
console.log = (miarreglo.includes("Caballo"))
console.log = (miarreglo.includes("persona"))

//indexof

let miarreglo2 = ["Caballo", "Vaca", "burro"]
console.log = (miarreglo2.indexOf("Caballo"))
console.log = (miarreglo2.indexOf("Vaca"))

// iterar sobre arreglos

let miarreglo3 = ["Caballo", "Vaca", "Burro"]
for(let i = 0; i <miarreglo3; i++){
    console.log(miarreglo3)
}

// filtrar elementos en un arreglo

let palabras = ["Theboss", "hola", "hamburgesa","Haitiano", "globo", "maluma"]
let masde5letras = palabras.filter((x)=>x.length >= 5)
console.log(masde5letras)  

// Transformar elementos en un arreglo

let number = [1, 4, 9, 16]
let raiz = number.map((num)=>math.sqrt(num))
console.log(raiz)

//Reducir un arreglo a un unico valor sumar los elementos

let inicioen = 1;
let operacion = raiz.reduce((acumular, acumulado)=> acumular * acumulado, inicioen,)
console.log(operacion)


//Comprobar que todos los elementos cumplan una condicion 

let numP = [0, 7, 8, 9, 10]
let Positivos = numP.every(num => num > 0)
console.log(Positivos)

// verificar si algun elemento cumpla una condicion 

let numN = [1, -2, 3, 4, 5, 6]
let Negativo = numN.some(num => num < 0 )
console.log(Negativo)

// Ordenar un arreglo

let nombre = ["Ale", "Fanny","Miguel","Citlalli"]
nombre.sort()
console.log(nombre)

//Invertir arreglo con reverse

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]
numeros.reverse()
console.log(numeros)

//Combinar 2 arreglos usando concat

let arreglo1 = [1, 2, 3, 4]
let arreglo2 = [5, 6, 7, 8]
let combinado = arreglo1.concat(arreglo2)
console.log(combinado)

// Declaracion de arreglo

let nombresSalon = ["Alex", "Cris"]
nombresSalon[0] = "Danna"


// .metodo()

// arrow functions
let Negativos = numN.some((num) => num < 0)

function nombreEQUIS(num){
    if(num < 0 ){
        console.log("True")
    }
}
// 
