export function sectors() {
  console.log("sectors");
  const element = document.querySelector(".section_sectors");
  if (!element) return;


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

}