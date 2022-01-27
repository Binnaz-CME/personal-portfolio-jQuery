$('.slider').slick({
  dots: true,
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  nextArrow: '<button class="slide-arrow next-arrow"></button>',
});

$('.menu').click(function () {
  $('.menu').toggleClass('hide-menu');
  $('.list-item').toggleClass('hide-menu');
});

$('.sliderimg').click(function (e) {
  $('#myModal').addClass('modal');
  $('.sliderimg').addClass('modal-content');

  // if (e.target === e.currentTarget) {
  //   $('#myModal').removeClass('modal');
  //   $('.sliderimg').removeClass('modal-content');
  // }
});

$('body').keydown(function (e) {
  if (e.key === 'Escape') {
    $('#myModal').removeClass('modal');
    $('div > img').removeClass('modal-content');
  }
});
