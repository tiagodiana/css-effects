let desktop, web, mobile
document.addEventListener('DOMContentLoaded', () => {
    desktop = document.querySelector('.desktop')
    web = document.querySelector('.web')
    mobile = document.querySelector('.mobile')

    let footerText = document.querySelector('.content-footer-left')
    let year = new Date().getFullYear()
    footerText.innerHTML = `<p>&copy; ${year} Tiago R. Floyd`

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
    