gsap.registerPlugin(ScrollTrigger);

// Initial animations
gsap.to("#hero-img", {
    rotate: 45,
    opacity: 1,
    delay: 1,
    duration: 4,
});

gsap.from(".card-wrapper > h1", {
    scrub: 1,
    y: 5,
});

gsap.from(".card-wrapper > button", {
    stagger: 2,
    y: 10,
});

// Scroll-triggered animations for card-wrapper
gsap.to(".card-wrapper", {
    scrollTrigger: {
        trigger: "#section-one",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true, // Remove or set to false for production
    },
    x: 400, // Adjust this value as per your need
    duration: 1,
});


// Scroll-triggered animations for section-two
gsap.to(".left", {
    scrollTrigger: {
        trigger: "#section-two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers: true, // Remove or set to false for production
    },
    y: "100%", // Move from top to center
    opacity: 1,
    duration: 1,

});

gsap.to(".right", {
    scrollTrigger: {
        trigger: "#section-two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        markers: true, // Remove or set to false for production
    },
    y: "-100%", // Move from bottom to center
    opacity: 1,
    duration: 1,
    ease: "power2.out"
});
