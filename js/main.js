// VARIABLE & CONSTANT DECLARATIONS

const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('div#nav-links-container a');
const socialLinks = document.querySelector('div#social-media-container');


// EVENT LISTENERS & HANDLERS

window.addEventListener('scroll', changeNavId);

// FUNCTIONS

function changeNavId () {

    if (window.scrollY >= 500) {

        navBar.id = 'navigation-collapsed'

    } else {

        navBar.id = 'navigation';

    }
    
}




