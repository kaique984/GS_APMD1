document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (event) => {
        event.preventDefault();

        const form = document.querySelector("form");

        const viagem = {
            id: "id" + new Date().getTime(),
            local: form.local.value,
            data: form.data.value,
            descricao: form.descricao.value,
            status: 0
        };

        salvar(viagem);
    });

function salvar(viagem){
    const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
    viagens.push(viagem);
    localStorage.setItem("viagens", JSON.stringify(viagens));

    window.location = "index.html";
}
