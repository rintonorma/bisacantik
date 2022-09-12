$(document).ready(function () {
  $("#hb").click(function() {
      $(".navbar-left").addClass("show");
  });
  $("#overlay").click(function() {
      $(".navbar-left").removeClass("show");
  });
  $("#btn-close").click(function() {
      $(".navbar-left").removeClass("show");
  });
  $('.bc-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
  });
});