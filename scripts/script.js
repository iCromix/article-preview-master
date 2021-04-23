class App {
    constructor() {
        this.state = {
            $shareButton: document.querySelector('#btn-mobile'),
            $shareActiveButton: document.querySelector('#btn-share-active'),
            $shareButtonDesktop: document.querySelector('#btn-desktop'),
            $shareSection: document.querySelector('.author-info-share'),
            $authorSection: document.querySelector('.author-info-mobile'),
            $shareIcon: document.querySelector('.share-icon'),
            $popup: document.querySelector('#share-popup')
        }
        this.addListeners();
    }

    addListeners() {
        const { $shareButton, 
            $shareSection, 
            $authorSection, 
            $shareActiveButton, 
            $shareButtonDesktop,
            $popup,
            $shareIcon
        } = this.state;

        $shareButton.addEventListener('click', function() {
            $shareSection.classList.add('show-share');
            $authorSection.classList.add('hide-author');
        });

        $shareActiveButton.addEventListener('click', function() {
            $authorSection.classList.remove('hide-author');
            $shareSection.classList.remove('show-share');
        })

        // Desktop Share

        $shareButtonDesktop.addEventListener('click', function() {
            $shareIcon.classList.toggle('share-icon-active');
            $shareButtonDesktop.classList.toggle('btn-share-active');
            $popup.classList.toggle('show');
        })
    }
}

new App();