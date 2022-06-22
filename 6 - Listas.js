console.log("Trabalhando com listas");

const listaDeDestino = new Array

(
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
);

listaDeDestino.push('Distrito Federal') //O push aidicona um item na lista
console.log("Destinos possiveis: ")
console.log(listaDeDestino);

listaDeDestino.splice(1,1); // Splice serve para deletar um item expecifico da lista
console.log(listaDeDestino[1], listaDeDestino[0]); //Exibe um unico elemento da lista

