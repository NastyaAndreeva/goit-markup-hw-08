(() => {
    const refs = {
      openModalBtn: document.querySelector('.navigation__icon'),
      closeModalBtn: document.querySelector('.mobile-close'),
      modal: document.querySelector('.backdrop-mobile'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden--mobile');
    }
  })();