import { gsap } from "gsap";

const fadePageIn = (container) => {
    console.log("fade in");
    return gsap.from(container, {
        autoAlpha: 0,
        duration: .3,
        ease: "Expo.easeInOut",
    });
}

export default fadePageIn;