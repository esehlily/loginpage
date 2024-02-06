function changeImg(imgNumber) {
    var myImages = ["tele.jpg","smoky.jpg","marble.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newImgNumber = Math.floor(Math.random()*myImages.length);
    document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')'
}
window.onload = changeImg;