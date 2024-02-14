
var a1=1
function inc10(){
    a1++
    document.getElementById('greenvalue').innerHTML=a1
    document.getElementById('greenmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('onevalue').innerHTML=a1
    document.getElementById('onemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('redvalue').innerHTML=a1
    document.getElementById('redmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('violetvalue').innerHTML=a1
    document.getElementById('violetmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('twovalue').innerHTML=a1
    document.getElementById('twomoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('threevalue').innerHTML=a1
    document.getElementById('threemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fourvalue').innerHTML=a1
    document.getElementById('fourmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fivevalue').innerHTML=a1
    document.getElementById('fivemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sixvalue').innerHTML=a1
    document.getElementById('sixmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sevenvalue').innerHTML=a1
    document.getElementById('sevenmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('eightvalue').innerHTML=a1
    document.getElementById('eightmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('ninevalue').innerHTML=a1
    document.getElementById('ninemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
    
    document.getElementById('zerovalue').innerHTML=a1
    document.getElementById('zeromoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
}  


function dec10(){
    if(a1>=2){
       
        a1--
    document.getElementById('greenvalue').innerHTML=a1
    document.getElementById('greenmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('onevalue').innerHTML=a1
    document.getElementById('onemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('redvalue').innerHTML=a1
    document.getElementById('redmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('violetvalue').innerHTML=a1
    document.getElementById('violetmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('twovalue').innerHTML=a1
    document.getElementById('twomoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('threevalue').innerHTML=a1
    document.getElementById('threemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fourvalue').innerHTML=a1
    document.getElementById('fourmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fivevalue').innerHTML=a1
    document.getElementById('fivemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sixvalue').innerHTML=a1
    document.getElementById('sixmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sevenvalue').innerHTML=a1
    document.getElementById('sevenmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('eightvalue').innerHTML=a1
    document.getElementById('eightmoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('ninevalue').innerHTML=a1
    document.getElementById('ninemoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
    
    document.getElementById('zerovalue').innerHTML=a1
    document.getElementById('zeromoney').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*10}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
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
    document.getElementById('greenmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('onevalue1').innerHTML=a1
    document.getElementById('onemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('redvalue1').innerHTML=a1
    document.getElementById('redmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('violetvalue1').innerHTML=a1
    document.getElementById('violetmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('twovalue1').innerHTML=a1
    document.getElementById('twomoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('threevalue1').innerHTML=a1
    document.getElementById('threemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fourvalue1').innerHTML=a1
    document.getElementById('fourmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fivevalue1').innerHTML=a1
    document.getElementById('fivemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sixvalue1').innerHTML=a1
    document.getElementById('sixmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sevenvalue1').innerHTML=a1
    document.getElementById('sevenmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('eightvalue1').innerHTML=a1
    document.getElementById('eightmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('ninevalue1').innerHTML=a1
    document.getElementById('ninemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
    
    document.getElementById('zerovalue1').innerHTML=a1
    document.getElementById('zeromoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
}  


function dec100(){
    if(a1>=2){
       
        a1--
    document.getElementById('greenvalue1').innerHTML=a1
    document.getElementById('greenmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('onevalue1').innerHTML=a1
    document.getElementById('onemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('redvalue1').innerHTML=a1
    document.getElementById('redmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('violetvalue1').innerHTML=a1
    document.getElementById('violetmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('twovalue1').innerHTML=a1
    document.getElementById('twomoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('threevalue1').innerHTML=a1
    document.getElementById('threemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fourvalue1').innerHTML=a1
    document.getElementById('fourmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('fivevalue1').innerHTML=a1
    document.getElementById('fivemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sixvalue1').innerHTML=a1
    document.getElementById('sixmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('sevenvalue1').innerHTML=a1
    document.getElementById('sevenmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('eightvalue1').innerHTML=a1
    document.getElementById('eightmoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`

    document.getElementById('ninevalue1').innerHTML=a1
    document.getElementById('ninemoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
    
    document.getElementById('zerovalue1').innerHTML=a1
    document.getElementById('zeromoney1').innerHTML=`<input type="tel" name="contractmoney" disabled value="${a1*100}" id="" style="width: 10%; border: none; text-align: center; outline: none;">`
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



var a1=1
function inc1000(){
    a1++
    document.getElementById('greenvalue2').innerHTML=a1
    document.getElementById('greenmoney2').innerHTML=a1*1000

    document.getElementById('onevalue2').innerHTML=a1
    document.getElementById('onemoney2').innerHTML=a1*1000

    document.getElementById('redvalue2').innerHTML=a1
    document.getElementById('redmoney2').innerHTML=a1*1000

    document.getElementById('violetvalue2').innerHTML=a1
    document.getElementById('violetmoney2').innerHTML=a1*1000

    document.getElementById('twovalue2').innerHTML=a1
    document.getElementById('twomoney2').innerHTML=a1*1000

    document.getElementById('threevalue2').innerHTML=a1
    document.getElementById('threemoney2').innerHTML=a1*1000

    document.getElementById('fourvalue2').innerHTML=a1
    document.getElementById('fourmoney2').innerHTML=a1*1000

    document.getElementById('fivevalue2').innerHTML=a1
    document.getElementById('fivemoney2').innerHTML=a1*1000

    document.getElementById('sixvalue2').innerHTML=a1
    document.getElementById('sixmoney2').innerHTML=a1*1000

    document.getElementById('sevenvalue2').innerHTML=a1
    document.getElementById('sevenmoney2').innerHTML=a1*1000

    document.getElementById('eightvalue2').innerHTML=a1
    document.getElementById('eightmoney2').innerHTML=a1*1000

    document.getElementById('ninevalue2').innerHTML=a1
    document.getElementById('ninemoney2').innerHTML=a1*1000
    
    document.getElementById('zerovalue2').innerHTML=a1
    document.getElementById('zeromoney2').innerHTML=a1*1000
}  


function dec1000(){
    if(a1>=2){
       
        a1--
    document.getElementById('greenvalue2').innerHTML=a1
    document.getElementById('greenmoney2').innerHTML=a1*1000

    document.getElementById('onevalue2').innerHTML=a1
    document.getElementById('onemoney2').innerHTML=a1*1000

    document.getElementById('redvalue2').innerHTML=a1
    document.getElementById('redmoney2').innerHTML=a1*1000

    document.getElementById('violetvalue2').innerHTML=a1
    document.getElementById('violetmoney2').innerHTML=a1*1000

    document.getElementById('twovalue2').innerHTML=a1
    document.getElementById('twomoney2').innerHTML=a1*1000

    document.getElementById('threevalue2').innerHTML=a1
    document.getElementById('threemoney2').innerHTML=a1*1000

    document.getElementById('fourvalue2').innerHTML=a1
    document.getElementById('fourmoney2').innerHTML=a1*1000

    document.getElementById('fivevalue2').innerHTML=a1
    document.getElementById('fivemoney2').innerHTML=a1*1000

    document.getElementById('sixvalue2').innerHTML=a1
    document.getElementById('sixmoney2').innerHTML=a1*1000

    document.getElementById('sevenvalue2').innerHTML=a1
    document.getElementById('sevenmoney2').innerHTML=a1*1000

    document.getElementById('eightvalue2').innerHTML=a1
    document.getElementById('eightmoney2').innerHTML=a1*1000

    document.getElementById('ninevalue2').innerHTML=a1
    document.getElementById('ninemoney2').innerHTML=a1*1000
    
    document.getElementById('zerovalue2').innerHTML=a1
    document.getElementById('zeromoney2').innerHTML=a1*1000
    }
    else{
        document.getElementById('greenvalue2').innerHTML=1
        document.getElementById('redvalue2').innerHTML=1
        document.getElementById('violetvalue2').innerHTML=1
        document.getElementById('onevalue2').innerHTML=1
        document.getElementById('twovalue2').innerHTML=1
        document.getElementById('threevalue2').innerHTML=1
        document.getElementById('fourvalue2').innerHTML=1
        document.getElementById('fivevalue2').innerHTML=1
        document.getElementById('sixvalue2').innerHTML=1
        document.getElementById('sevenvalue2').innerHTML=1
        document.getElementById('eightvalue2').innerHTML=1
        document.getElementById('ninevalue2').innerHTML=1
        document.getElementById('zerovalue2').innerHTML=1
    }
}



var a1=1
function inc10000(){
    a1++
    document.getElementById('greenvalue3').innerHTML=a1
    document.getElementById('greenmoney3').innerHTML=a1*10000

    document.getElementById('onevalue3').innerHTML=a1
    document.getElementById('onemoney3').innerHTML=a1*10000

    document.getElementById('redvalue3').innerHTML=a1
    document.getElementById('redmoney3').innerHTML=a1*10000

    document.getElementById('violetvalue3').innerHTML=a1
    document.getElementById('violetmoney3').innerHTML=a1*10000

    document.getElementById('twovalue3').innerHTML=a1
    document.getElementById('twomoney3').innerHTML=a1*10000

    document.getElementById('threevalue3').innerHTML=a1
    document.getElementById('threemoney3').innerHTML=a1*10000

    document.getElementById('fourvalue3').innerHTML=a1
    document.getElementById('fourmoney3').innerHTML=a1*10000

    document.getElementById('fivevalue3').innerHTML=a1
    document.getElementById('fivemoney3').innerHTML=a1*10000

    document.getElementById('sixvalue3').innerHTML=a1
    document.getElementById('sixmoney3').innerHTML=a1*10000

    document.getElementById('sevenvalue3').innerHTML=a1
    document.getElementById('sevenmoney3').innerHTML=a1*10000

    document.getElementById('eightvalue3').innerHTML=a1
    document.getElementById('eightmoney3').innerHTML=a1*10000

    document.getElementById('ninevalue3').innerHTML=a1
    document.getElementById('ninemoney3').innerHTML=a1*10000
    
    document.getElementById('zerovalue3').innerHTML=a1
    document.getElementById('zeromoney3').innerHTML=a1*10000
}  


function dec10000(){
    if(a1>=2){
       
        a1--
    document.getElementById('greenvalue3').innerHTML=a1
    document.getElementById('greenmoney3').innerHTML=a1*10000

    document.getElementById('onevalue3').innerHTML=a1
    document.getElementById('onemoney3').innerHTML=a1*10000

    document.getElementById('redvalue3').innerHTML=a1
    document.getElementById('redmoney3').innerHTML=a1*10000

    document.getElementById('violetvalue3').innerHTML=a1
    document.getElementById('violetmoney3').innerHTML=a1*10000

    document.getElementById('twovalue3').innerHTML=a1
    document.getElementById('twomoney3').innerHTML=a1*10000

    document.getElementById('threevalue3').innerHTML=a1
    document.getElementById('threemoney3').innerHTML=a1*10000

    document.getElementById('fourvalue3').innerHTML=a1
    document.getElementById('fourmoney3').innerHTML=a1*10000

    document.getElementById('fivevalue3').innerHTML=a1
    document.getElementById('fivemoney3').innerHTML=a1*10000

    document.getElementById('sixvalue3').innerHTML=a1
    document.getElementById('sixmoney3').innerHTML=a1*10000

    document.getElementById('sevenvalue3').innerHTML=a1
    document.getElementById('sevenmoney3').innerHTML=a1*10000

    document.getElementById('eightvalue3').innerHTML=a1
    document.getElementById('eightmoney3').innerHTML=a1*10000

    document.getElementById('ninevalue3').innerHTML=a1
    document.getElementById('ninemoney3').innerHTML=a1*10000
    
    document.getElementById('zerovalue3').innerHTML=a1
    document.getElementById('zeromoney3').innerHTML=a1*10000
    }
    else{
        document.getElementById('greenvalue3').innerHTML=1
        document.getElementById('redvalue3').innerHTML=1
        document.getElementById('violetvalue3').innerHTML=1
        document.getElementById('onevalue3').innerHTML=1
        document.getElementById('twovalue3').innerHTML=1
        document.getElementById('threevalue3').innerHTML=1
        document.getElementById('fourvalue3').innerHTML=1
        document.getElementById('fivevalue3').innerHTML=1
        document.getElementById('sixvalue3').innerHTML=1
        document.getElementById('sevenvalue3').innerHTML=1
        document.getElementById('eightvalue3').innerHTML=1
        document.getElementById('ninevalue3').innerHTML=1
        document.getElementById('zerovalue3').innerHTML=1
    }
}

function btnclik(){
    var outt=document.querySelector('.outt')
    outt.classList.remove('hide')    
}

function btnclik1(){
    var outt=document.querySelector('.outt1')
     outt.classList.remove('hide')
}

function btnclik2(){
    var outt=document.querySelector('.outt2')
     outt.classList.remove('hide')
}

function btnclik3(){
    var outt=document.querySelector('.outt3')
     outt.classList.remove('hide')
}

function btnclik4(){
    var outt=document.querySelector('.outt4')
     outt.classList.remove('hide')
}

function btnclik5(){
    var outt=document.querySelector('.outt5')
     outt.classList.remove('hide')
}

function btnclik6(){
    var outt=document.querySelector('.outt6')
     outt.classList.remove('hide')
}

function btnclik7(){
    var outt=document.querySelector('.outt7')
     outt.classList.remove('hide')
}
//1
function btnclik8(){
    var outt=document.querySelector('.outt7')
     outt.classList.remove('hide')
}

function btnclik9(){
    var outt=document.querySelector('.outt9')
     outt.classList.remove('hide')
}

function btnclik10(){
    var outt=document.querySelector('.outt10')
     outt.classList.remove('hide')
}

function btnclik11(){
    var outt=document.querySelector('.outt11')
     outt.classList.remove('hide')
}
function btnclik12(){
    var outt=document.querySelector('.outt12')
     outt.classList.remove('hide')
}
function btnclik13(){
    var outt=document.querySelector('.outt13')
     outt.classList.remove('hide')
}
function btnclik14(){
    var outt=document.querySelector('.outt14')
     outt.classList.remove('hide')
}
function btnclik15(){
    var outt=document.querySelector('.outt15')
     outt.classList.remove('hide')
}
