document.querySelector("#pesquisa").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
    
    document.querySelector("#listaDeViagens").innerHTML = '';
    
    const resultados = viagens.filter(v => v.local.toLowerCase().includes(query));
    resultados.forEach(viagem => card(viagem));
});

function card(viagem){
    const content = `
        <div class="card mb-3" id="${viagem.id}">
            <div class="card-body">
                <h5 class="card-title">${viagem.local}</h5>
                <p class="card-text">${viagem.descricao}</p>
                <p class="card-text"><small class="text-muted">Data: ${viagem.data}</small></p>
                <button onclick="apagar('${viagem.id}')" type="button" class="btn btn-danger">Apagar</button>
            </div>
        </div>
    `;

    const card = document.createElement("div");
    card.innerHTML = content;

    document.querySelector("#listaDeViagens").appendChild(card);
}

function apagar(id){
    document.querySelector(`#${id}`).classList.add('apagando');
    document.querySelector(`#${id}`).addEventListener("animationend", () => {
        document.querySelector(`#${id}`).remove();

        const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
        const viagensAtualizadas = viagens.filter( (v) => v.id !== id );
        localStorage.setItem("viagens", JSON.stringify(viagensAtualizadas));
    });
}
