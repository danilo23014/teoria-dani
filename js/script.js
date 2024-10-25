
let vector=[];

let nombres=["carlos","juan","pepe","maria","luis","brayan","michael","cathe","andres"];

console.log("vector: " + nombres);

console.log("el nombres que esta en la posicion 5 es:" + nombres[5]);

for(let i =0; i < nombres.length; i++){
    console.log(nombres[i]);
}

nombres.push("stiven");

console.log(nombres);

for(let i =0; i < nombres.length; i++){
    console.log(nombres[i]);
}

nombres.splice(1, 2);

console.log(nombres);

for(let i =0; i < nombres.length; i++){
    console.log(nombres[i]);
}
