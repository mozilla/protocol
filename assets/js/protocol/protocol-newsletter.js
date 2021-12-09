/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    // !! This file assumes only one signup form per page !!

    // Expand email form on input focus or submit if details aren't visible
    function initEmailForm() {
        var newsletterForm = document.getElementById('newsletter-form');
        var submitButton;
        var formDetails;
        var emailField;
        var formExpanded;

        function emailFormShowDetails() {
            if (!formExpanded) {
                formDetails.style.display = 'block';
                formExpanded = true;
            }
        }

        if (newsletterForm) {
            submitButton = document.getElementById('newsletter-submit');
            formDetails = document.getElementById('newsletter-details');
            emailField = document.querySelector('.mzp-js-email-field');
            formExpanded = window.getComputedStyle(formDetails).display === 'none' ? false : true;

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
    }
    initEmailForm();

})();
