document.addEventListener("DOMContentLoaded", function () {
  let tlmar = gsap.timeline({ repeat: -1 });

  tlmar.fromTo(
    ".marquee_track.marquee-foqa",
    {
      xPercent: 0,
    },
    {
      xPercent: -50,
      duration: 40,
      ease: "none",
    }
  );
});
