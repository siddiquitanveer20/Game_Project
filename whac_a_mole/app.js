const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeleft=document.querySelector('#time-left')
const score=document.querySelector('#score')

let result=0
let hitposition
let currenttime=60
let timerid=null


function randomsquare(){
squares.forEach(square=>{
    square.classList.remove('mole')
})


let randomsquare=squares[Math.floor(Math.random()*9)]
randomsquare.classList.add('mole')
hitposition=randomsquare.id   // it give sqaure id to hit position


}
squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{    //it'll wait for click and click hoga to kya hoga vo krta h
        if(square.id==hitposition){
            result++
            score.textContent=result
            hitposition=null
        }
    })

    
})

function movemole(){
    
    timerid=setInterval(randomsquare,500)
}
movemole()


function countdown(){
currenttime--
timeleft.textContent=currenttime
if(currenttime==0){
    clearInterval(timerid)
    clearInterval(countdowntimerid)
    alert('Game Over!!Your Final Score is  '+ result)
}
}
let countdowntimerid=setInterval(countdown,500)