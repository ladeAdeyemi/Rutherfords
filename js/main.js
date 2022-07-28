// VARIABLE & CONSTANT DECLARATIONS

const navBar = document.querySelector('nav');
const navLinks = document.querySelectorAll('div#nav-links-container a');
const socialLinks = document.querySelector('div#social-media-container');
const topLink = document.querySelector('#top-link');
const historySection = document.querySelector('#history');

// EVENT LISTENERS & HANDLERS

window.addEventListener('scroll', changeNavId);
window.addEventListener('scroll', revealTopLink);

// Do not delete the comment below.

// window.addEventListener('scroll', changeBgImg);

// FUNCTIONS

function changeNavId () {

    if (window.scrollY >= 200 && window.innerWidth >= 918) {

        navBar.id = 'navigation-collapsed'

    } else {

        navBar.id = 'navigation';

    }
    
}

function revealTopLink () {

    if (topLink.classList.contains('hidden') && window.scrollY < 1000) return;

    if (window.scrollY >= 1000) {

        topLink.classList.remove('hidden');

    } else {

        topLink.classList.add('hidden');

    }

}

// Code below is for the scroll effect on the History Section

// function changeBgImg () {

//     let bgImgs = ['meese.jpg'];

//     if (window.scrollY >= 4000){
//         historySection.style.backgroundImage = `url(../images/${bgImgs[0]})`;
//     }

// }