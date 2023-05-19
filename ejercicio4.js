//console.clear();
const process = require('process');
const valorA =+process.argv[2];
const valorB =+process.argv[3];

const intercambio = function(a,b){
    let error = null;
    a = valorA;
    b = valorB;
    
    if(isNaN(a) || isNaN(b)){
        console.log("ERROR:\n Uno o más valores no son números, o faltan datos.");
        error = 1;
    }
   
    if(error === null){
    a = valorB;
    b = valorA;
    
    return console.log("Los valores son: "+a+" para el primer valor.\n Y: "+b+" para el segundo valor.\n"+"NOTA: Aquí se puede apreciar como los valores se intercambiaron de posición.\n");
    }
    return error;
}   
intercambio();