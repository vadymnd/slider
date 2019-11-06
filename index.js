const sliderWrapper = document.getElementById('slider-wrapper');
const mainSlider = sliderWrapper.querySelector('.main__slider');
const sliderItems = sliderWrapper.querySelectorAll('div.main__slider__item');
const imgWrapper = sliderWrapper.querySelector('.main__slider__images-wrapper');
const mainSliderPrev = sliderWrapper.querySelector('.main__slider-before');
const mainSliderNext = sliderWrapper.querySelector('.main__slider-after');
const img = sliderWrapper.querySelector('.main__slider__item__img');

let position = 0;
let maxPosition = -(img.width + 30) * (sliderItems.length - Math.round(mainSlider.offsetWidth / img.width));

const isPosition = () => {
  switch (position) {
    case 0 : mainSliderPrev.style.opacity = '0.5';
    break;
    case maxPosition : mainSliderNext.style.opacity = '0.5';
    break;
    default: mainSliderPrev.style.opacity = '1';
             mainSliderNext.style.opacity = '1';
  }
};
isPosition();

const previus = (e) => {
  position += (img.width + 30) * Math.round(mainSlider.offsetWidth / (img.width + 30));
  position = Math.min(position, 0);
  imgWrapper.style.marginLeft = position + 'px';
  isPosition();
};

const next = (e) => {
  position -= (img.width + 30) * Math.round(mainSlider.offsetWidth / (img.width + 30));
  position = Math.max(position, maxPosition);
  imgWrapper.style.marginLeft = position + 'px'; 
  isPosition();
};

mainSliderPrev.addEventListener('click', previus);
mainSliderNext.addEventListener('click', next);
