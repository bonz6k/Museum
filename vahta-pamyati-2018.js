var images = new Array();
var i = 0;
                    
images[0] = 'img/vahta1.jpg';        
images[1] = 'img/vahta2.jpg';  
images[2] = 'img/vahta3.jpg';  
images[3] = 'img/vahta4.jpg';  
images[4] = 'img/vahta5.jpg'; 
images[5] = 'img/vahta6.jpg';          
                          
function viewImages() {
document.getElementById("main_img").src = images[i]; 
i++;
if (i == images.length) {
    i = 0;}
setTimeout("viewImages()",3000)}