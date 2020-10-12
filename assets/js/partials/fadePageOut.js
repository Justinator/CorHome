import { gsap } from "gsap";

const fadePageOut = (container) => {

    const mobileNav = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");

    if (mobileNav.classList.contains("nav-open")) {
        mobileNav.classList.remove("nav-open");
        hamburger.classList.remove("is-active");
    }

    console.log("fade out");
    return gsap.to(container, {
        autoAlpha: 0,
        duration: .3,
        ease: "Expo.easeInOut",
    });

}

export default fadePageOut;