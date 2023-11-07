
var min=2
var sec=60

var minutes=min*60000
var seconds=sec*1000

var settime=minutes+seconds
var starttime=Date.now()
var futuretime=starttime+settime

var timer=document.getElementById('timer')
var btn=document.querySelector('.btn')
const timerloop=setInterval(countDowtimer)

countDowtimer()

function countDowtimer(){
    const currentime=Date.now()
    const remainingtime=futuretime-currentime

    const mins=Math.floor((remainingtime/(1000*60))%60)
    const secs=Math.floor((remainingtime/1000)%60)

    timer.innerHTML=`                
    <p> <i class="fa-solid fa-clock" style="font-size:18px"></i> &nbsp;<strong>Countdown:</strong></p>
    <center>
    <span class="minutes parspans" >0${mins}</span> :
    <span class="seconds parspans">${secs}</span>
    </center>
    `


    if(remainingtime<0){
       location.href=''     
        timer.innerHTML=`<p><i class="fa-solid fa-clock"></i>Countdown:</p>
        <span class="minutes">00</span> :
        <span class="seconds">00</span>`
    }
}


var a=1
function inc10(){
    a++
    //alert(a)
    document.getElementById('greenvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('greenmoney').innerHTML=a*10

    document.getElementById('onevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('onemoney').innerHTML=a*10

    document.getElementById('redvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('redmoney').innerHTML=a*10

    document.getElementById('violetvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('violetmoney').innerHTML=a*10

    document.getElementById('twovalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('twomoney').innerHTML=a*10

    document.getElementById('threevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('threemoney').innerHTML=a*10

    document.getElementById('fourvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('fourmoney').innerHTML=a*10

    document.getElementById('fivevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('fivemoney').innerHTML=a*10

    document.getElementById('sixvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('sixmoney').innerHTML=a*10

    document.getElementById('sevenvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('sevenmoney').innerHTML=a*10

    document.getElementById('eightvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('eightmoney').innerHTML=a*10

    document.getElementById('ninevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('ninemoney').innerHTML=a*10
    
    document.getElementById('zerovalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
    document.getElementById('zeromoney').innerHTML=a*10
}   

function dec10(){
    if(a>=2){
        a--
        document.getElementById('greenvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('greenmoney').innerHTML=a*10

        document.getElementById('onevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('onemoney').innerHTML=a*10

        document.getElementById('redvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('redmoney').innerHTML=a*10

        document.getElementById('violetvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('violetmoney').innerHTML=a*10

        document.getElementById('twovalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('twomoney').innerHTML=a*10
    
        document.getElementById('threevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('threemoney').innerHTML=a*10
    
        document.getElementById('fourvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('fourmoney').innerHTML=a*10
    
        document.getElementById('fivevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('fivemoney').innerHTML=a*10
    
        document.getElementById('sixvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('sixmoney').innerHTML=a*10
    
        document.getElementById('sevenvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('sevenmoney').innerHTML=a*10
    
        document.getElementById('eightvalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('eightmoney').innerHTML=a*10
    
        document.getElementById('ninevalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('ninemoney').innerHTML=a*10
        
        document.getElementById('zerovalue').innerHTML=`<input type="tel" name=""  value="${a}" id="" style="border: none; text-align: center; outline: none;"> `
        document.getElementById('zeromoney').innerHTML=a*10
    }
    else{
        document.getElementById('greenvalue').innerHTML=1
        document.getElementById('redvalue').innerHTML=1
        document.getElementById('violetvalue').innerHTML=1
        document.getElementById('onevalue').innerHTML=1
        document.getElementById('twovalue').innerHTML=1
        document.getElementById('threevalue').innerHTML=1
        document.getElementById('fourvalue').innerHTML=1
        document.getElementById('fivevalue').innerHTML=1
        document.getElementById('sixvalue').innerHTML=1
        document.getElementById('sevenvalue').innerHTML=1
        document.getElementById('eightvalue').innerHTML=1
        document.getElementById('ninevalue').innerHTML=1
        document.getElementById('zerovalue').innerHTML=1
    }
}

var a1=1
function inc100(){
    a1++
    document.getElementById('greenvalue1').innerHTML=a1
    document.getElementById('greenmoney1').innerHTML=a1*100

    document.getElementById('onevalue1').innerHTML=a1
    document.getElementById('onemoney1').innerHTML=a1*100

    document.getElementById('redvalue1').innerHTML=a1
    document.getElementById('redmoney1').innerHTML=a1*100

    document.getElementById('violetvalue1').innerHTML=a1
    document.getElementById('violetmoney1').innerHTML=a1*100

    document.getElementById('twovalue1').innerHTML=a1
    document.getElementById('twomoney1').innerHTML=a1*100

    document.getElementById('threevalue1').innerHTML=a1
    document.getElementById('threemoney1').innerHTML=a1*100

    document.getElementById('fourvalue1').innerHTML=a1
    document.getElementById('fourmoney1').innerHTML=a1*100

    document.getElementById('fivevalue1').innerHTML=a1
    document.getElementById('fivemoney1').innerHTML=a1*100

    document.getElementById('sixvalue1').innerHTML=a1
    document.getElementById('sixmoney1').innerHTML=a1*100

    document.getElementById('sevenvalue1').innerHTML=a1
    document.getElementById('sevenmoney1').innerHTML=a1*100

    document.getElementById('eightvalue1').innerHTML=a1
    document.getElementById('eightmoney1').innerHTML=a1*100

    document.getElementById('ninevalue1').innerHTML=a1
    document.getElementById('ninemoney1').innerHTML=a1*100
    
    document.getElementById('zerovalue1').innerHTML=a1
    document.getElementById('zeromoney1').innerHTML=a1*100
}  


function dec100(){
    document.getElementById('greenvalue').innerHTML=a1
    if(a1>=2){
       
        a1--
    document.getElementById('greenvalue1').innerHTML=a1
    document.getElementById('greenmoney1').innerHTML=a1*100

    document.getElementById('onevalue1').innerHTML=a1
    document.getElementById('onemoney1').innerHTML=a1*100

    document.getElementById('redvalue1').innerHTML=a1
    document.getElementById('redmoney1').innerHTML=a1*100

    document.getElementById('violetvalue1').innerHTML=a1
    document.getElementById('violetmoney1').innerHTML=a1*100

    document.getElementById('twovalue1').innerHTML=a1
    document.getElementById('twomoney1').innerHTML=a1*100

    document.getElementById('threevalue1').innerHTML=a1
    document.getElementById('threemoney1').innerHTML=a1*100

    document.getElementById('fourvalue1').innerHTML=a1
    document.getElementById('fourmoney1').innerHTML=a1*100

    document.getElementById('fivevalue1').innerHTML=a1
    document.getElementById('fivemoney1').innerHTML=a1*100

    document.getElementById('sixvalue1').innerHTML=a1
    document.getElementById('sixmoney1').innerHTML=a1*100

    document.getElementById('sevenvalue1').innerHTML=a1
    document.getElementById('sevenmoney1').innerHTML=a1*100

    document.getElementById('eightvalue1').innerHTML=a1
    document.getElementById('eightmoney1').innerHTML=a1*100

    document.getElementById('ninevalue1').innerHTML=a1
    document.getElementById('ninemoney1').innerHTML=a1*100
    
    document.getElementById('zerovalue1').innerHTML=a1
    document.getElementById('zeromoney1').innerHTML=a1*100
    }
    else{
        document.getElementById('greenvalue1').innerHTML=1
        document.getElementById('redvalue1').innerHTML=1
        document.getElementById('violetvalue1').innerHTML=1
        document.getElementById('onevalue1').innerHTML=1
        document.getElementById('twovalue1').innerHTML=1
        document.getElementById('threevalue1').innerHTML=1
        document.getElementById('fourvalue1').innerHTML=1
        document.getElementById('fivevalue1').innerHTML=1
        document.getElementById('sixvalue1').innerHTML=1
        document.getElementById('sevenvalue1').innerHTML=1
        document.getElementById('eightvalue1').innerHTML=1
        document.getElementById('ninevalue1').innerHTML=1
        document.getElementById('zerovalue1').innerHTML=1
    }
}
