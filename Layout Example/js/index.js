let desktop, web, mobile
document.addEventListener('DOMContentLoaded', () => {
    desktop = document.querySelector('.desktop')
    web = document.querySelector('.web')
    mobile = document.querySelector('.mobile')

    /* Date Footer */
    let footerText = document.querySelector('.content-footer-left')
    let year = new Date().getFullYear()
    footerText.innerHTML = `<p>&copy; ${year}`

    /* Typewriter body */
    let text = document.querySelector('#typeWriter')
    typeWriter(text)


    document.addEventListener('scroll', ()=>{
        if(document.body.scrollWidth <= 1190)
        {
            if(window.scrollY > 400) desktop.style.transform = "translateX(0px)"
            
            if(window.scrollY > 700) web.style.transform = "translateX(0px)"

            if(window.scrollY > 1000) mobile.style.transform = "translateX(0px)"

            if(window.scrollY == 0)
            {
                desktop.style.transform = "translateX(-1000px)"
                web.style.transform = "translateX(-1000px)"
                mobile.style.transform = "translateX(-1000px)"
            }
        }
        else if(document.body.scrollWidth > 1190)
        {
            if(window.scrollY > 370)
            {
                desktop.style.transform = "translateX(0px)"
                web.style.transform = "translateX(0px)"
                mobile.style.transform = "translateX(0px)"
            }
            if(window.scrollY == 0)
            {
                desktop.style.transform = "translateX(-2000px)"
                web.style.transform = "translateX(-2000px)"
                mobile.style.transform = "translateX(-2000px)"
            }
        }
    })    
})

// https://api.whatsapp.com/send?phone=+{{ *YOURNUMBER* }}&text=%20{{ *YOUR MESSAGE* }}

let yourNumber = "5515996470168"
let yourMessage = "Gostaria de contratar seus serviços"

// %20 mean space in link
// If you already had an array then you just join them with '%20'
// easy right

function sendMensageWhastapp(number, message) {
    number = yourNumber
    message = yourMessage.split(' ').join('%20')

    window.open('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
}
    