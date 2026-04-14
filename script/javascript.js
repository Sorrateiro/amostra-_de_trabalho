const areas = document.getElementById('ariaDoSol');// Seleciona a área do Sol
const areas2 = document.getElementById('AriaDoRelogio');// Seleciona a área da Torre do Relógio
const article = document.getElementById('Escondido');// Seleciona o artigo onde a mensagem será exibida

const div = document.getElementById('tocou_na_aria');// Seleciona a div onde a mensagem será exibida
let hora = new Date().getHours(); // Obtém a hora atual
let saudacao;
// Define a saudação com base na hora do dia
if (hora < 12) {
    saudacao = 'Bom dia!';
} else if (hora < 18) {
    saudacao = 'Boa tarde!';
} else {
    saudacao = 'Boa noite!';
}
areas.addEventListener('click', function(event)// Adiciona um evento de clique à área do Sol
    {event.preventDefault();// Previne a ação padrão do clique (navegação)
    article.style="display:block;"; // Exibe o artigo
    div.textContent = saudacao + ' Você clicou na área do Sol!'+' agora são ' + hora + ' horas.';
});
areas2.addEventListener('click', function(event) {
    event.preventDefault();
    article.style="display:block;"; // Exibe o artigo
    div.textContent = saudacao + ' Você clicou na área da Torre do Relógio!'+' agora são ' + hora + ' horas.';
});
function menuclick() {
        const menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    }
function mudoutamanho() {
    const menu = document.getElementById('menu');
    const amburguer = document.getElementById('amburguer');
    if (window.innerWidth >= 600) {
        menu.style.display = 'none';
      
    } else {
        menu.style.display = 'none';
        amburguer.style.display = 'none';
    }
}