$('.svg').each(function() {
    var $img = $(this);
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');
      // Replace image with new SVG
      $img.replaceWith($svg);
    });
});