document.addEventListener('DOMContentLoaded', (evt) => {

    function showModal(modalID){
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

    let result = showModal('modal-container')
    console.log(result)
} )