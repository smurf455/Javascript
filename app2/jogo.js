var altura = 0
var largura = 0
var vidas = 1
var tempo = 60

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
	criaMosquitoTempo = 1000
} else if(nivel === 'japones'){
	criaMosquitoTempo = 750
}

function capturaTamanhoJanelaJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

	capturaTamanhoJanelaJogo()
	
	var cronometro = setInterval(function() {

		tempo--

		if(tempo < 0 ){
			clearInterval(cronometro)
			clearInterval(criaMosquito)
			window.location.href = 'vitoria.html'
			
		} else{
		document.getElementById('cronometro').innerHTML = tempo
		}
	}, 1000)


	function posicaoRandomica(){
		//remover o mosquito anterior caso exista
		if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		//lógica para substituir os corações 'vidas'
		if(vidas > 3) {

			window.location.href = 'fim_de_jogo.html'
 
		} else{

		document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
			vidas++
		}
	}


		var PosicaoX = Math.floor(Math.random() * largura) - 80
		var PosicaoY = Math.floor(Math.random() * altura) - 80

		//operação para evitar valores negativos
		PosicaoX = PosicaoX < 0 ? 0 : PosicaoX 
		PosicaoY = PosicaoY < 0 ? 0 : PosicaoY

		console.log(PosicaoX , PosicaoY)

		//criar elementos html

		//cria um elemento do tipo img e atribui a mosquito
		var mosquito = document.createElement('img')
		// atribui o elemento img a variavel mosquito
		mosquito.src = 'imagens/mosca.png'
		//atribuindo as formatações css a imagem
		mosquito.className = tamanhoRandomico() + ' ' + ladoRandomico()
		//atribuindo ao mosquito as posições randomicas
		mosquito.style.left = PosicaoX + 'px'
		mosquito.style.top = PosicaoY + 'px'
		mosquito.style.position = 'absolute'
		mosquito.id = 'mosquito'
		//função que permite a eliminação do mosquito caso seja clicado
		mosquito.onclick = function(){
			this.remove()
		}


	//insere no body a variavel mosquito com seus respectivos valores
		document.body.appendChild(mosquito)

		ladoRandomico()
	}

	function tamanhoRandomico(){
		var classe = Math.floor(Math.random() * 3)

		switch(classe){

			case 0:
			return 'mosquito1'

			case 1:
			return 'mosquito2'

			case 2:
			return 'mosquito3'
		}

	}


	function ladoRandomico(){
		var classe = Math.floor(Math.random() * 2)

		switch(classe){

			case 0:
			return 'LadoA'

			case 1:
			return 'LadoB'

			
		}

	}