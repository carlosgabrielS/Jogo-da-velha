const rdoTipo = document.getElementsByName('tipo');
const rdoNivel = document.getElementsByName('nivel');
const btnNovo = document.getElementById('novo');
const gNivel = document.getElementById('gNivel');
const gTipo = document.getElementById('gTipo');
let jogador = 'X';
let cont = 0
const cantos = [0,2,6,8]

//função de números aleatorios

function aleatorios (min, max){
	return Math.trunc(Math.random()*(max + 1 - min)+min)
}

rdoTipo[0].addEventListener('click', function(){
    gNivel.disabled = true;
})
rdoTipo[1].addEventListener('click', function(){
    gNivel.disabled = false;
})

btnNovo.addEventListener('click', function(){
    window.location.reload();
})

const btn = document.getElementsByClassName('btn');

for (let i=0;i<9;i++){
    btn[i].addEventListener('click',function(){
        if (rdoTipo[0].checked || rdoTipo[1].checked) {
           gTipo.disabled = true;
           gNivel.disabled = true;
           jogar(i);
        }else{
           alert ('Escolha um tipo de jogo!!!');
        }
    })
}


const jogar = function (pos){
    
    if (rdoTipo[0].checked ){
        btn[pos].value = jogador;
        btn[pos].disabled = true;
        verificarGanhador();
        jogador = jogador == 'X' ? 'O' : 'X' 
    }else{
		btn[pos].value = jogador;
        btn[pos].disabled = true;
        verificarGanhador();
		jogador ="O"
		
		//cpu
		let i = aleatorios(0,8)
		
		if (cont <9){	
			while (btn[pos].disabled){
				pos = IA()
			}
			
			btn[pos].value= "O"
			btn[pos].disabled= true
			verificarGanhador()
			jogador ="X"
		}
    }
}

const IA = function(){
	if (rdoNivel[0].checked){
		return aleatorios (0,8)
	}
	if (rdoNivel[1].checked){
		
		//verifica as horizontais
		for (let i=0; i<=6; i+=3){ 
			if(btn[i].value=="X" && btn[i+1].value=="X"&& btn[i+2].value ==""){
			return i+2;
			}else if(btn[i+1].value=="X" && btn[i+2].value=="X"&& btn[i].value ==""){
				return i;
			}else if (btn[i].value=="X" && btn[i+2].value=="X"&& btn[i+1].value ==""){
				return i+1;
			}
		}
		
		//verifica as verticais
		for (let i=0; i<=2; i++){ 
			if(btn[i].value=="X" && btn[i+3].value=="X"&& btn[i+6].value ==""){
			return i+6;
			}else if(btn[i+3].value=="X" && btn[i+6].value=="X"&& btn[i].value ==""){
				return i;
			}else if (btn[i].value=="X" && btn[i+6].value=="X"&& btn[i+3].value ==""){
				return i+3;
			}
		}
		
		//verifica a diagonal 1 
			if(btn[0].value=="X" && btn[4].value=="X"&& btn[8].value ==""){
			return 8;
			}else if(btn[4].value=="X" && btn[8].value=="X"&& btn[0].value ==""){
				return 0;
			}else if (btn[0].value=="X" && btn[8].value=="X"&& btn[4].value ==""){
				return 4
			
		}
		
			//verifica a diagonal 2
			if(btn[2].value=="X" && btn[4].value=="X"&& btn[6].value ==""){
			return 6;
			}else if(btn[4].value=="X" && btn[6].value=="X"&& btn[2].value ==""){
				return 2;
			}else if (btn[2].value=="X" && btn[6].value=="X"&& btn[4].value ==""){
				return 4
			
		}
			
			return aleatorios (0,8)
	}
	
//*****************

	if (rdoNivel[2].checked){


	
	
	

	//começo de jogo
	
	// PRIMEIRA JOGADAAAAAAAAAAAAAAAAAAAAAAAAAAAA
		if (cont==1 && btn[4].value=="X"){
			return cantos[aleatorios(0,3)];
			
		}else if(cont==1 && btn[0].value=="X" ||  btn[2].value=="X" || btn[6].value=="X" ||  btn[8].value=="X"){
			return 4
		}else 
			
		
		// GANHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR
		//verifica as horizontais
		for (let i=0; i<=6; i+=3){ 
			if(btn[0].value=="O" && btn[i+1].value=="O"&& btn[i+2].value ==""){
			return i+2;
			}else if(btn[i+1].value=="O" && btn[i+2].value=="O"&& btn[i].value ==""){
				return i;
			}else if (btn[i].value=="O" && btn[i+2].value=="O"&& btn[i+1].value ==""){
				return i+1;
			}
		}
		
		//verifica as verticais
		for (let i=0; i<=2; i++){ 
			if(btn[i].value=="O" && btn[i+3].value=="O"&& btn[i+6].value ==""){
			return i+6;
			}else if(btn[i+3].value=="O" && btn[i+6].value=="O"&& btn[i].value ==""){
				return i;
			}else if (btn[i].value=="O" && btn[i+6].value=="O"&& btn[i+3].value ==""){
				return i+3;
			}
		}
		
		//verifica a diagonal 1 
			if(btn[0].value=="O" && btn[4].value=="O"&& btn[8].value ==""){
			return 8;
			}else if(btn[4].value=="O" && btn[8].value=="O"&& btn[0].value ==""){
				return 0;
			}else if (btn[0].value=="O" && btn[8].value=="O"&& btn[4].value ==""){
				return 4
			
		}
		
			//verifica a diagonal 2
			if(btn[2].value=="O" && btn[4].value=="O"&& btn[6].value ==""){
			return 6;
			}else if(btn[4].value=="O" && btn[6].value=="O"&& btn[2].value ==""){
				return 2;
			}else if (btn[2].value=="O" && btn[6].value=="O"&& btn[4].value ==""){
				return 4
			
		}
			
		
	
	
	//* FECHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAR
	
	//verifica as horizontais
		for (let i=0; i<=6; i+=3){ 
			if(btn[0].value=="X" && btn[i+1].value=="X"&& btn[i+2].value ==""){
			return i+2;
			}else if(btn[i+1].value=="X" && btn[i+2].value=="X"&& btn[i].value ==""){
				return i;
			}else if (btn[i].value=="X" && btn[i+2].value=="X"&& btn[i+1].value ==""){
				return i+1;
			}
		}
		
		//verifica as verticais
		for (let i=0; i<=2; i++){ 
			if(btn[i].value=="X" && btn[i+3].value=="X"&& btn[i+6].value ==""){
			return i+6;
			}else if(btn[i+3].value=="X" && btn[i+6].value=="X"&& btn[i].value ==""){
				return i;
			}else if (btn[i].value=="X" && btn[i+6].value=="X"&& btn[i+3].value ==""){
				return i+3;
			}
		}
		
		//verifica a diagonal 1 
			if(btn[0].value=="X" && btn[4].value=="X"&& btn[8].value ==""){
			return 8;
			}else if(btn[4].value=="X" && btn[8].value=="X"&& btn[0].value ==""){
				return 0;
			}else if (btn[0].value=="X" && btn[8].value=="X"&& btn[4].value ==""){
				return 4
			
		}
		
			//verifica a diagonal 2
			if(btn[2].value=="X" && btn[4].value=="X"&& btn[6].value ==""){
			return 6;
			}else if(btn[4].value=="X" && btn[6].value=="X"&& btn[2].value ==""){
				return 2;
			}else if (btn[2].value=="X" && btn[6].value=="X"&& btn[4].value ==""){
				return 4
			
		}
			
			return aleatorios (0,8)
	}
				

}
			


const marcarGanhador = function(a,b,c){
	
	const bloquearTudo  = function () {
    cont=9;
	for (let i=0;i<=8;i++){
        btn[i].disabled = true;
    }
}
	
	 alert (jogador + " ganhou!!!");
            btn[a].style.backgroundColor = "red";
            btn[b].style.backgroundColor = "red";
            btn[c].style.backgroundColor = "red";
            bloquearTudo();
	
}


const verificarGanhador = function (){
	cont++
    //verifica a horizontal        
    for (let i=0;i<=6;i+=3){
        if (btn[i].value == jogador && btn[i].value == btn[i+1].value && btn[i+1].value == btn[i+2].value){
           marcarGanhador(i,i+1,i+2)
        }
    }
    //verifica a vertical
    for (let i=0;i<=2;i++){
        if (btn[i].value == jogador && btn[i].value == btn[i+3].value && btn[i+3].value == btn[i+6].value){
            marcarGanhador(i, i+3, i+6)
        }
    }
    //verificar as diagonais
    if (btn[0].value == jogador && btn[0].value == btn[4].value && btn[4].value == btn[8].value){
        marcarGanhador(0,4,8)
    }
    if (btn[2].value == jogador && btn[2].value == btn[4].value && btn[4].value == btn[6].value){
       marcarGanhador(2,4,6)
    }

}

