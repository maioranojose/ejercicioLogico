console.clear();
const process = require('process');
const horasTrabajadas =+process.argv[2];
const pagoPorHora =+process.argv[3];

const calculoSueldo= function(ht,pph){
    let error = null;
    ht = horasTrabajadas;
    pph = pagoPorHora;
    
    if(isNaN(ht) || isNaN(pph)){
        console.log("ERROR:\n Uno o más valores no son números, o faltan datos.");
        error = 1;
        
    }
    if(ht === 0 || pph === 0 ){
        console.log("ERROR:\n Uno o más valores son inválidos.");
        error = 2;
    }
    if(error === null){
    const calcular = ht * pph;
    
    return console.log("El sueldo del operario es de : $"+calcular+".-\n");
    }
    return error;
}   
calculoSueldo();