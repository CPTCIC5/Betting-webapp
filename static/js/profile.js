var profile=document.querySelector('.card.profile')
var orders=document.querySelector('.orders')
var about=document.querySelector('.about')
var cs=document.querySelector('.cs')
var profile1=document.querySelector('.card.profile1')
var orders1=document.querySelector('.orders1')
var about1=document.querySelector('.about1')
var cs1=document.querySelector('.cs1')

var profilecon=document.querySelector('.profilecon')
var ordercon=document.querySelector('.ordercon')
var cscon=document.querySelector('.cscon')
var aboutcon=document.querySelector('.aboutcon')

profile.addEventListener('click',()=>{
    profile.classList.add('active')
    orders.classList.remove('active')
    about.classList.remove('active')
    cs.classList.remove('active')
    profilecon.classList.remove('hide')
    ordercon.classList.add('hide')
    cscon.classList.add('hide')
    aboutcon.classList.add('hide')
})

orders.addEventListener('click',()=>{
    orders.classList.add('active')
    profile.classList.remove('active')
    about.classList.remove('active')
    cs.classList.remove('active')
    profilecon.classList.add('hide')
    ordercon.classList.remove('hide')
    cscon.classList.add('hide')
    aboutcon.classList.add('hide')
})


about.addEventListener('click',()=>{
    about.classList.add('active')
    orders.classList.remove('active')
    profile.classList.remove('active')
    cs.classList.remove('active')
    profilecon.classList.add('hide')
    ordercon.classList.add('hide')
    cscon.classList.add('hide')
    aboutcon.classList.remove('hide')
})


cs.addEventListener('click',()=>{
    cs.classList.add('active')
    orders.classList.remove('active')
    about.classList.remove('active')
    profile.classList.remove('active')
    profilecon.classList.add('hide')
    ordercon.classList.add('hide')
    cscon.classList.remove('hide')
    aboutcon.classList.add('hide')
})



profile1.addEventListener('click',()=>{
    profile1.classList.add('active')
    orders1.classList.remove('active')
    about1.classList.remove('active')
    cs1.classList.remove('active')
    profilecon.classList.remove('hide')
    ordercon.classList.add('hide')
    cscon.classList.add('hide')
    aboutcon.classList.add('hide')
})

orders1.addEventListener('click',()=>{
    orders1.classList.add('active')
    profile1.classList.remove('active')
    about1.classList.remove('active')
    cs1.classList.remove('active')
    profilecon.classList.add('hide')
    ordercon.classList.remove('hide')
    profilecon.classList.add('hide')
    cscon.classList.add('hide')
    aboutcon.classList.add('hide')
})


about1.addEventListener('click',()=>{
    about1.classList.add('active')
    orders1.classList.remove('active')
    profile1.classList.remove('active')
    cs1.classList.remove('active')
    profilecon.classList.add('hide')
    ordercon.classList.add('hide')
    cscon.classList.add('hide')
    aboutcon.classList.remove('hide')
})


cs1.addEventListener('click',()=>{
    cs1.classList.add('active')
    orders1.classList.remove('active')
    about1.classList.remove('active')
    profile1.classList.remove('active')
    profilecon.classList.add('hide')
    ordercon.classList.add('hide')
    cscon.classList.remove('hide')
    aboutcon.classList.add('hide')
})

