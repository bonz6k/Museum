var images = new Array();
var i = 0;
                    
images[0] = 'img/gory1.jpg';        
images[1] = 'img/gory2.jpg';  
images[2] = 'img/gory3.jpg';  
images[3] = 'img/gory4.jpg';  
images[4] = 'img/gory5.jpg';    
                          
function viewImages() {
document.getElementById("main_img").src = images[i]; 
i++;
if (i == images.length) {
    i = 0;}
setTimeout("viewImages()",3000)}

var granica2018_click = document.getElementById('granica2018');
granica2018_click.onclick = function(){
    window.location.href = 'Granica-2018.html'
}