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
// A função mudoucor() é responsável por alternar as cores do fundo e do texto da página entre preto e branco. Ela verifica a cor atual do fundo e, com base nisso, altera as cores para criar um contraste adequado. Além disso, ela também altera a cor dos elementos de cabeçalho para garantir que eles permaneçam legíveis em ambas as configurações de cor.
function mudoucor() {
    const body = document.body;
    const currentColor = body.style.backgroundColor;
    const Headerh1 = document.querySelector('header h1');
        const Headerh2 = document.querySelector('header h2');
    if (currentColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        const headers = document.querySelectorAll('header');
        headers.forEach(header => {
        header.style.color = 'black';
        Headerh1.style.color = 'black';
        Headerh2.style.color = 'black';
        });
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        const headers = document.querySelectorAll('header');
        headers.forEach(header => {
        header.style.color = 'white';
        
        Headerh1.style.color = 'white';
        Headerh2.style.color = 'white';
        });
    }
}
    //menuclick() é a função que é chamada quando o usuário clica no ícone de menu (hambúrguer). Ela verifica se o menu está atualmente visível ou oculto e alterna sua visibilidade. Se o menu estiver oculto, ele será exibido; se estiver visível, ele será ocultado.
    function menuclick() {
        const menu = document.getElementById('menu');
        // inicialmente menui recebe display none, mas quando o usuário clicar no ícone de menu (hambúrguer) ele recebe display block, e quando o usuário clicar novamente no ícone de menu (hambúrguer) ele recebe display none novamente.
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }   
    }