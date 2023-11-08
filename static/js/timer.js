if(localStorage.getItem("count_timer")){
    var count_timer = localStorage.getItem("count_timer");
} else {
    var count_timer = 180;
}

var minutes = parseInt(count_timer/60);
var seconds = parseInt(count_timer%60);
function countDownTimer(){
    if(seconds < 10){
        seconds= "0"+ seconds ;
    }if(minutes < 10){
        minutes= "0"+ minutes ;
    }
    
    document.getElementById("timer").innerHTML = `<p><i class="fa-solid fa-clock"></i>&nbsp;Countdown:</p>
    <center> <span class="minutes">${minutes}</span> :
     <span class="seconds">${seconds}</span><center>`;
    if(count_timer <= 30){
        var elems = document.getElementsByClassName("pbtn");
        for (var i = 0; i < elems.length; i++) {
            console.log(elems[i])
            elems[i].disabled = true;
            elems[i].style.backgroundColor = "gray"; // Change the background color to gray
            elems[i].style.color = "white"; // Change the text color to white
        }

        
        
    }
  if(count_timer<=0){
   
    localStorage.clear("count_timer");
         location.href=''
  }
    else {
        count_timer = count_timer -1 ;
        minutes = parseInt(count_timer/60);
        seconds = parseInt(count_timer%60);
        localStorage.setItem("count_timer",count_timer);
        setTimeout("countDownTimer()",1000);
    }
}
setTimeout("countDownTimer()",1000);

// var min=2
// var sec=60

// var minutes=min*60000
// var seconds=sec*1000

// var settime=minutes+seconds
// var starttime=Date.now()
// var futuretime=starttime+settime

// var timer=document.getElementById('timer')
// var btn=document.querySelector('.btn')
// const timerloop=setInterval(countDowtimer)

// countDowtimer()

// function countDowtimer(){
//     const currentime=Date.now()
//     const remainingtime=futuretime-currentime

//     const mins=Math.floor((remainingtime/(1000*60))%60)
//     const secs=Math.floor((remainingtime/1000)%60)

//     timer.innerHTML=`                
//     <p> <i class="fa-solid fa-clock" style="font-size:18px"></i> &nbsp;<strong>Countdown:</strong></p>
//     <center>
//     <span class="minutes parspans" >0${mins}</span> :
//     <span class="seconds parspans">${secs}</span>
//     </center>
//     `


//     if(remainingtime<0){
//        location.href=''     
//         timer.innerHTML=`<p><i class="fa-solid fa-clock"></i>Countdown:</p>
//         <span class="minutes">00</span> :
//         <span class="seconds">00</span>`
//     }
// }

