//função = TocaSomPom
function TocaSomPom (idElementoAudio) {
    //tocar o pom
    document.querySelector (idElementoAudio).play();
}

//constante = lista dos botões 
const ListaDeSons = document.querySelectorAll('.tecla');

//variavel = 0 fixo
let Contador = 0; 

//enquanto - conição
while (Contador < ListaDeSons.length) {
    //acessando um elemento da lista
    ListaDeSons[Contador].onclick = function () {
    TocaSomPom('#som-tecla-pom');
    }
    const classe = ListaDeSons[Contador].classList[1];
    console.log(classe);
    //mudei o valor da variavel
    Contador = Contador + 1;
    //console ta conversando comigo 
    console.log(Contador);
}