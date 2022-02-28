let buttonAdd = document.getElementById('addpomo');
let spriteSelect = document.getElementById('imagecontent');
let workTime = 24;
let breakTime = 4;
let sec = 60;
let stopwatch = false;
let mybreak = false;
let thecycle = 0;

function startWork() {
  if (stopwatch == false) {
    stopwatch = true;
    min = workTime;
    time = setInterval(cycle, 1000);
  }

  document.getElementById('startbutton').disabled = true
  document.getElementById('pausebutton').disabled = false
  document.querySelector('#myimg').src = "demon-slayer.gif";

}


function stop() {
  clearInterval(time)
  if (mybreak == true) {
    breakTime = min;
  } else if (mybreak == false) {
    workTime = min;
  }
  stopwatch = false;
  document.getElementById('startbutton').disabled = false
  document.getElementById('pausebutton').disabled = true
  document.querySelector('#myimg').src = "breaktime.png";
}

function reset(){
  clearInterval(time)
  workTime = 24;
  breakTime = 4;
  sec = 60;
  stopwatch = false;
  document.getElementById('time').innerHTML = "00"+":"+"00";
  document.getElementById('title').innerHTML = "00"+":"+"00";
  document.getElementById('startbutton').disabled = false
  document.getElementById('pausebutton').disabled = false
}

function cycle() {
    sec = sec - 1;
  if (sec == 0) {
    min = min -1;
    sec = 60;
  }
  if (min == 0 && mybreak == false) {
    breakTime = 4
    min = breakTime;
    sec = 60;
    mybreak = true;
    thecycle++;
  } else if (min == 0 && mybreak == true){
    workTime = 24;
    min = workTime;
    sec = 60;
    mybreak = false
    thecycle++;
  }

  document.getElementById('time').innerHTML = min+":"+sec;
  document.getElementById('title').innerHTML = min+":"+sec;
}


document.body.addEventListener('dragover', (e)=> {
  document.getElementById('myimg').style.top = e.pageY-100+"px";
  document.getElementById('myimg').style.left = e.pageX-100+"px";
})