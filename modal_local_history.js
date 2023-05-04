
    var span_village = document.getElementsByClassName('close_village')[0];
    var modal_village_history=document.getElementById('modal_village_history')
    var village_history = document.getElementById('village_history')
    
    village_history.onclick=function(){
        modal_village_history.style.display='block'
    }
    
    span_village.onclick=function(event){
        modal_village_history.style.display='none'
    }

    var span_museum = document.getElementsByClassName('close_museum')[0];
    var modal_museum_history=document.getElementById('modal_museum_history')
    var museum_history = document.getElementById('museum_history')
    
    museum_history.onclick=function(){
        modal_museum_history.style.display='block'
    }
    
    span_museum.onclick=function(event){
        modal_museum_history.style.display='none'
    }

    var span_school = document.getElementsByClassName('close_school')[0];
    var modal_school_history=document.getElementById('modal_school_history')
    var school_history = document.getElementById('school_history')
    
    school_history.onclick=function(){
        modal_school_history.style.display='block'
    }
    
    span_school.onclick=function(event){
        modal_school_history.style.display='none'
    }
