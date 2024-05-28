const viagens = JSON.parse(localStorage.getItem("viagens")) || [];

const dados = viagens.filter(v => v.status < 100);
dados.forEach( viagem => card(viagem) );

function card(viagem){
    const content = `
        <div class="nes-container with-title is-centered">
            <p class="title">${viagem.local}</p>
            <p>${viagem.descricao}</p>
            <p>Data: ${viagem.data}</p>

            
            <button onclick="apagar('${viagem.id}')" type="button" class="nes-btn is-error">Apagar</button>
            
        </div>
    `;

    const card = document.createElement("div");
    card.id = viagem.id;
    card.innerHTML = content;

    document.querySelector("#listaDeViagens").appendChild(card);
}
