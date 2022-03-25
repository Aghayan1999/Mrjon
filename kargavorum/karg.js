let rad=document.getElementById('rad');
let kapsul=document.getElementById('kapsul');
let i=0
rad.addEventListener('click',foo);

function foo(){
    i++
    if(i%2==1){
        kapsul.style.background='#FFFFFF4A'
        kapsul.style.justifyContent='flex-start'
        rad.style.background='white'
    }

    else{
        kapsul.style.background='white'
        kapsul.style.justifyContent='flex-end'
        rad.style.background='#5CBE07'
    }
}


let ampula=document.getElementById('ampula');
let whr=document.getElementById('whr');
whr.addEventListener('click',func);
let a=0;
function func(){
    a++
    if(a%2==1){
        ampula.style.justifyContent='flex-end';
        ampula.style.background='white';
        whr.style.background='#5CBE07';
    }

    else{
        ampula.style.justifyContent='flex-start';
        ampula.style.background='#FFFFFF4A';
        whr.style.background='white';
    }
}