function TocaSomPom (idElementoAudio) { 
    document.querySelector (idElementoAudio).play();
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0; 

while (Contador < ListaDeSons.length) {
    const tecla = ListaDeSons
    const classe = ListaDeSons[Contador].classList[1];
    console.log(classe);
    const idSom = `#som_{classe}`;
    ListaDeSons[Contador].onclick = function () {
    TocaSomPom('#som-tecla-pom');
    }
   
    Contador = Contador + 1;
    console.log(Contador);
    ListaDeSons[5].classList.add('ativa')
    tecla.classList.remove('ativa');
}