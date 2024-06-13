function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");
    let jogoAlugado = document.getElementById("dashboard__item__button dashboard__item__button--return");
    // mudando status e imagem do item ,para alugado e devolver
    if(imagem.classList.contains("dashboard__item__img--rented")){
        imagem.classList.remove("dashboard__item__img--rented");
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return");

    } else{
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");

    }
}