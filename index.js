let buttonAdd = document.getElementById('addpomo');
let spriteSelect = document.getElementById('imagecontent');
let workTime = 24;
let breakTime = 4;
let sec = 60;
let stopwatch = false;
let mybreak = false;
let startWorkingSound = new Audio('workingtime.mp3');
let startbreakSound = new Audio('breaktime.mp3');
startbreakSound.volume = 0.3

function startWork() {
  if (stopwatch == false) {
    stopwatch = true;
    min = workTime;
    time = setInterval(cycle, 1000);
    workingTimeBanner();
    startbreakSound.pause();
    startbreakSound.currentTime = 0;
    startWorkingSound.play();
  }

  document.getElementById('startbutton').disabled = true
  document.getElementById('pausebutton').disabled = false
  document.querySelector('#myimg').src = "demon-slayer.gif";

}


function stop() {
  if (stopwatch == true) {
    clearInterval(time)
    if (mybreak == true) {
      breakTime = min;
    } else if (mybreak == false) {
      workTime = min;
    }
    stopwatch = false;
    startWorkingSound.pause();
    startWorkingSound.currentTime = 0;
    startbreakSound.play()
    document.getElementById('startbutton').disabled = false
    document.getElementById('pausebutton').disabled = true
    document.querySelector('#myimg').src = "breaktime.png";
  }
}

function reset(){
  clearBanner();
  clearInterval(time)
  workTime = 24;
  breakTime = 4;
  sec = 60;
  stopwatch = false;
  document.getElementById('time').innerHTML = "00"+":"+"00";
  document.getElementById('title').innerHTML = "00"+":"+"00";
  document.querySelector('#myimg').src = "";
  document.getElementById('startbutton').disabled = false
  document.getElementById('pausebutton').disabled = false
}
function workingTimeBanner() {
  document.getElementById('status').innerHTML = '';
  let creatediv = document.createElement('div');
  let createh3 = document.createElement('h3');
  createh3.setAttribute('class', 'text-danger');
  createh3.textContent = 'Working Time';
  creatediv.setAttribute('class', 'background-danger');
  creatediv.append(createh3);
  document.getElementById('status').appendChild(creatediv);
}

function clearBanner() {
  document.getElementById('status').innerHTML = '';
}

function breakTimeBanner() {
  document.getElementById('status').innerHTML = '';
  let creatediv = document.createElement('div');
  let createh3 = document.createElement('h3');
  createh3.setAttribute('class', 'text-success');
  createh3.textContent = 'Break Time';
  creatediv.setAttribute('class', 'background-success');
  creatediv.append(createh3);
  document.getElementById('status').appendChild(creatediv);
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
    breakTimeBanner()
  } else if (min == 0 && mybreak == true){
    workTime = 24;
    min = workTime;
    sec = 60;
    mybreak = false;
    workingTimeBanner()
  }

  document.getElementById('time').innerHTML = min+":"+sec;
  document.getElementById('title').innerHTML = min+":"+sec;
}


document.body.addEventListener('dragover', (e)=> {
  document.getElementById('myimg').style.top = e.pageY-100+"px";
  document.getElementById('myimg').style.left = e.pageX-100+"px";
})