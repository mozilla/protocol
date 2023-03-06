/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const MzpNewsletter = {};

// !! This file assumes only one signup form per page !!
// Expand email form on input focus or submit if details aren't visible
MzpNewsletter.init = () => {
    const newsletterForm = document.getElementById('newsletter-form');
    let submitButton;
    let formDetails;
    let emailField;
    let formExpanded;

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

        emailField.addEventListener('focus', () => {
            emailFormShowDetails();
        }, false);

        submitButton.addEventListener('click', (e) => {
            if (!formExpanded) {
                e.preventDefault();
                emailFormShowDetails();
            }
        }, false);

        newsletterForm.addEventListener('submit', (e) => {
            if (!formExpanded) {
                e.preventDefault();
                emailFormShowDetails();
            }
        }, false);
    }
};

module.exports = MzpNewsletter;

