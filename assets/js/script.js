$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-text");
    var $navi = $(".nav-icn");
    var $wall = $("#Wall")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $wall.height());
    $navi.toggleClass('scrolled', $(this).scrollTop() > $wall.height());
  });
});