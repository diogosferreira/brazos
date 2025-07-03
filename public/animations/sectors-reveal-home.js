document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".section_sectors",
    { y: "-100%" },
    {
      y: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: ".sector-section-trigger",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    }
  );
});
