document.addEventListener("DOMContentLoaded", function () {
  $(".form-submit-trigger").on("click", function () {
    $(".contact-hero-wrapper").css("display", "none");
    $(".contact-thank_wrapper").css("display", "block");
  });
});
