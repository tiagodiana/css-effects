function typeWriter(elemento) 
{
    const texto = elemento.innerHTML
    let styles = `
    ${elemento.tagName.toLowerCase()}::after
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
        setTimeout(()=> elemento.innerHTML += texto[c], 90 * c)
    }
    /* document.head.removeChild(document.getElementById('typewriter')) */
}