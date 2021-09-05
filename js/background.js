const images = ["img0.jpg", "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img9.jpg", "img9.jpg"];
const bgImage = document.querySelector("#bgImg");
const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);