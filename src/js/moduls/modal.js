function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflowY = "hidden";
    document.body.style.paddingRight = "14px";
    clearInterval(modalTimerId);
}

function hideModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflowY = "";
    document.body.style.paddingRight = "0px";
}

const modals = () => {
    //modal
    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    // const modalCloseBtn = document.querySelector('[data-close]');

    const modalTimerId = setTimeout(openModal, 100000);

   

    function openModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight - 1
            ) {
            openModal();
            window.removeEventListener('scroll', openModalByScroll);

        }
    }

    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") === '') {
            hideModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });


    window.addEventListener('scroll', openModalByScroll);

    //pageYOffset
}