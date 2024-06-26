const canvas = document.querySelector('#canvas')

const quadro =  canvas.getContext('2d')

let jogar = true

const pong = new Audio('audios/pong.mp3')

const gionor = new Audio('audios/gionor.mp3')

const stock = new Audio('audios/stock.mp3')

const orb = new Audio('audios/orb.mp3')

const goku = new Audio('audios/instinto_superior.mp3')

//let player = quadro.fillRect(80, 260, 30, 200)

//let player2 = quadro.fillRect(1170, 260, 30, 200)

//let ball = quadro.fillRect(1280/2 -15, 720/2, 30, 30)

// w = 87;  s = 83, cima = 38, baixo = 40

let player1 = {
    px: 80,
    py: 260,
    w: 30, //eixo x p1
    h: 200, //eixo y p1
    direcion: 0,
}

let player2 = {
    px: 1170,
    py: 260,
    w: 30, // eixo x p2
    h: 200, // eixo y p2
    direcion: 0,
}

let ball = {
    px: 625,
    py: 345,
    w: 30,
    h: 30,
    direcion: 6,
    direcionY: 2,
}

quadro.font = '30px arial'
let sc1 = 0
let sc2 = 0


function draw() {
    quadro.fillRect(player1.px, player1.py, player1.w, player1.h)

    quadro.fillRect(player2.px, player2.py, player2.w, player2.h)

    quadro.fillRect(ball.px, ball.py, ball.w, ball.h)

    quadro.fillText(`pontuação 1 : ${sc1}`, 200, 50)

    quadro.fillText(`pontuação 2 : ${sc2}`, 900, 50)

    gionor.play()
}

document.addEventListener('keydown', function(e){
    if(e.keyCode === 87){
        player1.direcion = -8
    }
    if(e.keyCode === 83){
        player1.direcion = 8
    }
    if(e.keyCode === 38){
        player2.direcion = -8
    }
    if(e.keyCode === 40){
        player2.direcion = 8
    }
})

document.addEventListener('keyup', function(e){
    if(e.keyCode === 87){
        player1.direcion = 0
    }
    if(e.keyCode === 83){
        player1.direcion = 0
    }
    if(e.keyCode === 38){
        player2.direcion = 0
    }
    if(e.keyCode === 40){
        player2.direcion = 0
    }
})

function moverPlayer() {
    if (player1.py < 0) {
        player1.py = 0
    }
    else if (player2.py < 0) {
        player2.py = 0
    }

    if (player1.py > 500) {
        player1.py = 500
    }
    else if (player2.py > 500) {
        player2.py = 500
    }

    player1.py += player1.direcion
    player2.py += player2.direcion
}

function moveBall() {
    ball.px += ball.direcion
    ball.py += ball.direcionY

    if(ball.py < 0)
    {
        ball.direcionY *= -1
        stock.play()
    }
    else if (ball.py > 690) 
    {
        ball.direcionY *= -1
        stock.play()
    }
}

function colisaoBall() {
    if(ball.py + ball.h >= player2.py && ball.py <= player2.py + player2.h 
        && ball.px <= player2.px + player2.w && ball.px + ball.w >= player2.px) 
    {
        ball.direcion *= -1 
        orb.play()
    }
    
    if (ball.py + ball.h >= player1.py && ball.py <= player1.py + player1.h 
        && ball.px <= player1.px + player1.w && ball.px + ball.w >= player1.px) 
    {
        ball.direcion *= -1 
        orb.play()
    }
}

function pontos() {
    if(ball.px < -100) {
        ball.px = 625
        ball.py = 345
        ball.direcion *= -1 
        sc2 += 1
        pong.play()
    }
    else if (ball.px > 1380) {
        ball.px = 625
        ball.py = 345
        ball.direcion *= -1 
        sc1 += 1
        pong.play()
    }
}

function endGame() {
    if(sc1 > 2 || sc2 > 2) {
        jogar = false
    }
}

function winner() {
    quadro.clearRect(0, 0, 1280, 720)
    quadro.font = '60px arial'
    quadro.fillText(`pontuação 1: ${sc1}`, 100, 360)
    quadro.fillText(`pontuação 2: ${sc2}`, 800, 360)
    goku.play()
}

function main() {
    if(jogar)
    {
    quadro.clearRect(0, 0, 1280, 720)
    draw()
    moveBall()
    moverPlayer()
    colisaoBall()
    pontos()
    endGame()
    }
    else {
        winner()
    }
}

setInterval(main,10)