$(function () {
  $(".nav-placeholder").load("/htmlTemplates/navbar.html");

  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

  $(".dropdown-button").hover(
    function () {
      $(this).addClass("dropdown-button");
    },
    function () {
      $(this).removeClass("dropdown-button");
    }
  );

  //$(".dropdown-button").click(function (e) {
  //  e.preventDefault();
  //});
});
