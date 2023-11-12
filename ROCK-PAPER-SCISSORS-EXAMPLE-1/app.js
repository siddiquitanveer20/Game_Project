const computerchoiceDisplay = document.getElementById('Computer-Choice')
const yourchoiceDisplay = document.getElementById('Your-Choice')
const resultDisplay = document.getElementById('result')
let userchoice
let computerchoice
let result
const possiblechoices=document.querySelectorAll('button')  //sare option a gye button vale
possiblechoices.forEach(possiblechoices=>possiblechoices.addEventListener('click',(e)=> {
    userchoice=e.target.id
    yourchoiceDisplay.innerHTML=userchoice
    genratecomputerchoice()    //function declaration and calling for computerchoice wheneveri click
    getresult()                //function declaration and calling for result wheneveri click

}))


function genratecomputerchoice(){
    const randomnumber = Math.floor(Math.random()*3)+1 // 3 ki jgh possiblechoices.length bhi kr skte h

    if(randomnumber==1){
        computerchoice='rock'
    }
    if(randomnumber==2){
        computerchoice='scissors'
    }
    if(randomnumber==3){
        computerchoice='paper'
    }

    computerchoiceDisplay.innerHTML=computerchoice

}
 function getresult(){
  if(computerchoice==userchoice){
    result='its a draw'
  }
  if(computerchoice=='rock'&& userchoice=='paper'){
    result='you win'
  }
  if(computerchoice=='rock'&& userchoice=='scissors'){
    result='you lost'
  }
  if(computerchoice=='paper'&& userchoice=='scissors'){
    result='you win'
  }
  if(computerchoice=='paper'&& userchoice=='rock'){
    result='you lost'
  }
  if(computerchoice=='scissors'&& userchoice=='rock'){
    result='you win'
  }
  if(computerchoice=='scissors'&& userchoice=='paper'){
    result='you lose'
  }

resultDisplay.innerHTML=result

 }