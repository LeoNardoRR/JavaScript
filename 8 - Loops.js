console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 19;
const estaAcompanhada = false;
let  temPassagemComprada = false;
const destino = "Salvador";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const PodeComprar = (idadeComprador >= 18 || estaAcompanhada == true) 

let contador = 0;
let destinoExiste = true
//while(contador<3){
//    if(listaDeDestinos[contador] == destino){
//        console.log("Destino existe");
//        destinoExiste = true;
//        break;
//    }
//    contador += 1;
//}        

console.log("Destino existe: ", destinoExiste);

if(PodeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0 ; i <3 ; i++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}