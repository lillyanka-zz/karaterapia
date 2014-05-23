$(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    if($(this).hasClass('top')){
      $('nav a').removeClass('active');
    }
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  $(document).on("scroll", onScroll);
});

function onScroll(event){
  scroll = $(document).scrollTop();
  console.log(scroll);
  if(scroll > 200){
    $('a.top').fadeIn({
      start: function(){
        $(this).css('display', 'block');
      }
    });
  } else{
    $('a.top').fadeOut();
  }
}
