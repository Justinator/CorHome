console.log("Justin Parsons");

var menuButton = document.querySelector(".menu-button-wrap");
var mobileNav = document.querySelector(".nav-list");
var hamburger = document.querySelector(".hamburger");

menuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    mobileNav.classList.toggle("nav-open");
    hamburger.classList.toggle("is-active");
}

(function () {
    var current = location.pathname.split('/')[1];
    if (current === "") return;
    var menuItems = document.querySelectorAll('.nav-list-item a');
    for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
            menuItems[i].className = "current";
        }
    }
})();

function scrollTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

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

function swiperInit() {
    // init swiper slider for portfolio
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            800: {
                slidesPerView: 2,
            },
            1000: {
                slidesPerView: 3,
            },
        }
    });
}

// loading screen style animation
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransitionOut() {
    var tl = gsap.timeline();
    tl.to(".site-main", {
        duration: 1,
        opacity: 0,
        ease: "Expo.easeInOut",
    });
    tl.to("window.scroll", {
        top: 0,
        left: 0,
        ease: "Expo.easeInOut",
    });
    if (mobileNav.classList.contains("nav-open")) {
        mobileNav.classList.remove("nav-open");
        hamburger.classList.remove("is-active");
    }
}

function pageTransitionIn() {
    var tl = gsap.timeline();
    tl.from(".site-main", {
        duration: 1,
        opacity: 0,
        ease: "Expo.easeInOut",
    });
}

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
    tl.to(".hero-text-block", {
        opacity: 1,
        duration: 0.5,
        y: 0,
    });
    tl.to(".large-circle", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
    });
    tl.to(".medium-circle", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.1,
    });
    tl.to(".small-circle", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        stagger: 0.1,
    });
}

// scroll to the top of the page
barba.hooks.enter(() => {

    window.scrollTo(0, 0);

});

barba.init({
    sync: true,

    transitions: [
        {
            before: ({ current, next, trigger }) => {

                // get the menu element
                let menu = document.querySelector('.nav-item');

                // select the menu item depending on the next URL (you can do that in many ways)
                let nextItem = menu.querySelector(`a[href="${next.url.href}"]`);

                // reset the active menu item and set the next item as "active" (if there is one)
                if (nextItem !== null) {
                    menu.querySelector('.current').classList.remove('current');
                    nextItem.classList.add('current');
                }
            },
            async leave(data) {
                const done = this.async();

                pageTransitionOut();
                await delay(1000);
                done();
            },
            async enter(data) {
                contentAnimation();
                pageTransitionIn();
                scrollTrigger();
                swiperInit();
            },
            async once(data) {
                contentAnimation();
                pageTransitionIn();
                scrollTrigger();
                swiperInit();
            },
        },
    ],
});