function numMayor(num, num2, num3){
    if(num > num2 && num > num3){
        console.log('es mayor: ' +num)
    }else if(num2 > num && num2 > num3 ){
        console.log('es mayor' + num2)
    }else if(num3 > num && num3 > num2){
        console.log('es mayor' + num3)
    }else if(num && num2 && num3){
        console.log('son iguales')

    }

    }
    
numMayor(2,2,2)
