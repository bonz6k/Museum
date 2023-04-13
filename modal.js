if(window.innerWidth>1200){
var span_war = document.getElementsByClassName('close_war')[0];
var modal_war=document.getElementById('modal_war')
var hall_of_war = document.getElementById('hall_of_war')

hall_of_war.onclick=function(){
    modal_war.style.display='block'
}

span_war.onclick=function(event){
        modal_war.style.display='none'
}


var span_cosmonautics = document.getElementsByClassName('close_cosmonautics')[0];
var modal_cosmonautics=document.getElementById('modal_cosmonautics')
var cosmonautics_hall = document.getElementById('cosmonautics_hall')

cosmonautics_hall.onclick=function(){
    modal_cosmonautics.style.display='block'
}
span_cosmonautics.onclick=function(event){
    modal_cosmonautics.style.display='none'
}


var span_archeology = document.getElementsByClassName('close_archeology')[0];
var modal_archeology=document.getElementById('modal_archeology')
var hall_of_archeology = document.getElementById('hall_of_archeology')

hall_of_archeology.onclick=function(){
    modal_archeology.style.display='block'
}
span_archeology.onclick=function(event){
    modal_archeology.style.display='none'
}


var span_history = document.getElementsByClassName('close_history')[0];
var modal_history=document.getElementById('modal_history')
var hall_of_history = document.getElementById('hall_of_history')

hall_of_history.onclick=function(){
    modal_history.style.display='block'
}
span_history.onclick=function(event){
    modal_history.style.display='none'
}
}
