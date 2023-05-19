console.clear();
const process = require('process');
const l1 =+process.argv[2];
const l2 =+process.argv[3];
const l3 =+process.argv[4];

const Triangulo= function(lado1,lado2,lado3){
    let error = null;
    lado1 = l1;
    lado2 = l2;
    lado3 = l3;
    if(isNaN(lado1) || isNaN(lado2) || isNaN(lado3)){
        console.log("ERROR:\n Uno o más valores no son números, o faltan datos.");
        error = 1;
        
    }
    if(lado1 == 0 || lado2 == 0 || lado3 == 0){
        console.log("ERROR:\n Uno o más valores son inválidos.");
        error = 2;
    }
    if(error === null){
    const perimetro = lado1+ lado2+lado3;
    let clasificador ="" ;

        if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
            clasificador = "Isósceles";
        }if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
            clasificador = "Equilatero";
        }if(lado1!=lado2 && lado1!=lado3 && lado2 != lado3){
            clasificador = "Escaleno";}
            
    
    
    return console.log("El Triángulo es "+clasificador+", y su perímetro es de "+perimetro+".");
    }
    return error;
}   
Triangulo();