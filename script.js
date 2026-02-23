// Configuração do ScrollReveal para animações suaves ao descer a página
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 200,
    reset: true
});

sr.reveal('.reveal');
sr.reveal('.reveal-delay', { delay: 400 });
sr.reveal('.card', { interval: 200 });

// Efeito de Matrix/Terminal simples no console para "Easter Egg"
console.log("%c SYSTEM ONLINE: ACCESS GRANTED", "color: #00ff88; font-weight: bold; font-size: 20px;");
