import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadePageOut, fadePageIn, contentAnimation, updateMenu } from './partials';

barba.use(barbaPrefetch);
gsap.registerPlugin(ScrollTrigger);

const menuButton = document.querySelector(".menu-button-wrap");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

menuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    menu.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");
}

function homepageAnimations() {
    fadeInContent();
    initZoom();
}

function fadeInContent() {
    const introSection = document.querySelector(".intro-section");
    const benefitContent = document.querySelectorAll(".benefit__content-inner");
    const services = document.querySelector(".services");
    const cta = document.querySelector(".cta__inner");

    console.log(services);
    gsap.from(introSection, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'Power2.in',
        scrollTrigger: {
            trigger: introSection,
            start: "top bottom-=25",
            toggleActions: "play none none reset",
        }
    });
    gsap.utils.toArray(benefitContent).forEach((benefit) => {
        gsap.from(benefit, {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'Power2.in',
            scrollTrigger: {
                trigger: benefit,
                toggleActions: "play none none reset",
            }
        })
    });
    gsap.from(services, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'Power2.in',
        scrollTrigger: {
            trigger: services,
            start: "top bottom-=25",
            toggleActions: "play none none reset",
        }
    });
    gsap.from(cta, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'Power2.in',
        scrollTrigger: {
            trigger: cta,
            start: "top bottom-=25",
            toggleActions: "play none none reset",
        }
    });
}

function initZoom() {
    const zoomImages = document.querySelectorAll(".benefit__image");
    gsap.utils.toArray(zoomImages).forEach((section) => {
        const image = section.querySelector('img');
        gsap.to(image, {
            scaleX: 1.1,
            scaleY: 1.1,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: section,
                scrub: true,
            }
        })
    });
}

function initPageTransitions() {
    // hooks that will be triggered before any page transition
    barba.hooks.before(() => {
        updateMenu();
    });

    // scroll to the top of the page
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });

    barba.hooks.after(() => {
        homepageAnimations();
    });

    barba.init({
        transitions: [
            {
                name: 'fade-transition',
                once({ next }) {
                    contentAnimation();
                    fadePageIn(next.container);
                    homepageAnimations();
                },
                // leave: ({ current }) => fadePageOut(current.container),
                // async/await
                async leave({ current }) {
                    await fadePageOut(current.container);
                },
                enter({ next }) {
                    contentAnimation();
                    fadePageIn(next.container);
                },
            },
        ],
    });
}

initPageTransitions();