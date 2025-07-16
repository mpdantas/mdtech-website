/* ==================== MOSTRAR E ESCONDER O MENU ==================== */

// Seleciona os elementos do DOM que vamos manipular
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* --- MOSTRAR O MENU --- */
// Se o ícone de toggle (hambúrguer) for clicado...
if (navToggle) {
    navToggle.addEventListener('click', () => {
        // Adiciona a classe 'show-menu' ao elemento do menu
        navMenu.classList.add('show-menu');
    });
}

/* --- ESCONDER O MENU --- */
// Se o ícone de fechar (X) for clicado...
if (navClose) {
    navClose.addEventListener('click', () => {
        // Remove a classe 'show-menu' do elemento do menu
        navMenu.classList.remove('show-menu');
    });
}

/* --- FECHAR O MENU AO CLICAR EM UM LINK --- */
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.nav__link');

// Adiciona um 'ouvidor de eventos' a cada link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Quando um link é clicado, remove a classe 'show-menu', fechando o menu
        navMenu.classList.remove('show-menu');
    });
});