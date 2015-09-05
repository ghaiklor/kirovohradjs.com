(function () {
  $(document).foundation();

  smoothScroll.init({
    speed: 500,
    offset: 50
  });

  $('section.place .embed').on('click', function () {
    $(this).find('iframe').css('pointer-events', 'auto');
  });
})();
