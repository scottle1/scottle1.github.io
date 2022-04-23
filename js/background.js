const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
]

function randomImg(event){
  const cosenBgImg = images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = `url(img/${cosenBgImg})`;
}

randomImg()
setInterval(randomImg,30000)