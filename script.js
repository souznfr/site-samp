// Menu Mobile
const botaoMenu = document.getElementById('botao-menu');
const menuMobile = document.getElementById('menu-mobile');
let menuAberto = false;

botaoMenu.addEventListener('click', () => {
    menuAberto = !menuAberto;
    menuMobile.style.maxHeight = menuAberto ? '350px' : '0';
    botaoMenu.innerHTML = menuAberto ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
});

// Fechar menu ao clicar no link
document.querySelectorAll('#menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        menuAberto = false;
        menuMobile.style.maxHeight = '0';
        botaoMenu.innerHTML = '<i class="fa fa-bars"></i>';
    });
});

// Efeito no cabeçalho ao rolar a página
const cabecalho = document.getElementById('cabecalho');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        cabecalho.classList.add('shadow-md');
    } else {
        cabecalho.classList.remove('shadow-md');
    }
});

// Rolagem suave entre as seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            window.scrollTo({
                top: alvo.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Botão Jogar Agora - copia o IP
document.querySelector('.btn-destaque').addEventListener('click', () => {
    alert('IP do Servidor copiado: 192.168.1.100:7777\nAbra o SA-MP e cole para conectar!');
});