$(function () {
  $('.acc_ctrl').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next()
        .stop()
        .slideUp(300);
    } else {
      $(this).addClass('active');
      $(this).next()
        .stop()
        .slideDown(300);
    }
  });
});
$('.mobile-btn').click(function () {
  $(this).toggleClass('active')
  $('.menu-mobile').toggleClass('active')
});


///////////////////////OWL-CAROUSEL/////////////////////////////////
window.addEventListener("load", function () {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 50,
      padding: 50,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        },
      }
    })
  })
})


$(document).ready(function () {
  if ($(window).width() <= 768) {
    startCarousel();
    $('.FirstGrid').addClass('owl-carousel');
  } else {
    stopCarousel();
    $('.owl-carousel').addClass('FirstGrid');
    $('.FirstGrid').removeClass('owl-carousel');
  }
});


$(window).resize(function () {
  if ($(window).width() <= 768) {
    startCarousel();
    $('.FirstGrid').addClass('owl-carousel');
    $('.owl-carousel').removeClass('FirstGrid');
  } else {
    stopCarousel();
    $('#owl-grid').removeClass('owl-carousel')
    $('#owl-grid').addClass('FirstGrid');
  }
});


function startCarousel() {
  $("#owl-grid").owlCarousel({
    autoplay: false,
    items: 2,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      630: {
        items: 2
      },
    }
  });
}

function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
}