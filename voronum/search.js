let profesions=document.getElementById('profesions')
let profesion=document.getElementById('profesion')
let profes=document.getElementById('profes')
let kvadrat=document.getElementById('kvadrat')
let kvadrat1=document.getElementById('kvadrat1')
let state=document.getElementById('state')
state.style.display='none'
let jesika=document.getElementById('jesika')

let foot=document.getElementById('foot')
let ej=document.getElementById('ej')

kvadrat.onclick=function(){
    profesions.style.opacity='0';
    profesions.style.transition='2s';


    profesion.style.opacity='0';
    profesion.style.transition='2s';

    profes.style.opacity='0';
    profes.style.transition='2s';

    ej.style.marginTop='20px';
    foot.style.marginTop='20px'

    state.style.display='block'
    state.style.transition='2s'



    kvadrat.style.background='transparent url(../img/view_module_black_24dp.svg) 0% 0% no-repeat padding-box';
    kvadrat.style.transition='2s'

    kvadrat1.style.background='transparent url(../img/view_list_black_24dp.svg) 0% 0% no-repeat padding-box';
    kvadrat1.style.transition='2s'
}


kvadrat1.onclick=function(){
    profesions.style.opacity='1';
    profesions.style.transition='2s';


    profesion.style.opacity='1';
    profesion.style.transition='2s';

    profes.style.opacity='1';
    profes.style.transition='2s';

    ej.style.marginTop='48px'
    foot.style.marginTop='0px'

    state.style.display='none'

    kvadrat.style.background='transparent url(../img/view_list_black_24dp.svg) 0% 0% no-repeat padding-box';
    kvadrat.style.transition='2s'


    kvadrat1.style.background='transparent url(../img/view_module_black_24dp.svg) 0% 0% no-repeat padding-box';
    kvadrat1.style.transition='2s'
}