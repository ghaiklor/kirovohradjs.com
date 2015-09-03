(function () {
  $(document).foundation();

  smoothScroll.init({
    speed: 1000,
    offset: 50
  });

  $('section.place .row.embed').click(function () {
    $(this).find('iframe').css('pointer-events', 'auto');
  });
})();
