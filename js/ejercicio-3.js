//escribe un programa que recorra un vector a animales y que muestre solo los que tengan mas de 5 letras en su nombre

let animales=["leon","tortuga","perro","gato","aguila"]

for(let i =0; i < animales.length; i++){
    if(animales[i].length > 5){
        console.log(animales[i])

    }
}
