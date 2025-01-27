
//armazenar os nomes dos amigos no array

let amigos = [];

function adicionarAmigo(){
     let inputAmigo = document.getElementById('amigo');
     let nome = inputAmigo.value.trim();
     amigos.push(nome);
     console.log(nome);
}

function validarNome(nome){
    if (nome == " ") {
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











