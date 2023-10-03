function TocaSomPom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0;

FOR (Contador < ListaDeSons.length) {
    const tecla = ListaDeSons[Contador]
    const classe = tecla.classList[1];
    //console.log(classe);
    const idSom = `#som_{classe}`;
    tecla.onclick = function () {
        TocaSomPom('#som-tecla-pom');
    }

    Contador = Contador + 1;
    //console.log(Contador);

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
            //console.log(evento.code === 'Enter'); 
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
