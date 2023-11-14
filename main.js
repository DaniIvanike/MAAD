'use strict';

function playSound(e) {	
	const dataKey = e.type === 'mousedown' || e.type === 'touchstart' ? (this.dataset ? this.dataset.key : 49) : e.keyCode;
	
	const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
	const key = document.querySelector(`.key[data-key="${dataKey}"]`);
	
	if (!audio) return;
	
	audio.currentTime = 0;
	audio.play();
	
	key.classList.add('key--playing');
}

function removeClass(e) {
	const dataKey = e.type === 'mouseup' || e.type === 'touchend' ? (this.dataset ? this.dataset.key : 49) : e.keyCode;
	
	const key = document.querySelector(`.key[data-key="${dataKey}"]`);
	
	if (!key) return;
	
	key.classList.remove('key--playing');
}

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', removeClass);


const keys = document.querySelectorAll(".key");
keys.forEach(key => {
	['mousedown', 'touchstart'].forEach(function(e) {
		key.addEventListener(e, playSound);
	});
	['mouseup', 'touchend'].forEach(function(e) {
		key.addEventListener(e, removeClass);
	});
})
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

	<h2 class="quem-somos-titulo">Atividade 01 (Calculadora)</h2>
	<div id="apresentacao"> 
		<label id="seunome"> Qual seu nome ? </label> <br>
		   <input type="text" id="name" size="15"> <br>
		   <button type= "submit" onclick="nome()">confirmar </button>
		<h2 id="show4">Olá, somos sa equipe MAAD &#128512</h2>
	   </div>
	   <!-- FIM(APRESENTAÇÃO)-->
	   <br>
	   <hr>
	   <!--TITULO-->
	   <div class="bloco">
		 <h1>operações matematicas</h1>
	   <!--/-->
	   <hr>
		<label class="titulo"> multiplicação(*)</label> <br>
		   <input type ="number" id="num" class="input"> 
		<label id="sinal"> x </label>
		   <input type ="number" id="num2" class="input"> <br>
		  <button type = "submit" id="conta" onclick="texto()" >Resultado</button>
	   <h2 id="show"></h2>
	   </div>
	   
	   
	   <div class="bloco">
	   <label class="titulo"> divisão(/)</label> <br>
		   <input type ="number" id="div" class="input"><label id="sinal"> / </label>
		   <input type ="number" id="div2"class="input"> <br>
		 <button type="submit" id="clicar" onclick="numero()">Resultado</button>
	   <h2 id="show2"></h2>
	   </div>
	   
	   
	   <div class="bloco">
		 <label class="titulo">subtração(-(<strong>não esta pronto</strong>)</label> <br>
		   <input type="number" id="num2" class="input"> <label id="sinal"> - </label>
		   <input type="number" id="num3" class="input"> <br>
		 <button type="submit" id="resultado" onclick="number()">Resultado</button>
	   <h2 id="show3"></h2>
	   </div>
	   
	   
	   <div class="bloco">
		 <label class="titulo"> potência(^2) </label> <br>
		 <input type="number" id="pote" class="input"> <br>
		 <button type="submit" onclick="result()"> Resultado </button>
		 <h2 id="show5"></h2>
	
	
	   <!--ALERT-->
	   <script>
	   window.alert("Seja bem-vindo!");
	   </script>


