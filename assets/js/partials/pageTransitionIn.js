import { gsap } from "gsap";

function pageTransitionIn({ container }) {
    console.log("fade in");
    return gsap.from(".site-main", {
        autoAlpha: 0,
        duration: .3,
        ease: "Expo.easeInOut",
    });
}

export default pageTransitionIn;