import barba from '@barba/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadePageOut, fadePageIn, contentAnimation, updateMenu } from './partials';

gsap.registerPlugin(ScrollTrigger);

const menuButton = document.querySelector(".menu-button-wrap");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const zoom = document.querySelectorAll(".zoom");

menuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    menu.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");
}
console.log(zoom);
// gsap scroll trigger
// gsap scroll trigger

const zoom1 = gsap.to(".zoom-1", {
    scale: 1.1,
});
ScrollTrigger.create({
    trigger: ".zoom-1",
    animation: zoom1,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
});
const zoom2 = gsap.to(".zoom-2", {
    scale: 1.1,
});
ScrollTrigger.create({
    trigger: ".zoom-2",
    animation: zoom2,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
});
const zoom3 = gsap.to(".zoom-3", {
    scale: 1.1,
});
ScrollTrigger.create({
    trigger: ".zoom-3",
    animation: zoom3,
    start: "top bottom",
    end: "bottom top",
    scrub: true,
});
// function Trigger() {
//     if (document.body.contains(zoom)) {
//         console.log("Success");
//         const zoom1 = gsap.to(".zoom-1", {
//             scale: 1.1,
//         });
//         ScrollTrigger.create({
//             trigger: ".zoom-1",
//             animation: zoom1,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//         });
//         const zoom2 = gsap.to(".zoom-2", {
//             scale: 1.1,
//         });
//         ScrollTrigger.create({
//             trigger: ".zoom-2",
//             animation: zoom2,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//         });
//         const zoom3 = gsap.to(".zoom-3", {
//             scale: 1.1,
//         });
//         ScrollTrigger.create({
//             trigger: ".zoom-3",
//             animation: zoom3,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//         });
//     }
// }




// TO-DO continue to work on writing this into a forEach of sorts to grab all zoom images rather than writing this 3+ times
var zoomImages = gsap.utils.toArray(".zoom");
console.log(zoomImages);
// gsap.utils.toArray(".zoom").forEach(zoom => {
//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".zoom",
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//         }
//     });
//     tl.to(".zoom", {
//         scale: 1.1,
//     });
// });

// hooks that will be triggered before any page transition
barba.hooks.before(() => {
    updateMenu();
});

// scroll to the top of the page
barba.hooks.enter(() => {
    window.scrollTo(0, 0);
});

barba.hooks.after(() => {
    Trigger();
});

barba.init({
    transitions: [
        {
            name: 'fade-transition',
            once({ next }) {
                contentAnimation();
                fadePageIn(next.container);
                Trigger();
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