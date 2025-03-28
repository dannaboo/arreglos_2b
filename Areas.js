
function areaTriangulo(a, b){
    return (a * b) / 2
  }

function areaRectengulo(a, b){
    return (b * a) 
  }

  function areaCirculo(a, a){
    return (3.14) * (a*a)
  }
  function suma2numeros(a, b){
    return (a + b)
  }

  function montrarResultados(op,a,b){
    let resultado;
    switch(op){
      case 1:
         resultado = areaTriangulo(a,b);break;
      case 2:
        resultado = areaRectengulo(a,b);break;
        case 3:
        resultado = areaCirculo(a,a);break;
        case 4:
        resultado = suma2numeros(a,b);break;
      default:
        console.log("Operacion no reconocida");break;
    }
    console.log("el resultado de: " + resultado);
  }

  
  let a = 10;
  let b = 50;

 montrarResultados(4,a,b)
 
