window.sr = ScrollReveal({ reset: true });

sr.reveal('.contato', { duration: 1500 });

window.addEventListener('resize', function(){
    var widht = window.innerWidth

    if( widht < 580){
        sr.reveal('.melhores', { duration: 1500 });
    }
});
