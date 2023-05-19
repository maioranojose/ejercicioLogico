const process = require('process');
const n1 =+process.argv[2];
const n2 =+process.argv[3];
const n3 =+process.argv[4];


const obtenerPromedio = function(nota1,nota2,nota3){
    let error = null;
    nota1 = n1;
    nota2 = n2;
    nota3 = n3;
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        console.log("Uno o más valores no son números");
        error = 1;
    }
    if(nota1 < 0 || nota2 < 0 || nota3 < 0){
        console.log("Uno o más valores son inválidos");
        error = 2;
    }
    if(nota1> 10 || nota2> 10 || nota3 >10){
        console.log("Uno o más valores son inválidos");
        error = 2;
    }
    if(error === null){

    const total = nota1+ nota2+nota3;
    const cantidadNotas = 3;
    return total / cantidadNotas;
    }
    return error;
}
console.log("Tu promedio es :\n" +obtenerPromedio());