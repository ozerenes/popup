let popup = document.querySelector('.popup-container');
let openBtn = document.querySelector('#open');
let closeBtn = document.querySelector('#close');


openBtn.addEventListener('click', () => {

    popup.classList.add('active');

});


closeBtn.addEventListener('click', () => {

    popup.classList.remove('active');

})