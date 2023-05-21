var images = new Array();
var i = 0;
                    
images[0] = 'img/granica1.jpg';        
images[1] = 'img/granica2.jpg';  
images[2] = 'img/granica3.jpg';  
images[3] = 'img/granica4.jpg';  
images[4] = 'img/granica5.jpg'; 
images[5] = 'img/granica6.jpg';        
images[6] = 'img/granica7.jpg';  
images[7] = 'img/granica8.jpg';  
images[8] = 'img/granica9.jpg';  
images[9] = 'img/granica10.jpg';    
                          
function viewImages() {
document.getElementById("main_img").src = images[i]; 
i++;
if (i == images.length) {
    i = 0;}
setTimeout("viewImages()",3000)}