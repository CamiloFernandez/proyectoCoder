//Nav

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});

//Modal

const button = document.getElementById('modalButton');
const modal = document.getElementById('modal');
const showButton = document.getElementById('shop');

showButton.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn')){
        modal.classList.add('modal--show')
    }
})

button.addEventListener('click', () => {
    modal.classList.remove('modal--show')
})

modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal'))modal.classList.remove('modal--show')
})