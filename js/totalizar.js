document.addEventListener("DOMContentLoaded", () => {
    const viagens = JSON.parse(localStorage.getItem("viagens")) || [];
    const totalViagens = viagens.length;
    
    const totalizadosDiv = document.querySelector("#totalizados");
    totalizadosDiv.innerHTML = `
        <p>Total de Viagens: <strong>${totalViagens}</strong></p>
        <h5>Resumo das Viagens:</h5>
        <ul class="list-group">
            ${viagens.map(v => `
                <li class="list-group-item">
                    <strong>Local:</strong> ${v.local}<br>
                    <strong>Data:</strong> ${v.data}<br>
                    <strong>Descrição:</strong> ${v.descricao}
                </li>
            `).join('')}
        </ul>
    `;
});
