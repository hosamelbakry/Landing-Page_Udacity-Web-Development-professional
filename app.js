/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// Identify and creat the Nav Bar List Elements
const myul =document.getElementById("navbar__list");
// Identify the Sections Elements
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// function to observe which element is active
function elemIsActive() {
    maxValue = sections[0];
    minValue = 1000
    for (item of sections) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -100 & bounding.top < minValue) {
            minValue = bounding.top;
            maxValue = item;
        };
    };
    return maxValue;
};


// this function to Activate Back to top button
const handleBackToTopButton = () => {
    const backToTopBtn = document.querySelector("#backToTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
// This function is to add the sections in the navigation bar
function addNavSections() {
    for (let item of sections) {
        let section = document.createElement('li');
        section.className = 'menu__link';
        section.dataset.nav = item.id;
        section.innerText = item.dataset.nav;
        myul.appendChild(section);
    };
};




// Add class 'active' to section when near top of viewport

function setActiveView () {
    window.addEventListener('scroll', function (event) {
        let section = elemIsActive();
        section.classList.add('your-active-class');
        for (let item of sections) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // This loop to remove the active status from other sections Elements
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};

// Scroll to anchor ID using scrollTO event
function scrollToAnchor() {
    myul.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
addNavSections();


// Scroll to section on link click
scrollToAnchor();

// Set sections as active
setActiveView();
