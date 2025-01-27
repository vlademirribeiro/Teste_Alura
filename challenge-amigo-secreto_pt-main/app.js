
//armazenar os nomes dos amigos no array

let amigos = [];

function adicionarAmigo(){
        console.log("o botao esta sendo clicado")
}

function validarNome(nome){
    if (nome === " ") {
        prompt("Por favor, insira um nome.");
        return false;
    }

    if (amigos.includes(nome)){
        alert("Este nome ja foi adcionado");
        return false;
    }

    if (!isNaN (nome)){
        alert ("Somente letra poderá ser inserida");
        return false;
    }
    return true;
}


function sortearAmigo(){
    console.log("Vamos iniciar o sorteio")

}











