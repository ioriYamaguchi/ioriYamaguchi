gsap.from("#Name", {
    x: -100,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#Name',
        start: 'top center',
    }
})

gsap.from(".intLi", {
    x: -100,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#FVul',
        start: 'top center',
    }
})

gsap.from(".SV-title", {
    y: -100,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.SV-title',
        start: 'top center',
    }
})

gsap.from(".skill-li", {
    y: -100,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.1,
    delay: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.skill-li',
        start: 'top center',
    }
})

gsap.from("#TV-title", {
    x: -100,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '#TV-title',
        start: 'top center',
    }
})

gsap.from(".TV-li", {
    x: -100,
    autoAlpha: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.TV-li',
        start: 'top center',
    }
})