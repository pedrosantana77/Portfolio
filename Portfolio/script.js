let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


function ativaLetra(eLemento){
    const arrTexto = eLemento.innerHTML.split('');
    eLemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            eLemento.innerHTML += letra; 
        }, 50 * i);
    });
 }

 const titulo = document.querySelector('.digitando');
 ativaLetra(titulo);