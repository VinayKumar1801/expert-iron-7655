let imagesLink = [
    "https://drop.ndtv.com/albums/NEWS/heavy-rain-in-d_637924782580430537/637924782598570880.jpeg",
    "https://drop.ndtv.com/albums/NEWS/heavy-rain-in-d_637924782580430537/637924782607213536.jpeg",
    "https://drop.ndtv.com/albums/NEWS/heavy-rain-in-d_637924782580430537/637924786448069779.jpeg",
    "https://drop.ndtv.com/albums/NEWS/heavy-rain-in-d_637924782580430537/637924786446972023.jpeg",
    "https://drop.ndtv.com/albums/NEWS/heavy-rain-in-d_637924782580430537/637924782603899387.jpeg",
    "https://drop.ndtv.com/albums/NEWS/heavy-rain-in-d_637924782580430537/637924782602947876.jpeg"
]
let left1 = document.getElementById("leftbtn");
let right1 = document.getElementById("rightbtn");
let crauser = document.getElementById("crauser")


let imageState=0;
right1.addEventListener("click",function(){
    imageState++
    if(imageState==imagesLink.length){
        imageState=0
    }
    crauser.src=imagesLink[imageState];
}) 
left1.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink.length-1;
    }
    crauser.src=imagesLink[imageState]
})
let imagesLink1 = [
    "https://drop.ndtv.com/albums/NEWS/lord-jagannath-_637922797031106708/637922797042490557.jpeg",
    "https://drop.ndtv.com/albums/NEWS/lord-jagannath-_637922797031106708/637922797044366980.jpeg",
    "https://drop.ndtv.com/albums/NEWS/lord-jagannath-_637922797031106708/637922797045770157.jpeg",
    "https://drop.ndtv.com/albums/NEWS/lord-jagannath-_637922797031106708/637922797047178457.jpeg",
    "https://drop.ndtv.com/albums/NEWS/lord-jagannath-_637922797031106708/637922797048586566.jpeg",
  
]
let left12 = document.getElementById("leftbtn1");
let right12 = document.getElementById("rightbtn1");
let crauser1 = document.getElementById("crauser1")


let imageState1=0;
right12.addEventListener("click",function(){
    imageState1++
    if(imageState1==imagesLink1.length){
        imageState1=0
    }
    crauser1.src=imagesLink1[imageState1];
}) 
left12.addEventListener("click",function(){
    imageState1--;
    if(imageState1<0){
        imageState1=imagesLink1.length-1;
    }
    crauser1.src=imagesLink1[imageState1]
})

// jagannath
let imagesLink2 = [
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523813-fotojet-16.jpg" ,
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523820-fotojet-17.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523821-fotojet-18.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523822-fotojet-19.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/07/20/2523823-fotojet-20.jpg",
  
]
let left123 = document.getElementById("leftbtn2");
let right123 = document.getElementById("rightbtn2");
let crauser2 = document.getElementById("crauser2")


let imageState2=0;
right123.addEventListener("click",function(){
    imageState2++
    if(imageState2==imagesLink2.length){
        imageState2=0
    }
    crauser2.src=imagesLink2[imageState2];
}) 
left123.addEventListener("click",function(){
    imageState2--;
    if(imageState2<0){
        imageState2=imagesLink2.length-1;
    }
    crauser2.src=imagesLink2[imageState2]
})
// mars start

let imagesLink3 = [
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/23/1943727-welf.png",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/23/1943729-mars2.png" 
  
]
let left1234 = document.getElementById("leftbtn3");
let right1234 = document.getElementById("rightbtn3");
let crauser3 = document.getElementById("crauser3")


let imageState3=0;
right1234.addEventListener("click",function(){
    imageState3++
    if(imageState3==imagesLink3.length){
        imageState3=0
    }
    crauser3.src=imagesLink3[imageState3];
}) 
left1234.addEventListener("click",function(){
    imageState3--;
    if(imageState3<0){
        imageState3=imagesLink3.length-1;
    }
    crauser3.src=imagesLink3[imageState3]
})
let imagesLink4 = [
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/20/1919083-new-project-10.jpg" ,
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/20/1919100-new-project-11.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/20/1919128-new-project-13.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/20/1919155-new-project-15.jpg",
    "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/20/1919166-new-project-16.jpg"
  
]
let left12345 = document.getElementById("leftbtn4");
let right12345 = document.getElementById("rightbtn4");
let crauser4 = document.getElementById("crauser4")


let imageState4=0;
right12345.addEventListener("click",function(){
    imageState4++
    if(imageState4==imagesLink4.length){
        imageState4=0
    }
    crauser4.src=imagesLink4[imageState4];
}) 
left12345.addEventListener("click",function(){
    imageState4--;
    if(imageState4<0){
        imageState4=imagesLink4.length-1;
    }
    crauser4.src=imagesLink4[imageState4]
})