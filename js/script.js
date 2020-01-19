let box2 = document.querySelector('.box2');
let box1 = document.querySelector('.box1');


let box3 = document.querySelector('.box3');
let box_2_items = document.querySelector('.box_2_items');
let box1lip = document.querySelector('.box1 #lip');
let box2lip = document.querySelector('.box2 #lip');
let box3_animate = document.querySelector('.box3_animate');

box1.addEventListener('animationend', box1AnimateEnd);
box2.addEventListener('animationend', box2AnimateEnd);
box3.addEventListener('animationend', box3AnimateEnd);


function box1AnimateEnd(){
    box1lip.classList.add('lip1Animate');

}
function box2AnimateEnd(){
    box3.classList.add('box3_animate');
    box_2_items.classList.add('box_2_items_m');
    box2lip.classList.add('lip2Animate');
}
function box3AnimateEnd(){
    box1.classList.add('box_light')
    box2.classList.add('box_light')

}