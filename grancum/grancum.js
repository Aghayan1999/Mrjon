
let search=document.getElementById('search')
let anun=document.getElementById('anun');
let azganun=document.getElementById('azganun');
let el=document.getElementById('el');
let par=document.getElementById('par');
let i=0
anun.style.outline='1px solid #7BCF0C'
anun.style.boxShadow='2px 2px 7px #7BCF0C'

anun.onclick=function(){
    anun.style.outline='1px solid #7BCF0C'
    anun.style.boxShadow='2px 2px 7px #7BCF0C'
    azganun.style.outline='1px solid white'
    azganun.style.boxShadow='2px 2px 7px white'
    el.style.outline='1px solid white'
    el.style.boxShadow='2px 2px 7px white'
    par.style.outline='1px solid white'
    par.style.boxShadow='2px 2px 7px white'
}

azganun.onclick=function(){
    anun.style.outline='1px solid white'
    anun.style.boxShadow='2px 2px 7px white'
    azganun.style.outline='1px solid #7BCF0C'
    azganun.style.boxShadow='2px 2px 7px #7BCF0C'
    el.style.outline='1px solid white'
    el.style.boxShadow='2px 2px 7px white'
    par.style.outline='1px solid white'
    par.style.boxShadow='2px 2px 7px white'
}


el.onclick=function(){
    anun.style.outline='1px solid white'
    anun.style.boxShadow='2px 2px 7px white'
    azganun.style.outline='1px solid white'
    azganun.style.boxShadow='2px 2px 7px white'
    el.style.outline='1px solid #7BCF0C'
    el.style.boxShadow='2px 2px 7px #7BCF0C'
    par.style.outline='1px solid white'
    par.style.boxShadow='2px 2px 7px white'
}

par.onclick=function(){
    anun.style.outline='1px solid white'
    anun.style.boxShadow='2px 2px 7px white'
    azganun.style.outline='1px solid white'
    azganun.style.boxShadow='2px 2px 7px white'
    el.style.outline='1px solid white'
    el.style.boxShadow='2px 2px 7px white'
    par.style.outline='1px solid #7BCF0C'
    par.style.boxShadow='2px 2px 7px #7BCF0C'
}


