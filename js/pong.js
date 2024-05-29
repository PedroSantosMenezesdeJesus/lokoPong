const canvas = document.querySelector('#canvas')

const quadro =  canvas.getContext('2d')

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

    if(ball.py + ball.h >= player2.py && ball.py <= player2.py + player2.h 
        && ball.px <= player2.px + player2.w && ball.px + ball.w >= player2.px) {
        ball.direcion *= -1 
    }
    
    if (ball.py + ball.h >= player1.py && ball.py <= player1.py + player1.h 
        && ball.px <= player1.px + player1.w && ball.px + ball.w >= player1.px) 
    {
        ball.direcion *= -1 
    }
}

function main() {
    quadro.clearRect(0, 0, 1280, 720)
    draw()
    moveBall()
    moverPlayer()
}

setInterval(main,10)