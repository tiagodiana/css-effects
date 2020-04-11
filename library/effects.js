/* Biblioteca de efeitos */

/* Efeito máquina de escrever Typewriter */
let name = 'Stylo'
let styleCSS = document.createElement('style')
let css = document.getElementById(name)
styleCSS.type = "text/css"
styleCSS.setAttribute('id', name)


function typeWriter(element){
    let text = element.innerHTML
    element.innerHTML = ''
    /* Estilo css  */
    const styleText = `
    #${element.id}::after
    {
        content: '|';
        margin-left: 5px;
        opacity: 1;
        animation: flash 0.5s infinite;
    }
    
    @keyframes flash{
        0%, 100%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
    }
    `
    styleCSS.innerHTML = styleText
    if(!css) document.head.appendChild(styleCSS)
    else css.innerHTML = styleType

    for(let c = 0; c < text.length; c++)
        setTimeout(() => element.innerHTML += text[c], 75 * c)
    
}


/* ###### Modal ######## */

function openModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.classList[0] == "btn-modal-close")
        {
            modal.classList.remove('mostrar')
            console.log(false)
        }
        if(e.target.classList[0] == "btn-modal-ok")
        {
            modal.classList.remove('mostrar')
            console.log(true)
        }
    })
}