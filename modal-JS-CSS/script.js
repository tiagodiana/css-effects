window.addEventListener('DOMContentLoaded', ()=>{
    const btnModal = document.getElementById("show-modal")
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
})

