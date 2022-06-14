//Nav

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});

//Modal

const button = document.getElementById('modalButton');
const modal = document.getElementById('modal');
const showButtonUno = document.querySelector('.uno');
const showButtonDos = document.querySelector('.dos');
const showButtonTres = document.querySelector('.tres');
const showButtonCuatro = document.querySelector('.cuatro');
const showButtonCinco = document.querySelector('.cinco');
const showButtonSeis = document.querySelector('.seis');

showButtonUno.addEventListener('click', () =>{
    modal.classList.add('modal--show')
})

showButtonDos.addEventListener('click', () =>{
    modal.classList.add('modal--show')
})

showButtonTres.addEventListener('click', () =>{
    modal.classList.add('modal--show')
})

showButtonCuatro.addEventListener('click', () =>{
    modal.classList.add('modal--show')
})

showButtonCinco.addEventListener('click', () =>{
    modal.classList.add('modal--show')
})

showButtonSeis.addEventListener('click', () =>{
    modal.classList.add('modal--show')
})

button.addEventListener('click', () => {
    modal.classList.remove('modal--show')
})

modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal'))modal.classList.remove('modal--show')
})