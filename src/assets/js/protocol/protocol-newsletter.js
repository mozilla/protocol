(function() {
    'use strict';

    // !! This file assumes only one signup form per page !!

    // Expand email form on input focus or submit if details aren't visible
    function initEmailForm() {
        var newsletterForm = document.getElementById('newsletter-form');
        var submitButton = document.getElementById('newsletter-submit');
        var formDetails = document.getElementById('newsletter-details');
        var formControls = document.querySelectorAll('.mzp-c-newsletter-form input, .mzp-c-newsletter-form select');
        var formExpanded;

        if (window.getComputedStyle(formDetails).display === 'none') {
            formExpanded = false;
        }

        function emailFormShowDetails() {
            if (!formExpanded) {
                formDetails.style.display = 'block';
                formExpanded = true;
            }
        }

        for (var i = 0; i < formControls.length; i++) {
            formControls[i].addEventListener('focus', function() {
                emailFormShowDetails();
            }, true);
        }

        submitButton.addEventListener('click', function(e) {
            if (!formExpanded) {
                e.preventDefault();
                emailFormShowDetails();
            }
        });

        newsletterForm.addEventListener('submit', function(e) {
            if (!formExpanded) {
                e.preventDefault();
                emailFormShowDetails();
            }
        });
    }
    initEmailForm();

})();
