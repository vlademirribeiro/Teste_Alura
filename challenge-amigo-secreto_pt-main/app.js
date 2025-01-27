
//armazenar os nomes dos amigos no array

let amigos = [];


//funcao para add Amigos
function adicionarAmigo(){
     let inputAmigo = document.getElementById('amigo');
     let nome = inputAmigo.value.trim();
     limpa(inputAmigo);

    if (validarNome(nome)){
        amigos.push(nome);
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
        alert("Este nome ja foi adcionado");
        return false;
    }
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
    if (!regex.test(nome)) {
        alert("Somente letras podem ser inseridas!");
        return false;
    
    }
    return true;
}

// funcao limpar campo de entrada
function limpa(input){
     input.value = "";
   

}

//funcao sortear um amigo
function sortearAmigo(){
    console.log("Vamos iniciar o sorteio");

}











