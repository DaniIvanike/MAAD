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

    tecla.onkeydown = function () { 
        if(){
            tecla.classList.add('ativa');
        }  
         //console.log(evento.code === 'Space'); || evento.code === 'Enter');
    }
        
    tecla.onkeyup = function () { 
    tecla.classList.remove('ativa');
    }
}
