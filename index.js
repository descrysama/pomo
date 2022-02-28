let buttonAdd = document.getElementById('addpomo');
let spriteSelect = document.getElementById('imagecontent');
let workTime = 14;
let breakTime = 4;
let sec = 60;
let stopwatch = false;
let mybreak = false;
let thecycle = 0;

function startWork() {
  if (stopwatch == false) {
    stopwatch = true;
    min = workTime;
    time = setInterval(cycle, 10);
  }
  document.getElementById('pausebutton').disabled = false;
  document.getElementById('startbutton').disabled = true;
  let img = document.createElement('img');
  img.src = "demon-slayer.gif";
  img.setAttribute('id', 'myimg');
  img.style.border = 'none';
  document.getElementById('imagecontent').innerHTML = "";
  document.getElementById('imagecontent').appendChild(img)
}


function stop() {
  clearInterval(time)
  if (mybreak == true) {
    breakTime = min;
  } else if (mybreak == false) {
    workTime = min;
  }
  stopwatch = false;
  document.getElementById('pausebutton').disabled = true
  document.getElementById('startbutton').disabled = false
  let img = document.createElement('img');
  img.src = "breaktime.png";
  img.setAttribute('id', 'myimg');
  img.style.border = 'none';
  document.getElementById('imagecontent').innerHTML = "";
  document.getElementById('imagecontent').appendChild(img)
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
    workTime = 14;
    min = workTime;
    sec = 60;
    mybreak = false
    thecycle++;
  }

  document.getElementById('time').innerHTML = min+":"+sec;
  document.getElementById('title').innerHTML = min+":"+sec;
}

document.getElementById('myimg').addEventListener('click mousemove', function() {
  document.getElementById('myimg')
})
