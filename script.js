'use strict';

let imgIndex = 0;
let imgPosition = 0;

$(".menu").click(function () {
  $(".menu").toggleClass("hide-menu");
  $(".list-item").toggleClass("hide-menu");
});

$(".btn-next").click(function (e) {
  e.stopPropagation();
  // console.log(e.target)
  if (imgPosition <= 300) {
    imgPosition += 100;
  } else {
    imgPosition = 0;
  }

  $("figure").css("left", -imgPosition + "%");

  imgIndex++;

  switch (imgIndex) {
    case 1:
      $("#indicator1").addClass("current");
      $("#indicator0").removeClass("current");
      break;
    case 2:
      $("#indicator2").addClass("current");
      $("#indicator1").removeClass("current");
      break;
    case 3:
      $("#indicator3").addClass("current");
      $("#indicator2").removeClass("current");
      break;
    case 4:
      $("#indicator4").addClass("current");
      $("#indicator3").removeClass("current");
      break;
    default:
      $("#indicator0").addClass("current");
      $("#indicator4").removeClass("current");
      imgIndex = 0;
  }
});

$(".btn-prev").click(function (e) {
  e.stopPropagation();
  if (imgPosition >= 100) {
    imgPosition -= 100;
  } else {
    imgPosition = 400;
  }

  if (imgIndex === 0) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }

  $("figure").css("left", -imgPosition + "%");

  switch (imgIndex) {
    case 1:
      $("#indicator1").addClass("current");
      $("#indicator2").removeClass("current");
      break;
    case 2:
      $("#indicator2").addClass("current");
      $("#indicator3").removeClass("current");
      break;
    case 3:
      $("#indicator3").addClass("current");
      $("#indicator4").removeClass("current");
      break;
    case 4:
      $("#indicator4").addClass("current");
      $("#indicator0").removeClass("current");
      break;
    default:
      $("#indicator0").addClass("current");
      $("#indicator1").removeClass("current");
      imgIndex = 0;
  }
});

$("#myModal").click(function (e) {
  $("#myModal").addClass("modal");
  $("figure img").addClass("modal-content");

  if (e.target === e.currentTarget) {
    $("#myModal").removeClass("modal");
    $("figure img").removeClass("modal-content");
  }
});
