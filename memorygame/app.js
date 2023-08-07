const cardarray=[
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    },
    {
        name:'fries',
        img:'images/fries.png',
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png',
    },
    {
        name:'hotdog',
        img:'images/hotdog.png',
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png',
    },
    {
        name:'milkshake',
        img:'images/milkshake.png',
    },
    {
        name:'pizza',
        img:'images/pizza.png',
    }
]


cardarray.sort(()=>0.5-Math.random())    //it'll sort in random because random hi ani chiye!!


const gridDisplay=document.querySelector('#grid')
const resultDispaly=document.querySelector('#result')
let cardChoosen=[]
let cardChoosenIds=[]
const cardwon=[]

function createBoard(){
  for(let i=0;i<cardarray.length;i++){
    const card=document.createElement('img') // image name ka element bna rh h usk card name k var m save kr rha h
    card.setAttribute('src','images/blank.png')  //card ke attributes h ye 
    card.setAttribute('data-id',i)               //card k attributes
   card.addEventListener('click',flipcard)
    gridDisplay.appendChild(card)             //div m ek image add ho rhi h
  }

}
createBoard()
function checkMatch(){
    const cards=document.querySelectorAll('img')
    const optiononeid=cardChoosenIds[0]
    const optiontwoid=cardChoosenIds[1]
 if(optiononeid==optiontwoid){
        cards[optiononeid].setAttribute('src','images/blank.png')
        cards[optiontwoid].setAttribute('src','images/white.png')
    alert('you have clickedthe same images!')
 }
    if(cardChoosen[0]==cardChoosen[1]){
        alert('you found amatch')
        cards[optiononeid].setAttribute('src','images/white.png')
        cards[optiontwoid].setAttribute('src','images/white.png')
        cards[optiononeid].removeEventListener('click',flipcard)
        cards[optiontwoid].removeEventListener('click',flipcard)
        cardwon.push(cardChoosen)
    } else{
        cards[optiononeid].setAttribute('src','images/blank.png')
        cards[optiontwoid].setAttribute('src','images/blank.png')
        alert('sorry try again!!!')

    }
    resultDispaly.innerHTML=cardwon.length
    cardChoosen=[]
    cardChoosenIds=[]

    if(cardwon.length==cardarray.length/2){
      resultDispaly.innerHTML='congraulations you found them all!!'
    }

}
function flipcard(){
    const cardId=this.getAttribute('data-id')
    
    cardChoosen.push(cardarray[cardId].name)
    cardChoosenIds.push(cardId)
    this.setAttribute('src',cardarray[cardId].img)
    if(cardChoosen.length==2){
        setTimeout(checkMatch,500)
    }


}



















