$(document).ready(function($){
const $header = $(".header")
let prevScroll
let lastShowPos
$(window).on("scroll", function() {
    
    const scrolled = $(window).scrollTop()
  
    if (scrolled > 30 && scrolled > prevScroll) {
      $header.addClass("header__hide")
      lastShowPos = scrolled
    } else if (scrolled <= Math.max(lastShowPos - 250, 0)) {
      $header.removeClass("header__hide")
    }
    prevScroll = scrolled
  })
})