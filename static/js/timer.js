document.addEventListener("DOMContentLoaded", function() {
    var timerElement = document.getElementById("timer");
    var count_timer = 180 -parseInt(timerElement.dataset.startTime); // Fetch the start time from the data attribute
    alert(count_timer)

    function countDownTimer() {
        var minutes = Math.floor(count_timer / 60); // Calculate minutes
        var seconds = count_timer % 60; // Calculate remaining seconds
        
        if (seconds < 10) {
            seconds = "0" + seconds; // Add leading zero if seconds is less than 10
        }
        if (minutes < 10) {
            minutes = "0" + minutes; // Add leading zero if minutes is less than 10
        }

        timerElement.innerHTML = `<p><i class="fa-solid fa-clock"></i>&nbsp;Countdown:</p>
                                   <center> <span class="minutes">${minutes}</span> :
                                   <span class="seconds">${seconds}</span><center>`;
        
        if (count_timer <= 30) {
            var elems = document.getElementsByClassName("pbtn");
            for (var i = 0; i < elems.length; i++) {
                elems[i].disabled = true;
                elems[i].style.backgroundColor = "gray"; // Change the background color to gray
                elems[i].style.color = "white"; // Change the text color to white
            }
        }
        
        if (count_timer <= 0) {
            localStorage.removeItem("count_timer");
            document.getElementById('confbtn').click();
        } else {
            count_timer = count_timer - 1;
            setTimeout(countDownTimer, 1000);
        }
    }

    setTimeout(countDownTimer, 1000);
});

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

function myfunc(){
    var loader=document.querySelector('.loader')
    var cof=document.querySelector('.container-fluid')
    var car=document.querySelector('.carousel')
    cof.classList.remove('hide')
    car.classList.remove('hide')
    loader.classList.add('hide')
  }

  