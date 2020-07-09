var slideWidth = $(".boxarea").width();
var contentW = $(".content-area").width();

$(document).ready(function() {
  $('.content').css({width:contentW});
  $('nav ul li').click(function() {
    var tabindex = $(this).index();
    var jump = (slideWidth * tabindex);
    console.log(tabindex);
    console.log(jump)
    $(".container").css({
      transform: "translate3d(-" + jump + "px, 0, 0)"
    });
  });
  $("a.n-tab").click(function() {
    var $active = $('.active');
    $active.removeClass("active");
    $(this).addClass("active");
  })
});

	$(window).on('resize', function(evt) {
  $('.content').css({width:contentW});
	});
