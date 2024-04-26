// Din cool code here




// array til billeder
let imageArray = [
  "assets/img/elephant.jpg",
  "assets/img/great-white.jpg",
  "assets/img/koala.jpg",
  "assets/img/smithi.jpg",
  "assets/img/tiger.jpg",
];

let currentImage = 0

// galleri billede fra dom
let myGalleriImageElement = document.getElementById('galleryImage')



    // fremad knap fra dom
let myForwardButton = document.getElementById('forward')
myForwardButton.addEventListener('click',(e)=>{

    currentImage = currentImage + 1

    if (currentImage == imageArray.length) {
        currentImage = 0
    }
    changeImage()

})


    // bagud knap fra dom
let myBackButton = document.getElementById('back')

myBackButton.addEventListener('click',(e)=>{

    currentImage = currentImage - 1

    if (currentImage < 0) {
        currentImage = 4
    }

    changeImage()

})


function changeImage(){
    console.log(imageArray[currentImage])
    myGalleriImageElement.src = imageArray[currentImage]

}



myGalleriImageElement.src = imageArray[currentImage]