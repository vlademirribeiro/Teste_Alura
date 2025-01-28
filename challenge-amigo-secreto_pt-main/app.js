
//armazenar os nomes dos amigos no array

let amigos = [];

//funcao para add Amigos
function adicionarAmigo(){
     let inputAmigo = document.getElementById('amigo');
     let nome = inputAmigo.value.trim();
     limpa(inputAmigo);

    if (validarNome(nome)){
        amigos.push(nome);
        atualizarListaAmigos();
        limpa(inputAmigo);
        console.log(nome);
    }
}

//funcao para validar nomes
function validarNome(nome){
    if (nome === "") {
        alert("Por favor, insira um nome!");
        return false;
    }

    if (amigos.includes(nome)){
        alert("Este nome ja foi adcionado!");
        return false;
    }

      let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 

    if (!regex.test(nome)) {
        alert("Somente letras poderá ser inseridas!");
        return false;
    }
    return true;
}

// funcao limpar campo de entrada
function limpa(input){
     input.value = "";
}

//funcao para criar lista
function criarLista(amigo, index){
    let lista = document.createElement('li');
    lista.textContent = amigo;
    return lista;
}

// funcao para atualizar lista de amigos
function atualizarListaAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        listaAmigos.appendChild(criarLista(amigo, index));
    });
}

//funcao sortear um amigo
function sortearAmigo(){
    console.log("Vamos iniciar o sorteio");

}











