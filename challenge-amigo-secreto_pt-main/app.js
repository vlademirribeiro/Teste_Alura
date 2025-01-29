
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
     let listaAmigos = document.getElementById('listaAmigos')
     listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.appendChild(criarLista(amigos[i], i));
        
    }  
}

//funcao para sortear amigo
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; 

    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para sortear.");
        return;
    }

    let amigosRestantes = [...amigos];
    let sorteio = [];

    while (amigosRestantes.length > 0) {
        let sorteado = amigosRestantes.splice(
            Math.floor(Math.random() * amigosRestantes.length), 1
        )[0];
        sorteio.push(sorteado);
    }

    for (let i = 0; i < sorteio.length; i++) {
        let amigo = sorteio[i];
        let amigoSecreto = sorteio[(i + 1) % sorteio.length];

        let li = document.createElement('li');
        li.textContent = `${amigo} tirou ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}




   
    
  













