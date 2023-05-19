console.clear();
const process = require('process');
const autoVendido =+process.argv[2];
const vendedor = 15000;

const sueldoYComision= function(av,v){
    let error = null;
    av = autoVendido;
    v = vendedor;
    
    if(isNaN(av)){
        console.log("ERROR:\n El valor ingresado no es un número, o falta dato.");
        error = 1;
        
    }
    if(av === 0){
        console.log("No ha vendido ningún auto, el sueldo del vendedor es: $"+v+".-");
        error = 2;
    }
    if(error === null){
    const calcular = (av * 2000) + vendedor;
    
    return console.log("El vendedor vendió "+av+" autos, y su sueldo es de: $"+calcular+".-\n");
    }
    return error;
}   
sueldoYComision();