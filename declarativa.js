const array = [
 {id: 'uno', name: 'el primero'},
 {id: 'dos', name: 'el segundo'},  
]

//Paradigma Declarativo
const ids = [] //Almacenar ids

for(let i = 0; i < array.length; i++){
if(array[i].id){   //Cuando i valor de id
ids.push(array[i].id) //agregamos ids

}
}
console.log(ids);

const declarativoids = array
.filter(item => typeof item.id === 'string')
.map(item => item.id)
console.log(declarativoids)

const numeros = [1, 2, 3, 4, 5]
const cuadrados = numeros.map(num => num * num);

console.log('cuadrados: ' +cuadrados)

const evens = numeros.filter(num => num % 2 === 0)
console.log(evens);

const sum = numeros.reduce((acc, num) => acc + num, 0)
    console.log('suma de items: ' + sum)

    