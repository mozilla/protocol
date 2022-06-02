/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // custom bidi toggle for component previews.
    const bidi = document.querySelector('.Pen-bidi-controls');

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('Pen-bidi-toggle')) {
            const id = e.target.name;
            const preview = document.querySelector(`#${id} .Preview-iframe`).contentWindow.document;
            if (preview) {
                preview.documentElement.setAttribute('dir', e.target.value);
            }
        }
    }, true);

    // reset bidi control after page refresh
    if (bidi) {
        bidi.reset();
    }
})();
