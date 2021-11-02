let squares = document.getElementsByClassName("game-square");
let playerRoundText = document.getElementById("player-round");
let topTitle = document.getElementById("top-title");
let resetButton = document.getElementById("reset-button");
let player1Round = true;
let squaresArray = [].slice.call(squares); //Precisava transformar a html collection em um array para usar funções de array do ES 6
let victoriesCounter1 = document.getElementById('victories-player-1');
let victoriesCounter2 = document.getElementById('victories-player-2');
let victoriesPlayer1 = 0;
let victoriesPlayer2 = 0;

const iniciarJogo = () =>{
    squaresArray.forEach(square => square.addEventListener('click',clicou));
}

const clicou = (e)=>{
    if(e.target.innerText.length == 0){
        addMark(e);
    }   
}

const addMark = e =>{
    let markSpan = document.createElement('span')
    let mark = player1Round ? document.createTextNode('X') : document.createTextNode('O');
    player1Round ? markSpan.setAttribute('class', 'player-1-mark') : markSpan.setAttribute('class', 'player-2-mark')
    markSpan.appendChild(mark)
    e.target.appendChild(markSpan);
    verifica();
}

const verifica = () =>{
    if(squares[0].innerText==='X' && squares[1].innerText==='X' && squares[2].innerText==='X' || squares[0].innerText==='O' && squares[1].innerText==='O' && squares[2].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(squares[3].innerText==='X' && squares[4].innerText==='X' && squares[5].innerText==='X' || squares[3].innerText==='O' && squares[4].innerText==='O' && squares[5].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(squares[6].innerText==='X' && squares[7].innerText==='X' && squares[8].innerText==='X' || squares[6].innerText==='O' && squares[7].innerText==='O' && squares[8].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(squares[0].innerText==='X' && squares[3].innerText==='X' && squares[6].innerText==='X' || squares[0].innerText==='O' && squares[3].innerText==='O' && squares[6].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(squares[1].innerText==='X' && squares[4].innerText==='X' && squares[7].innerText==='X' || squares[1].innerText==='O' && squares[4].innerText==='O' && squares[7].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(squares[2].innerText==='X' && squares[5].innerText==='X' && squares[8].innerText==='X' || squares[2].innerText==='O' && squares[5].innerText==='O' && squares[8].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(squares[0].innerText==='X' && squares[4].innerText==='X' && squares[8].innerText==='X' || squares[0].innerText==='O' && squares[4].innerText==='O' && squares[8].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(squares[2].innerText==='X' && squares[4].innerText==='X' && squares[6].innerText==='X' || squares[2].innerText==='O' && squares[4].innerText==='O' && squares[6].innerText==='O'){
        player1Round ? finalizaJogo(1) : finalizaJogo(2);
    } else
    if(!squaresArray.some(element => element.innerText == '')){
        finalizaJogo(0);
    } else{
        updatePlayerRound();
    }
}

const updatePlayerRound = () =>{
    player1Round = !player1Round;
    playerRoundText.textContent = player1Round ? 'Jogador 1' : 'Jogador 2';
    player1Round ? playerRoundText.setAttribute('class', 'player-round-text-player-1') : playerRoundText.setAttribute('class', 'player-round-text-player-2');
}

const finalizaJogo = (winner) =>{
    switch(winner){
        case 0:
            topTitle.textContent = 'O jogo empatou!';
            break;
        case 1:
            topTitle.textContent = 'O jogador 1 venceu!';
            squaresArray.forEach(square =>{
                square.removeEventListener('click',clicou);
            })
            victoriesPlayer1++;
            victoriesCounter1.innerText = victoriesPlayer1;
            break;
        case 2:
            topTitle.textContent = 'O Jogador 2 venceu!'
            squaresArray.forEach(square =>{
                square.removeEventListener('click',clicou);
            })
            victoriesPlayer2++;
            victoriesCounter2.innerText = victoriesPlayer2;
    }
}

const resetarJogo = () =>{
    squaresArray.forEach(square => square.innerText = '');
    topTitle.innerText = 'Jogo da Velha';
    player1Round = true;
    playerRoundText.textContent = 'Jogador 1';
    playerRoundText.setAttribute('class', 'player-round-text-player-1');
    iniciarJogo();
}

resetButton.addEventListener('click',resetarJogo);

iniciarJogo();
