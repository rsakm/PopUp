const popupContainer = document.querySelector
('.popup-container');

const button = document.querySelector('button');

button.addEventListener('click',()=>{
    popupContainer.classList.add('popup-open-class');
});

const closeIcon = document.querySelector('.close-icon');

closeIcon.addEventListener('click',()=>{
    popupContainer.classList.remove('popup-open-class');
});

// const overlay = document.querySelector('.overlay')

// overlay.addEventListener('click',()=>{
//     popupContainer.classList.remove('popup-open-class');
// })

// const container = document.querySelector('.popup-container');

popupContainer.addEventListener('click',()=>{
    popupContainer.classList.remove('popup-open-class');
});

const popup = document.querySelector('.popup');
popup.addEventListener('click',(e)=>{
    e.stopPropagation();
})