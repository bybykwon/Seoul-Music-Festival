gsap.registerPlugin(DrawSVGPlugin, SplitText, TextPlugin, ScrollTrigger, ScrambleTextPlugin, ScrollSmoother);

this.smoother = ScrollSmoother.create({
    content: '#smooth-content',
    wrapper: '#smooth-wrapper',
    smooth: 2,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
});
