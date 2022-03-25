let searchbut=document.getElementById('searchbut');

let voronum=document.getElementById('voronum');

let searchinput=document.getElementById('searchinput');

searchbut.addEventListener('click',func)

function func(){
    
    if(searchinput.value==''){
        location.href='#'
    }

    else{
        location.href='./voronum/search.html';
    }
}