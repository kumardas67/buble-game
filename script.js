let timer = 5;
let score = 0;
let hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function getNewHit(){
     hitrn = Math.floor(Math.random()*10 +1);
    document.querySelector('#hitval').textContent = hitrn;
}

function bubble(){
    let clutter = ''

    for (let i = 0; i <= 168; i++) {
        let rn = Math.floor(Math.random()*10 + 1)
        clutter += `<div class="bubble">${rn}</div>`;
        
    }
    document.querySelector('#panel-bottom').innerHTML = clutter;
}


function runTimer(){
    let timerint = setInterval(() => {

        if(timer > 0){
        timer --;
            document.querySelector('#timerval').textContent = timer;
        }else{
            document.querySelector('#panel-bottom').innerHTML = 'Game Over'
            clearInterval(timerint)
        }
    }, 1000);
}

document.querySelector('#panel-bottom').addEventListener('click',function(details){
   let clickedNum = (Number(details.target.textContent));

   if(clickedNum === hitrn){
    increaseScore()
    bubble()
    getNewHit()
   }
})


runTimer()
bubble()
getNewHit()




