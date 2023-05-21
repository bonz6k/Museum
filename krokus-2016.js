var images = new Array();
var i = 0;
                    
images[0] = 'img/krokus1.jpg';        
images[1] = 'img/krokus2.jpg';  
images[2] = 'img/krokus3.jpg';  
images[3] = 'img/krokus4.jpg';  
images[4] = 'img/krokus5.jpg';         
                          
function viewImages() {
document.getElementById("main_img").src = images[i]; 
i++;
if (i == images.length) {
    i = 0;}
setTimeout("viewImages()",3000)}