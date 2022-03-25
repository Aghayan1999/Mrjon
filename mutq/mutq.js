let anun=document.getElementById('i');
anun.style.outline='1px solid #7BCF0C'
anun.style.boxShadow='2px 2px 7px #7BCF0C'

let i1=document.getElementById('i1');

i1.onclick=function(){
    anun.style.outline='1px solid white'
    anun.style.boxShadow='2px 2px 7px white'
    i1.style.outline='1px solid #7BCF0C'
    i1.style.boxShadow='2px 2px 7px #7BCF0C'
}

anun.onclick=function(){
    anun.style.outline='1px solid #7BCF0C'
    anun.style.boxShadow='2px 2px 7px #7BCF0C'
    i1.style.outline='1px solid white'
    i1.style.boxShadow='2px 2px 7px white'
}