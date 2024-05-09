const canvas = document.querySelector('#canvas')

const quadro =  canvas.getContext('2d')

//let player = quadro.fillRect(80, 260, 30, 200)

//let player2 = quadro.fillRect(1170, 260, 30, 200)

//let ball = quadro.fillRect(1280/2 -15, 720/2, 30, 30)

let player1 = {
    px: 80,
    py: 260,
    w: 30,
    h: 200
}

let player2 = {
    px: 1170,
    py: 260,
    w: 30,
    h: 200
}

let ball = {
    px: 625,
    py: 345,
    w: 30,
    h: 30,
    direcion: 6
}

quadro.font = '30px arial'
let sc1 = 0
let score1 = quadro.fillText(`pontuação 1 : ${sc1}`, 200, 50)
let sc2 = 0
let score2 = quadro.fillText(`pontuação 2 : ${sc2}`, 900, 50)

function draw() {
    quadro.fillRect(player1.px, player1.py, player1.w, player1.h)

    quadro.fillRect(player2.px, player2.py, player2.w, player2.h)

    quadro.fillRect(ball.px, ball.py, ball.w, ball.h)
}

function moveBall() {
    ball.px += ball.direcion

    if(ball.px > 1170) {
        ball.direcion *= -1 
    }
    else if (ball.px < 80) {
        ball.direcion *= -1 
    }
}

function main() {
    quadro.clearRect(0, 0, 1280, 720)
    draw()
    moveBall()
}

setInterval(main,10)