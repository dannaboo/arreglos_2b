//SINTAXIS
/*for (inicialization; incrementation;){
//body of for
}*/
for (let i = 0; i < 3; i++){
    console.log(i)
   // console.log('Hello 2doB')
}

const names = ['Migue','Citlalli','Alex']
for(let i = 0; i < names.length; i++){
    console.log(names[i])
}
//Bucle For Anidado 
const matrix =[
    [1, 2, 3],
    [4, 5, 6]
]
for (let i = 0; i < matrix.length; i++ ){
    for(let j = 0; j < matrix[i].length; j++){
        console.log ("valores matrix:" + matrix[i][j])
    }
}