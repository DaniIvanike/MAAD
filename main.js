function TocaSomPom () {
    document.querySelector ('#som-tecla-pom').play()
}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0; 

while (Contador < 9) {
    ListaDeSons[Contador].onclick = TocaSomPom;
    Contador = Contador + 1;
    console.log(Contador);
}


