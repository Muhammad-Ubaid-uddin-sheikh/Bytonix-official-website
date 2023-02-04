let main = document.querySelector('.main')
let navbar= document.querySelector('.navbar-div')
let hambuger = document.querySelector('#hamburger')
let crossHambuger = document.querySelector('.colm-hambuger-nad-2nd')

crossHambuger.addEventListener('click',()=>{
// document.querySelector("#hamburger-cross").style.transform ='translateX(-100%)'
document.querySelector('.arifical-navbar-').style.transform ='translateX(-170%)'
})

hambuger.addEventListener('click',()=>{
  // hambuger.style.transform ='translateX(0%)'
  document.querySelector('.arifical-navbar-').style.transform ='translateX(0%)'
})
document.querySelector(".popup .closed-btn").addEventListener('click',()=>{
  document.querySelector('.popup').classList.remove('active')
})
setTimeout(()=>{
  document.querySelector('.popup').classList.add('active')
},5000)

let counter = 1;
setInterval(()=>{
    document.getElementById('radio' + counter).checked =  true;
    counter++;
    if(counter > 4){
        counter = 1
    }
},5000);

let loader = document.querySelector('.preloder')
window.addEventListener('load',()=>{
  loader.style.display = 'none'
})

