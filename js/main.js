// VARIABLE & CONSTANT DECLARATIONS

const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('div#nav-links-container a');
const socialLinks = document.querySelector('div#social-media-container');
const topLink = document.querySelector('#top-link');

// EVENT LISTENERS & HANDLERS

window.addEventListener('scroll', changeNavId);
window.addEventListener('scroll', revealTopLink);

// FUNCTIONS

function changeNavId () {

    if (window.scrollY >= 500) {

        navBar.id = 'navigation-collapsed'

    } else {

        navBar.id = 'navigation';

    }
    
}

function revealTopLink () {

    if (window.scrollY >= 1000) {

        topLink.classList.remove('hidden');

    } else {

        topLink.classList.add('hidden');

    }

}

