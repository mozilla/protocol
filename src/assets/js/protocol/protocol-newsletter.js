(function() {
    'use strict';

    // !! This file assumes only one signup form per page !!

    // Expand email form on input focus or submit if details aren't visible
    function initEmailForm() {
        var newsletterForm = document.getElementById('newsletter-form');
        var submitButton = document.getElementById('newsletter-submit');
        var formDetails = document.getElementById('newsletter-details');
        var emailField = document.querySelector('.mzp-js-email-field');
        var formExpanded = window.getComputedStyle(formDetails).display === 'none' ? false : true;

        function emailFormShowDetails() {
            if (!formExpanded) {
                formDetails.style.display = 'block';
                formExpanded = true;
            }
        }

        emailField.addEventListener('focus', function() {
            emailFormShowDetails();
        });

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