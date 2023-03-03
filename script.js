//menu responsive code js

var menu_toggle = document.querySelector('.menu_toggle');
var menu = document.querySelector('.menu');
var menu_toggle_span = document.querySelector('.menu_toggle span');

menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active');
    menu_toggle_span.classList.toggle('active');
    menu.classList.toggle('responsive');
}


// js/main.js

var slider_img = document.querySelector('.slider-img');
var images = ['img1.jpg','img2.jpg','img3.jpg'];
var i = 0; //Current Image Index

function prev(){
    if(i <= 0 ) i = images.length;
    i--;
    return setImg();
}

function next(){
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img.setAttribute('src', 'images/' + images[i]);
}