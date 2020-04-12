!(function ($) {
  "use strict";

  // Caption typed
  if ($(".typed").length) {
    var typedStrings = $(".typed").data("typed-items");

    typedStrings = typedStrings.split(",");

    new Typed(".typed", {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
})(jQuery);
