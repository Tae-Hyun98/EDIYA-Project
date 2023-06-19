$(function () {
  //헤더픽스
  $(window).scroll(function () {
    if (window.innerWidth > 1070) {
      $(function () {
        if ($(window).scrollTop() >= 135) {
          $('.lnb_pc').addClass('fix');
        } else {
          $('.lnb_pc').removeClass('fix');
        };
      });
    } else {
      $('.lnb_pc').removeClass('fix');
      if ($(window).scrollTop() >= 115) {
        $('.header .fix_box').addClass('fixed');
      } else {
        $('.header .fix_box').removeClass('fixed');
      };
    };
  });

  //up, down 클릭
  $('.up').click(function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: 0
    }, 500);
  });

  $('.bot').click(function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: $(document).height()
    }, 500);
  });


  //퀵메뉴
  $(window).resize(function () {
    if (window.innerWidth > 1274) {
      $(function () {
        $('.quick').css('top', $(window).height() / 2 - $('.quick').height() / 2);
        $(window).scroll(function () {
          let point = $(this).scrollTop() + ($(window).height() / 2 - $('.quick').height() / 2);
          $('.quick').stop().animate({
            top: point
          }, 200);
        });
      });
      let delay = 500;
      let timer = null;
      $(window).on('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          document.location.reload();
        }, delay);
      });
    } else if (window.innerWidth > 769) {
      $(function () {
        $('.quick').css('top', $(window).height() / 1.01 - $('.quick').height() * 1.01);
        $(window).scroll(function () {
          let point = $(this).scrollTop() + ($(window).height() / 1.03 - $('.quick').height() *
            1.03);
          $('.quick').stop().animate({
            top: point
          }, 200);
        });
      });
      let delay = 500;
      let timer = null;
      $(window).on('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          document.location.reload();
        }, delay);
      });
    }
  }).resize();
});


//팝업
$(window).show(function () {
  if (window.innerWidth > 601) {
    $(function () {
      if ($(this).scrollTop() === $('.header').offset().top) {
        $('.popup').animate({
          left: 80
        }, 400);
      }
    });
  }
});