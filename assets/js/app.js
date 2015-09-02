(function () {
  $(document).foundation();
  $('section.place .row.embed').click(function () {
    $(this).find('iframe').css('pointer-events', 'auto');
  });
})();
