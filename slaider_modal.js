if(window.innerWidth>1200){
    function slaider_war(){
    var images = new Array();
    var i = 0;
                     
images[0] = 'img/war_1.jpg';
images[1] = 'img/war_2.jpg';
images[2] = 'img/war_3.jpg';
images[3] = 'img/war_4.jpg';
images[4] = 'img/war_5.jpg';


document.getElementById("img_slaider_war").src = images[i];
var right = document.getElementById('img_right_click_war');
var left = document.getElementById('img_left_click_war');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("img_slaider_war").src = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("img_slaider_war").src = images[i];
}

}


function slaider_cosmonautics(){
    var images = new Array();
    var i = 0;
               
images[0] = 'img/cosmonautics_1.jpg';
images[1] = 'img/cosmonautics_2.jpg';
images[2] = 'img/cosmonautics_3.jpg';
images[3] = 'img/cosmonautics_4.jpg';
images[4] = 'img/cosmonautics_5.jpg';


document.getElementById("img_slaider_cosmonautics").src = images[i];
var right = document.getElementById('img_right_click_cosmonautics');
var left = document.getElementById('img_left_click_cosmonautics');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("img_slaider_cosmonautics").src = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("img_slaider_cosmonautics").src = images[i];
}

}



function slaider_archeology(){
    var images = new Array();
    var i = 0;
                     
images[0] = 'img/archeology_1.jpg';
images[1] = 'img/archeology_2.jpg';
images[2] = 'img/archeology_3.jpg';
images[3] = 'img/archeology_4.jpg';
images[4] = 'img/archeology_5.jpg';


document.getElementById("img_slaider_archeology").src = images[i];
var right = document.getElementById('img_right_click_archeology');
var left = document.getElementById('img_left_click_archeology');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("img_slaider_archeology").src = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("img_slaider_archeology").src = images[i];
}

}



function slaider_history(){
    var images = new Array();
    var i = 0;
                     
images[0] = 'img/history_1.jpg';
images[1] = 'img/history_2.jpg';
images[2] = 'img/history_3.jpg';
images[3] = 'img/history_4.jpg';
images[4] = 'img/history_5.jpg';


document.getElementById("img_slaider_history").src = images[i];
var right = document.getElementById('img_right_click_history');
var left = document.getElementById('img_left_click_history');

right.onclick=function(){
    if((i+1)<images.length){i++}
    else{i=0}
    document.getElementById("img_slaider_history").src = images[i];
}

left.onclick=function(){
    if(i==0){i=(images.length-1)}
    else{i--}
    document.getElementById("img_slaider_history").src = images[i];
}

}
}                        
