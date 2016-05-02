(function () {
  $(document).foundation();

  smoothScroll.init({
    speed: 500
  });

  $('section.place .embed').on('click', function () {
    $(this).find('iframe').css('pointer-events', 'auto');
  });
})();
