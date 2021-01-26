$(document).ready(function () {
  $('.works-slider').slick({
    dots: true,
    dotsClass: 'slick-dots works__slider-dots',
  })

  $('.team-slider').slick({
    dots: true,
    dotsClass: 'slick-dots team__slider-dots',
  })

  $('.clients__slider').slick({
    dots: true,
    dotsClass: 'slick-dots clients__slider-dots',
    adaptiveHeight: true,
  })
})
