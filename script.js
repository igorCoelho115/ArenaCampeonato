const botaoAlternarMenu = document.querySelector(".btn-menu");
const painelMenuLateral = document.querySelector(".menu-lateral");

botaoAlternarMenu.addEventListener("click", () => {
    painelMenuLateral.classList.toggle("ativo");
    botaoAlternarMenu.classList.toggle("girar");
});

async function inicializarTorneio() {
    const elementoMensagem = document.getElementById("mensagem-estado");
    const tabuleiroPrincipal = document.getElementById("tabuleiro-copa");
    const espacoPrimeiraSemi = document.getElementById("vencedor-q1");

    try {
        
        const timesRecebidos = [
            { "nome": "Brasil", "destino": "vencedor-q1" },
            { "nome": "Chile", "destino": "vencedor-q1" },
            { "nome": "Holanda", "destino": "vencedor-q2" },
            { "nome": "México", "destino": "vencedor-q2" }
        ];
        elementoMensagem.style.display = "none";
        tabuleiroPrincipal.style.display = "grid";

        timesRecebidos.forEach(time => {
            let botaoCriado = document.createElement("button");
            botaoCriado.innerText = time.nome;
            botaoCriado.dataset.destino = time.destino;
            botaoCriado.classList.add("jogo", "quartas");
            
            tabuleiroPrincipal.insertBefore(botaoCriado, espacoPrimeiraSemi);
        });

        ativarRegrasDoCampeonato();

    } catch (erro) {
        console.error("Falha na comunicação com o servidor:", erro);
        elementoMensagem.innerText = "Lamentamos, ocorreu um erro ao carregar os dados do torneio. Tente recarregar a página.";
        elementoMensagem.classList.add("estado-erro");
