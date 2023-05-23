window.addEventListener('DOMContentLoaded', () => {
    // Slider

    const slides = document.querySelectorAll('.slide-desktop');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActivClasses();

            slide.classList.add('active');
        })
    }

    function clearActivClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

    $('.carousel').carousel({
        interval: 3000
    })

    // Mobile Menu

    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const body = document.querySelector('body');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
        body.classList.toggle('overflow-hidden');
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    function hideCloseBtn() {
        openMenuBtn.style.display = 'flex';
        closeMenuBtn.style.display = 'none';
    }
    function showCloseBtn() {
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'flex'; 
    }
    function hideBothBtn() {
        openMenuBtn.style.display = '';
        closeMenuBtn.style.display = '';
    }
    openMenuBtn.addEventListener('click', () => showCloseBtn());
    closeMenuBtn.addEventListener('click', () => hideCloseBtn());

    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      body.classList.remove('overflow-hidden');
      openMenuBtn.setAttribute('aria-expanded', false);
      hideBothBtn();
    });

    // Modals
    var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');

    modalButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
            e.preventDefault();
            var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
      });
    });

    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
        });
    });

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;
        if (key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});




