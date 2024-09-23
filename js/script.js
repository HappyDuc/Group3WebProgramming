$(function () {
  $(".nav-placeholder").load("/htmlTemplates/navbar.html");

  $(".dropdown").on("show.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown();
  });

  $(".dropdown").on("hide.bs.dropdown", function () {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp();
  });

  $(".dropdown-button").hover(
    function () {
      $(this).addClass("dropdown-button");
    },
    function () {
      $(this).removeClass("dropdown-button");
    }
  );

  $(".dropdown-button").click(function (e) {
    e.preventDefault();
  });
});
