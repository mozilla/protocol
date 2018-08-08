(function() {
    'use strict';

    // custom bidi toggle for component previews.
    var toggles = document.querySelectorAll('.protosite-bidi-controls .protosite-bidi-toggle');

    for (var i = 0; i < toggles.length; i++) {
        toggles[i].addEventListener('click', function(e) {
            var id = e.target.name;
            var preview = document.getElementById(id);

            if (preview) {
                preview.setAttribute('dir', e.target.value);
            }
        });
    }
})();
