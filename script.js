$(document).ready(function () {
  $(".collapseWrapper").slideUp(0.001);
  $(".showSelectButton").click(function (e) {
    e.preventDefault();
    $(".collapseWrapper").stop(true).slideToggle(500);
  });
});
