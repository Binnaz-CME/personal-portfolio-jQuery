$('.menu').click(function (e) {
  $('.menu').toggleClass('hide-menu');
  $('.list-item').toggleClass('hide-menu');
});

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  nextArrow: '<button class="slide-arrow next-arrow"></button>',
});

$('.sliderimg').click(function (e) {
  $('#myModal').addClass('modal');
});

$('body').keydown(function (e) {
  if (e.key === 'Escape') {
    $('#myModal').removeClass('modal');
  }
});
