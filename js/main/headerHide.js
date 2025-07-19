document.querySelector('.toggleHeaderVisible').addEventListener('click', (e)=>{
    document.querySelector('.header').classList.toggle('headerInvisible');
    document.querySelector('.toggleHeaderVisible').classList.toggle('toggleHeaderClicked');
})