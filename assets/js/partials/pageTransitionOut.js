import { gsap } from "gsap";

function pageTransitionOut({ container }) {
    const mobileNav = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");

    if (mobileNav.classList.contains("nav-open")) {
        mobileNav.classList.remove("nav-open");
        hamburger.classList.remove("is-active");
    }

    console.log("fade out");
    return gsap.to(".site-main", {
        autoAlpha: 0,
        duration: .7,
        ease: "Expo.easeInOut",
    });
}

export default pageTransitionOut;