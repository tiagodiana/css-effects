/* Biblioteca de efeitos */

/* ----------------------------- MENU ----------------------------------------- */
let show = false;
        
function showMenu()
{
    let menu = document.querySelector('.menu-container')
    menu.classList.add('show-menu')
}
function closeMenu()
{
    let menu = document.querySelector('.menu-container')
    menu.classList.remove('show-menu')
}

window.addEventListener('DOMContentLoaded', ()=>{
    let menu = document.querySelector('.menu-container')
    const icon = document.querySelector('.icon-menu')

    if(window.innerWidth <= 1190)
    {
        menu.classList.remove('menu-desktop')
        menu.classList.add('menu-mobile')
    }
    
    icon.addEventListener('click', ()=>{
        show = !show
        if(show){
            showMenu()
        }
        else{
            closeMenu()
        }
    })
    window.addEventListener('resize', (e)=>{
        if(window.innerWidth <= 1190){
            menu.classList.remove('menu-desktop')
            menu.classList.add('menu-mobile')
        }
        else{
            menu.classList.add('menu-desktop')
            menu.classList.remove('menu-mobile')
            show = false
            closeMenu()
        }
    })


    menu.addEventListener('click', (e)=>{
        console.log()
        if(show && e.target.classList[0] == 'menu-container' && menu.classList.contains('menu-mobile') || e.target.tagName.toLowerCase() == 'li'){
            show = !show
            closeMenu()
        }                    
    })
})
/* ---------------------------------------- End MENU ---------------------------- */

/*----------------------------------------- MODAL -------------------------------- */

window.addEventListener('DOMContentLoaded', ()=>{
    const btnModal = document.getElementById("show-modal")
    if(btnModal){
        btnModal.addEventListener('click', () =>{
            const modal = document.getElementById('modal-container')
            modal.classList.add('show')
            modal.addEventListener('click', (e) => {
                if(e.target.id == 'modal-container' || e.target.classList[0] == "btn-modal-close" || e.target.innerHTML == "×")
                {
                    modal.classList.remove('show')
                }
                if(e.target.classList[0] == "btn-modal-ok")
                {
                    modal.classList.remove('show')
                }
            })
        })
    }
})

/* ------------------------------------- END MODAL ------------------------------- */


/* -------------------------------- Typewriter ------------------------------------- */
function typeWriter(elemento) 
{
    const texto = elemento.innerHTML
    let styles = `
    #${elemento.id}::after
    {
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: pisca .7s infinite;
    }
    @keyframes pisca 
    {
        0%, 100%
        {
            opacity: 1;
        }
        50%
        {
            opacity: 0;
        }
    }

    `
    elemento.innerHTML = ''
    let styleSheet = document.createElement('style')
    styleSheet.type = 'text/css'
    styleSheet.id = 'typewriter'
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
    for(let c = 0; c < texto.length; c++)
    {
     
        setTimeout(()=> {
            if(texto[c] == "\\")
            {
                elemento.innerHTML += "<br>"
            }
            else
                elemento.innerHTML += texto[c]
        }, 60 * c)
     
    }
    /* document.head.removeChild(document.getElementById('typewriter')) */
}