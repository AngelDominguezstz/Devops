let img=document.querySelector('img');

fetch('beserk.jpg')
.then(resp=>resp.blob())
.then(imagen=>{
    var imgPath = URL.createObjectURL(imagen);
    img.src = imgPath;


})