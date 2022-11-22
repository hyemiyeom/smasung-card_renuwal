$(document).ready(function () {
  // -----------------GNB-----------------
  var i = $(".item.on").index();

  $(".item").mouseenter(function () {
    i = $(this).index();

    $(".item").removeClass("on");
    $(".item").eq(i).addClass("on");

    $(".menu_inner").hide();
    $(".menu_inner").eq(i).show();
  });

  $(".item").mouseleave(function () {
    i = $(this).index();

    $(".menu_inner").hide();
  });
});

//BANNER
new Swiper('.slide-banner .swiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  slidesPerView: 1,
	spaceBetween: 7,
  navigation:{
    prevEl: '.slide-banner .swiper-prev',
    nextEl: '.slide-banner .swiper-next'
  }
});


// ------------FOOTER------------

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


  $(".f_next").click(function(){
    $(".f_panel").stop().animate({"margin-left":"-260px"},function(){
      $(".f_panel li").first().appendTo(".f_panel");
      $(".f_panel").css({"margin-left":"-130px"});
    });
  });

  $(".f_prev").click(function(){
    $(".f_panel").stop().animate({"margin-left":"0px"},function(){
      $(".f_panel li").last().prependTo(".f_panel");
      $(".f_panel").css({"margin-left":"-130px"});
    });
    });

    var autoSlide = setInterval(function(){
      $(".f_panel").stop().animate({"margin-left":"-260px"},function(){
        $(".f_panel li").first().appendTo(".f_panel");
        $(".f_panel").css({"margin-left":"-130px"});
      });
    },2000);

// TO-TOP

const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 600){
    // 탑버튼 보이기
    gsap.to(toTopEl, .2, {
      opacity: .6,
			x: 0 
    } );
  }else{
      // 탑버튼 숨기기
      gsap.to('#to-top', .2, {
        x: 100 
      } );
  }
}, 300));

//TO TOP
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

//SCROLL MAGIG
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .7  
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());    
});









