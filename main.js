function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.teclado');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclado = listaDeTeclas[contador];
    const instrumento = teclado.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    teclado.onclick = function () {
        tocaSom(idAudio);
    }

    teclado.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            teclado.classList.add('ativa');
        }

    }

    teclado.onkeyup = function () {
        teclado.classList.remove('ativa');
    }

}
