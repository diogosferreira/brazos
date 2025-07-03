document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".green-effect", {
    backgroundPositionX: "-200%", // Move the gradient smoothly
    duration: 5,
    ease: "linear",
    repeat: -1,
  });
});
