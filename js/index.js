//intro_counting
var memberCountConTxt = 2022;

$({ val: 1995 }).animate({ val: memberCountConTxt }, {
    duration: 4500,
    step: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".memberCountCon").text(num);
    },
    complete: function () {
        var num = numberWithCommas(Math.floor(this.val));
        $(".memberCountCon").text(num);
    }
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
}

// mouse
$(document).mousemove(function (e) {

    let cursorWidth = $(".cursor").width() / 2;
    let cursorFWidth = $(".cursor").width() / 2;

    gsap.to(".cursor", { duration: 0.6, left: e.pageX - cursorWidth, top: e.pageY - cursorWidth });
    gsap.to(".cursor-follower", { duration: 1.6, left: e.pageX - cursorFWidth, top: e.pageY - cursorFWidth });
});

//settimeout
window.setTimeout("closeMainDiv();", 4500);

function closeMainDiv() {
    document.getElementById("maindiv").style.opacity = "100";
}
  
//scroll indicator
$(window).scroll(function() {

  var wins = $(this).scrollTop();
  var hei = $('.content').outerHeight(); //전체 페이지 높이
  var hei2 = $(window).outerHeight(); //윈도우의 높이
  var height = hei - hei2;
  var bar = (wins / height) * 100;
  
  $('#myBar').css('width', bar + '%');
  
});

$(function(){
  // 엘리먼트 스크롤시 위로 올라오기

  function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
    
    // function isElementRightToLeft(elem2, triggerDiff2) {
    //     const { right } = elem2.getBoundingClientRect();
    //     const { innerWidth } = window;
    //     return right > innerWidth + (triggerDiff2 || 0);
    // }
    
  function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(70px)';
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
      }
    })
  }
    
    // function handleScroll2() {
    //     const elems2 = document.querySelectorAll('.right-left-scroll');
    //     elems2.forEach(elem => {
    //     if (isElementRightToLeft(elem2, -20)) {
    //         elem2.style.opacity = "0";
    //         elem2.style.transform = 'translateX(70px)';
    //     } else {
    //         elem2.style.opacity = "1";
    //         elem2.style.transform = 'translateX(0px)';
    //     }
    //     })
    // }
    
    
    
  window.addEventListener('scroll', handleScroll);
  // window.addEventListener('scroll', handleScroll2);
});


