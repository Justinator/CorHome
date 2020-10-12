import { gsap } from "gsap";

function contentAnimation() {
    var tl = gsap.timeline();
    tl.to(".brand-logo", {
        opacity: 1,
        duration: 0.3,
    });
    tl.to(".nav-item", {
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
        y: 0,
    });
}

export default contentAnimation;