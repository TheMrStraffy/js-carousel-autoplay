//componenti HTML
const slideShow = document.getElementsByClassName('slideshow');
const gallery = document.querySelector('.gallery');
const showItem = document.getElementsByClassName("show-item");
const hideItem = document.getElementsByClassName("hide-item");
const item = document.getElementsByClassName("item");
const btnUp = document.querySelector(".up");
const btnDown = document.querySelector(".down");
//componenti js
let counter = 0;
let imgTag = '';
let clock;

//inserire le immagini in un array
const imgsArray = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg"
]

//ciclo for per concatenare le immagini in un template literal

for (let i = 0; i < imgsArray.length; i++){
  // template literal per html
  imgTag += `
  <img class="item hide-item" src="img/${imgsArray[i]}" alt="${imgsArray[i]}">
  `;
}

//stampare in html l'immagine

gallery.innerHTML += imgTag;
item[counter].classList.add("show-item");



btnUp.addEventListener('click', function(){
  item[counter].classList.remove("show-item");
  counter++;
  if(counter === item.length) counter = 0;
  item[counter].classList.add("show-item");
})
btnDown.addEventListener('click', function(){
  item[counter].classList.remove("show-item");
  counter--;
  if(counter === -1) counter = item.length - 1;
  item[counter].classList.add("show-item");
})

gallery.addEventListener('mouseenter', function(){
  clearInterval(clock);
})
gallery.addEventListener('mouseleave', function(){
  clock = setInterval(function(){
    item[counter].classList.remove("show-item");
    counter++;
    if(counter === item.length) counter = 0;
    
    item[counter].classList.add("show-item");
    btnDown.classList.remove("hide-item");
  }, 1500);
})

clock = setInterval(function(){
  item[counter].classList.remove("show-item");
  counter++;
  if(counter === item.length) counter = 0;
  
  item[counter].classList.add("show-item");
  btnDown.classList.remove("hide-item");
}, 1500);