(function() {
    'use strict';

    // custom bidi toggle for component previews.
    var bidi = document.querySelectorAll('.protosite-bidi-controls');
    var toggles = document.querySelectorAll('.protosite-bidi-controls .protosite-bidi-toggle');

    // reset bidi control after page refresh.
    for (var i = 0; i < bidi.length; i++) {
        bidi[i].reset();
    }

    for (var j = 0; j < toggles.length; j++) {
        toggles[j].addEventListener('click', function(e) {
            var id = e.target.name;
            var preview = document.getElementById(id);

            if (preview) {
                preview.setAttribute('dir', e.target.value);
            }
        });
    }
})();
