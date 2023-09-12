alert('Bem-vindo ao MAAD!')

function TocaSomPom () {

}

const ListaDeSons = document.querySelectorAll('.tecla');

let Contador = 0; 

while (Contador < 9) {
    ListaDeSons[Contador].onclick = TocaSomPom;
    Contador = Contador + 1;
    console.log(Contador);
}

ListaDeSons[0].onclick= TocaSomPom;

document.querySelector ('.tecla_pom') .onclick = TocaSomPom;

