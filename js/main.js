// VARIABLE & CONSTANT DECLARATIONS

const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('div#nav-links-container a');


// EVENT LISTENERS & HANDLERS

// navLinks.forEach((link) => {
//     link.addEventListener('mouseover', lessenOpacity);
//     link.addEventListener('mouseout', increaseOpacity);
// });

window.addEventListener('scroll', changeNavId);

// FUNCTIONS

// function lessenOpacity(e) {
//     e.target.style.opacity = '0.5';
// }

// function increaseOpacity(e) {
//     e.target.style.opacity = '1';
// }

// Find a less clumsy way to do this

function changeNavId () {

    if (window.scrollY >= 500) {
        navBar.id = 'navigation-collapsed'
    } else {
        navBar.id = 'navigation';
    }
}





