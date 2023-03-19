// set initial variables fro timer
var timer = false;
var sec = 0;
var min = 0;
var hr = 0;
var audio = new Audio('1.mp3');
var audio2 = new Audio('recycle.wav');
//  start function which will  start the timer by calling stopwatch function
 function start(){
    if (timer == false){
        timer = true;
        audio.loop = true;
        audio.play();
        stopwatch();
        
    }
 }
 
// stopwatch function which will create the stopwatch 
 function stopwatch(){
    if(timer == true){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec+1;
// when 60 seconds are completed second again starts from zero by adding 1 to minute
        if(sec==60){
            min = min +1;
            sec = 0;
        }
// when 60 minutes are completed min and sec again starts from zero by adding 1 to hour
        if(min==60){
            hr = hr +1;
            sec = 0;
            min = 0;
        }
        if(sec<10){
            sec = "0" + sec;
        }

        if(min<10){
            min = "0" + min;
        }

        if(hr<10){
            hr = "0" + hr;
        }

        document.getElementById("hr").innerHTML = hr;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
        // this function will allow to run stopwatch every second
        setTimeout("stopwatch()", 1000)
    }
 }
 
//  by using stop function timer will stop by making the timer false
function stop(){
     timer = false;
     audio.pause();
     
 }

//  by using reset function timer reset to 00:00:00 by making running timer false
 function reset(){
    timer = false;
    audio.pause();
    audio2.play();
    sec = 0;
    min = 0;
    hr = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
        
 }


