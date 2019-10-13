let Btn = document.querySelector('.btn');
let modalBg = document.querySelector('.modal-bg');
let mgBtn1 = document.querySelector('.close');
let mgBtn2 = document.querySelector('.cancel-btn');
let mgBtn3 = document.querySelector('.unistall-btn');

Btn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
})

mgBtn1.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})

mgBtn2.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})

mgBtn3.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
    alert('DONE');
})

modalBg.addEventListener('click', function(e) {
    if (e.target !== this)
    return;
    modalBg.classList.remove('bg-active');
}) 

