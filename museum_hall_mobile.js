
if(window.innerWidth<1200){
    
var images = new Array();
var i = 0;
var o = 5;
var p = 10;
var l = 15;
                    
images[0] = 'img/war_1.jpg';
images[1] = 'img/war_2.jpg';
images[2] = 'img/war_3.jpg';
images[3] = 'img/war_4.jpg';
images[4] = 'img/war_5.jpg';          

images[5] = 'img/cosmonautics_1.jpg';
images[6] = 'img/cosmonautics_2.jpg';
images[7] = 'img/cosmonautics_3.jpg';
images[8] = 'img/cosmonautics_4.jpg';
images[9] = 'img/cosmonautics_5.jpg';  

images[10] = 'img/history_1.jpg';
images[11] = 'img/history_2.jpg';
images[12] = 'img/history_3.jpg';
images[13] = 'img/history_4.jpg';
images[14] = 'img/history_5.jpg';  

images[15] = 'img/archeology_1.jpg';
images[16] = 'img/archeology_2.jpg';
images[17] = 'img/archeology_3.jpg';
images[18] = 'img/archeology_4.jpg';
images[19] = 'img/archeology_5.jpg';

function war_mob_sl() {
    
document.getElementById("image_war").src = images[i]; 
i++;
if (i == 4) {
    i = 0;}
setTimeout("war_mob_sl()",3000)}


function cosmonautics_mob_sl() {
    
document.getElementById("image_cosmonautics").src = images[o]; 
o++;
if (o == 9) {
    o = 5;}
setTimeout("cosmonautics_mob_sl()",3000)}


function history_mob_sl() {
    
document.getElementById("image_history").src = images[p]; 
p++;
if (p == 14) {
    p = 10;}
setTimeout("history_mob_sl()",3000)}


function archeology_mob_sl() {
    
document.getElementById("image_archeology").src = images[l]; 
l++;
if (l == 19) {
    l = 15;}
setTimeout("archeology_mob_sl()",3000)}
}