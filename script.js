var timer = 60;
var score = 0;
var hitrn=0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
  //document.getElementById('scoreval').textContent=score;
}

function getNewHit() {
  hitrn= Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 119; i++) {
    var RanNo = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${RanNo}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;
      /**
       The innerHTML property expects an HTML string, so when you assign a string like '<h1>Game Over</h1>', 
       the browser parses that string as actual HTML.
In this case, the string '<h1>Game Over</h1>' is interpreted by the browser as an HTML heading element (<h1>) with the text "Game Over".
       */
    }
  }, 1000);
}

document
  .querySelector("#pbtm")
  .addEventListener("click", function (details) {
    //console.log(details.target); //gives the target value-- whole div of bubble
   // console.log(details.target.textContent); //gives the target value in the form of string
   var clickedNum=Number(details.target.textContent); //gives the target value in the form of number
  if(clickedNum===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();

  }  
});
runTimer();
makeBubble();
getNewHit();



