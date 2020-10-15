import barba from '@barba/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadePageOut, fadePageIn, contentAnimation, updateMenu } from './partials';

gsap.registerPlugin(ScrollTrigger);

const menuButton = document.querySelector(".menu-button-wrap");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const zoomImages = document.querySelectorAll(".zoom");

menuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    menu.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");
}

function trigger() {
    console.log(zoomImages);
    zoomImages.forEach((zoom) => {
        gsap.to(zoom, {
            scale: 1.1,
            scrollTrigger: {
                trigger: zoom,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    });
}

// hooks that will be triggered before any page transition
barba.hooks.before(() => {
    updateMenu();
});

// scroll to the top of the page
barba.hooks.enter(() => {
    window.scrollTo(0, 0);
});

barba.hooks.after(() => {
    trigger();
});

barba.init({
    transitions: [
        {
            name: 'fade-transition',
            once({ next }) {
                contentAnimation();
                fadePageIn(next.container);
                trigger();
            },
            // leave: ({ current }) => fadePageOut(current.container),
            // async/await
            async leave({ current }) {
                await fadePageOut(current.container);
            },
            enter({ next }) {
                fadePageIn(next.container);
            },
        },
    ],
});