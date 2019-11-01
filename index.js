///////////////////////////////////////////////////////////

const mainSlider = document.querySelector('.main__slider');
const sliderItems = mainSlider.querySelectorAll('div.main__slider__item');
const imgWrapper = document.querySelector('.images');

let position = 0;

const mainSliderPrev = document.querySelector('.main__slider-before');
const mainSliderNext = document.querySelector('.main__slider-after');
const img = document.querySelector('.main__slider__item__img');


const previus = (e) => {
  position += (img.width + 30) * Math.round(mainSlider.offsetWidth / (img.width + 30));
  position = Math.min(position, 0);
  imgWrapper.style.marginLeft = position + 'px';
}

const next = (e) => {
  position -= (img.width + 30) * Math.round(mainSlider.offsetWidth / (img.width + 30));
  
  position = Math.max(position, -(img.width + 30) * (sliderItems.length - Math.round(mainSlider.offsetWidth / img.width)));
  imgWrapper.style.marginLeft = position + 'px';  
}

mainSliderPrev.addEventListener('click', previus);
mainSliderNext.addEventListener('click', next);

///////////////////////////////////////////////////////////

const mainSlider2 = document.querySelector('.main__slider2');
const sliderItems2 = mainSlider2.querySelectorAll('div.main__slider__item');
const imgWrapper2 = document.querySelector('.images2');

let position2 = 0;


const mainSliderPrev2 = document.querySelector('.main__slider-before2');
const mainSliderNext2 = document.querySelector('.main__slider-after2');


const previus2 = (e) => {
  position2 += (img.width + 30) * Math.round(mainSlider2.offsetWidth / (img.width + 30));
  position2 = Math.min(position2, 0);
  imgWrapper2.style.marginLeft = position2 + 'px';
}

const next2 = (e) => {
  position2 -= (img.width + 30) * Math.round(mainSlider2.offsetWidth / (img.width + 30));
  
  position2 = Math.max(position2, -(img.width + 30) * (sliderItems2.length - Math.round(mainSlider2.offsetWidth / img.width)));
  imgWrapper2.style.marginLeft = position2 + 'px';  
}

mainSliderPrev2.addEventListener('click', previus2);
mainSliderNext2.addEventListener('click', next2);