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
        console.log("Click menu")
        if(show && e.target.classList[0] == 'menu-container' && menu.classList.contains('menu-mobile')){
            show = !show
            closeMenu()
        }                    
    })
})