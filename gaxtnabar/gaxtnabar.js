let anun=document.getElementById('anun');
let search=document.getElementById('search')
anun.style.outline='1px solid #7BCF0C'
anun.style.boxShadow='2px 2px 7px #7BCF0C'
let i=0
search.onclick=function(){
    i++
    if(i%2==1){
        anun.style.outline='1px solid white'
        anun.style.boxShadow='2px 2px 7px white'
    }
}

anun.onclick=function(){
    anun.style.outline='1px solid #7BCF0C'
    anun.style.boxShadow='2px 2px 7px #7BCF0C'
}