
if(window.innerWidth>1200){
    var images = new Array();
var i = 0;
                    
images[0] = 'img/1.jpg';
images[1] = 'img/2.jpg';
images[2] = 'img/3.jpg';
images[3] = 'img/4.jpg';
images[4] = 'img/5.jpg';          
                          
function viewImages() {
document.getElementById("main_img").src = images[i]; 
i++;
if (i == images.length) {
    i = 0;}
setTimeout("viewImages()",3000)}
}

if(window.innerWidth<480){
    var images = new Array();
var i = 0;
                    
images[0] = 'img/1_phone.jpg';
images[1] = 'img/2_phone.jpg';
images[2] = 'img/3_phone.jpg';
images[3] = 'img/4_phone.jpg';
images[4] = 'img/5_phone.jpg';          
                          
function viewImages() {
document.getElementById("main_img").src = images[i]; 
i++;
if (i == images.length) {
    i = 0;}
setTimeout("viewImages()",3000)}
}