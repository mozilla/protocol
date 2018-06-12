// (function() {
//     'use strict';
//
//     var nav = document.getElementById('protosite-nav-main');
//     var navToggle = document.querySelector('.protosite-nav-main-head .protosite-js-nav-toggle');
//
//     navToggle.addEventListener('click', function(event) {
//         event.preventDefault();
//         nav.classList.toggle('mzp-is-active');
//     }, false);
// })();

var requireString = null; //maybe remove null?
var testit = null; //maybe remove null?
var selectedString = null;
var selectedTest = null;

// Dropdown Listener
function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener)
        elem.addEventListener (eventType, handler, false);
    else if (elem.attachEvent)
        elem.attachEvent ('on' + eventType, handler);
}

// Replace Text
function replaceText(inputID, componentID) { // eslint-disable-line no-unused-vars

    var inputInitialValue = document.getElementById(inputID).value;
    var storedInitialValue = inputInitialValue;

    document.getElementById(inputID).onkeyup = function() {
        // Component
        var getInput = document.getElementById(inputID);
        var getComponent = document.getElementsByClassName(componentID)[0];
        var optionHasMaxLength = getInput.hasAttribute('data-maxlength');

        getComponent.textContent = document.getElementById(inputID).value;

        // Max length
        if (optionHasMaxLength) {
            var characterMax = getInput.dataset.maxlength;
            var characterLength = getInput.value.length;
            var characterDifference = Math.abs(getInput.dataset.maxlength - getInput.value.length);
            var characterMessage = 'This component has ' +  characterLength + ' characters, ' + characterDifference + ' more than the maximum limit of ' + characterMax + ' characters.';
            var getMessageId = document.getElementById('message-maxlength_' + inputID);

            if (characterLength > characterMax) {
                if (document.getElementById('alert').contains(document.getElementById('message-maxlength_' + inputID))) {
                    getMessageId.id = 'message-maxlength_' + inputID;
                    getMessageId.innerHTML = characterMessage;
                } else {
                    document.getElementById('alert').insertAdjacentHTML('beforeend', '<div id="message-maxlength_' + inputID + '" class="protosite-alert">' + characterMessage + '</div>');
                }
            } else {
                if (document.getElementById('alert').contains(getMessageId)) {
                    document.getElementById('alert').removeChild(getMessageId);
                }
            }
        }

        // Required String
        if (requireString !== null) {
            var requireId = document.getElementById('message-require_' + testit);
            var requireMessage = 'This component doesnt include the phrase: ' + requireString;

            if (document.getElementById(inputID).value.includes(requireString)) {
                if (document.getElementById('alert').contains(requireId)) {
                    document.getElementById('alert').removeChild(requireId);
                }
            } else {
                if (document.getElementById('alert').contains(requireId)) {
                    requireId.innerHTML = requireMessage;
                } else {
                    document.getElementById('alert').insertAdjacentHTML('beforeend', '<div id="message-require_' + testit + '" class="protosite-alert">' + requireMessage + '</div>');
                }
            }
        }

        // Selected String
        if (selectedString !== null) {
            var selectedStringId = document.getElementById('message-require_' + selectedTest);
            var selectedMessage = 'This component doesnt include the phrase: ' + selectedString;

            if (document.getElementById(inputID).value.includes(selectedString)) {
                if (document.getElementById('alert').contains(selectedStringId)) {
                    document.getElementById('alert').removeChild(selectedStringId);
                }
            } else {
                if (document.getElementById('alert').contains(selectedStringId)) {
                    selectedStringId.innerHTML = selectedMessage;
                } else {
                    document.getElementById('alert').insertAdjacentHTML('beforeend', '<div id="message-require_' + selectedTest + '" class="protosite-alert">' + selectedMessage + '</div>');
                }
            }
        }

        // Wrap value in 'changethis_' + inputID
        var getCodeSample = document.getElementById('language-markup').innerHTML; //remove?
        if (!getCodeSample.includes('changethis_' + inputID)) {
            var wrapCodeSample = getCodeSample.replace(inputInitialValue, '<span id="changethis_' + inputID + '">' + inputInitialValue + '</span>');
            document.getElementById('language-markup').innerHTML = wrapCodeSample;
        }

        // Code Sample
        //var getCodeSampleText;
        //if (document.getElementById('changethis_' + inputID)) {
        var getCodeSampleText = document.getElementById('changethis_' + inputID).innerHTML;
        //}
        var inputValue = document.getElementById(inputID).value;
        var newCodeSample = getCodeSampleText.replace(inputInitialValue, inputValue);

        if (inputValue.length > 0) {
            document.getElementById('changethis_' + inputID).innerHTML = newCodeSample;
            var promise1 = new Promise(function(resolve) {
                resolve('Success!');
            });

            promise1.then(function() {
                inputInitialValue = inputValue;
            });
        } else if (inputValue.length == 0) {
            document.getElementById('changethis_' + inputID).innerHTML = getCodeSampleText.replace(inputInitialValue, storedInitialValue);
            var promise2 = new Promise(function(resolve) {
                resolve('Success!');
            });

            promise2.then(function() {
                inputInitialValue = storedInitialValue;
            });
        }

    };
}

// Add Class
function addClass(inputID, componentID) { // eslint-disable-line no-unused-vars

    addEventHandler(document, 'DOMContentLoaded', function() {

        // Identify Text Input
        var textInput = inputID.split('-')[0];
        textInput += '-text';
        if (document.getElementById(textInput)) {
            var textInputValue = document.getElementById(textInput).value;
        }

        addEventHandler(document.getElementById(inputID), 'change', function() {
            var getComponent = document.getElementsByClassName(componentID)[0];
            var inputValue = this.value;

            // Identify other values
            function getChildren(parent, selector) {
                return Array.prototype.filter.call(parent.children, function(node) {
                    return node.matches(selector);
                });
            }
            var children = getChildren(this, 'option');

            // Remove other values
            for (var int = 0; int < children.length; int++) {
                if( children[int].value && children[int].value !== inputValue) {
                    getComponent.classList.remove(children[int].value);
                    document.getElementById('language-markup').innerHTML = document.getElementById('language-markup').innerHTML.replace(children[int].value, '');
                }
            }

            // Add class to component
            if(inputValue) {
                if (getComponent.classList) {
                    getComponent.classList.add(inputValue);
                } else {
                    getComponent.inputValue += '' + inputValue;
                }
            }

            // Add class to code sample
            var promise3 = new Promise(function(resolve) { // replace promise3 // var promise3 = new Promise(function(resolve, reject) {
                resolve('Success!');

                var getCodeSample = document.getElementById('language-markup').innerHTML; //remove?
                if (!getCodeSample.includes('changethis_' + inputID)) {
                    var wrapCodeSample = document.getElementById('language-markup').innerHTML.replace(textInputValue, '<span id="changethis_' + inputID + '">' + textInputValue + '</span>');
                    document.getElementById('language-markup').innerHTML = wrapCodeSample;
                }

            });
            promise3.then(function() {
                var updateCodeSample = document.getElementById('language-markup').innerHTML.replace(componentID, componentID + ' ' + inputValue);
                document.getElementById('language-markup').innerHTML = updateCodeSample;
                document.getElementsByClassName('token attr-value')[0].innerHTML = document.getElementsByClassName('token attr-value')[0].innerHTML.replace(/\s+/g,' ').trim();

            });

            // Data Attributes
            for (var i = 0; i < children.length; i++) {

                var optionValue = children[i].value;

                var messageOption = children[i].dataset.message;
                var messageOptionHas = children[i].hasAttribute('data-message');
                var messageId = document.getElementById('message_' + inputID);

                var requireOption = children[i].dataset.require;
                var requireOptionHas = children[i].hasAttribute('data-require');
                var requireId = document.getElementById('message-require_' + inputID);
                var requireMessage = 'This component doesnt include the phrase: ' + requireOption;

                var displayOption = children[i].dataset.display;
                var displayOptionHas = children[i].hasAttribute('data-display');

                if (optionValue == this.value) {

                    // data-message
                    if (messageOptionHas) {
                        if (document.getElementById('alert').contains(messageId)) {
                            messageId.innerHTML = messageOption;
                        } else {
                            document.getElementById('alert').insertAdjacentHTML('beforeend', '<div id="message_' + inputID + '" class="protosite-alert">' + messageOption + '</div>');
                        }
                    } else {
                        if (document.getElementById('alert').contains(messageId)) {
                            document.getElementById('alert').removeChild(messageId);
                        }
                    }

                    // data-require
                    if (document.getElementById(textInput).value.includes(requireOption)) {
                        requireString = requireOption;
                        testit = inputID;
                    } else {
                        if (requireOptionHas) {
                            if (document.getElementById('alert').contains(requireId)) {
                                requireId.innerHTML = requireMessage;
                            } else {
                                document.getElementById('alert').insertAdjacentHTML('beforeend', '<div id="message-require_' + inputID + '" class="protosite-alert">' + requireMessage + '</div>');
                            }
                            requireString = requireOption;
                            testit = inputID;
                        } else {
                            if (document.getElementById('alert').contains(requireId)) {
                                document.getElementById('alert').removeChild(requireId);
                            }
                            requireString = null;
                            testit = null;
                        }
                    }

                    // data-display
                    if (displayOptionHas) {
                        document.getElementById(displayOption).style.display = 'table-row';
                        var displayOptionSource;
                        var displayInputId;
                        displayOptionSource = displayOption;
                        displayInputId = inputID;

                        var selectedOptionID = document.getElementById(displayOption).getElementsByTagName('select')[0].id;
                        var selectedOption = document.getElementById(displayOption).getElementsByTagName('option')[0].dataset.require;
                        var selectedOptionHas = document.getElementById(displayOption).getElementsByTagName('option')[0].hasAttribute('data-require');
                        var selectedId = document.getElementById('message-require_' + selectedOptionID);
                        var selectedMessage = 'This component doesnt include the phrase: ' + selectedOption;


                        if (document.getElementById(textInput).value.includes(selectedOption)) {
                            selectedString = selectedOption;
                            selectedTest = selectedOptionID;
                        } else {
                            if (selectedOptionHas) {
                                if (document.getElementById('alert').contains(selectedId)) {
                                    selectedId.innerHTML = selectedMessage;
                                } else {
                                    document.getElementById('alert').insertAdjacentHTML('beforeend', '<div id="message-require_' + selectedOptionID + '" class="protosite-alert">' + selectedMessage + '</div>');
                                }
                                selectedString = selectedOption;
                                selectedTest = selectedOptionID;
                            } else {
                                if (document.getElementById('alert').contains(selectedId)) {
                                    document.getElementById('alert').removeChild(selectedId);
                                }
                                selectedString = null;
                                selectedTest = null;
                            }
                        }

                        var p = 0;
                        while (p < children.length) {
                            p++;

                            if ((p - 1) != i) {
                                var displayOptionSiblings = children[(p - 1)].dataset.display;

                                if (displayOptionSiblings != displayOption) {
                                    document.getElementById(displayOptionSiblings).style.display = 'none';

                                    // Remove other values
                                    var displayOptionSiblingsId = document.getElementById(displayOptionSiblings);
                                    var selectId = displayOptionSiblingsId.getElementsByTagName('select')[0];
                                    var selectOptions = displayOptionSiblingsId.getElementsByTagName('select')[0].children;

                                    for (var q = 0; q < selectOptions.length; q++) {
                                        var selectOptionValue = selectId.getElementsByTagName('option')[q].value;

                                        if (getComponent.classList.contains(selectOptionValue)) {

                                            // Code Sample
                                            document.getElementById('language-markup').innerHTML = document.getElementById('language-markup').innerHTML.replace(selectOptionValue, '');

                                            // Component
                                            setTimeout(getComponent.classList.remove(selectOptionValue), 3000);

                                            // Input
                                            selectId.selectedIndex = 0;

                                            // Alert
                                            if (document.getElementById('alert').contains(document.getElementById('message-require_' + selectId.id))) {
                                                document.getElementById('alert').removeChild(document.getElementById('message-require_' + selectId.id));
                                            }

                                        }

                                    }

                                }
                            }
                        }
                    } else {
                        if (inputID == displayInputId) {
                            document.getElementById(displayOptionSource).style.display = 'none';
                        }
                    }

                }

            }

        });
    });
}

// Set Attribute
function addAttribute(inputID, componentID, attribute) { // eslint-disable-line no-unused-vars
    var initialInput = document.getElementById(inputID).value;
    document.getElementById(inputID).onkeyup = function() {
        var getInput = document.getElementById(inputID).value;
        var getComponent = document.getElementsByClassName(componentID)[0];
        var getCodeSample = document.getElementById('language-markup').innerHTML;
        var attributeMarkup = '<span class="token attr-name">' + attribute + '</span>';
        var updateCodeSample;

        if (getInput != null && getInput.length > 0) {
            if (getCodeSample.includes(inputID + '_replace-attribute')) {
                document.getElementById(inputID + '_replace-text').innerHTML = getInput;
            } else if (getCodeSample.includes(attributeMarkup)) {
                updateCodeSample = getCodeSample.replace('<span class="token attr-name">' + attribute + '</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>' + initialInput + '<span class="token punctuation">"</span></span>', '<span id="' + inputID + '_replace-attribute"><span class="token attr-name">' + attribute + '</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span id="' + inputID + '_replace-text" class="token attr-value">' + getInput + '</span><span class="token punctuation">"</span></span></span>');
                document.getElementById('language-markup').innerHTML = updateCodeSample;
            } else {
                var testString = '<span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>' +  componentID;
                updateCodeSample = getCodeSample.replace(testString, '<span id="' + inputID + '_replace-attribute"><span class="token attr-name">' + attribute + '</span><span class="token punctuation">="</span><span id="' + inputID + '_replace-text" class="token attr-value">' + getInput + '</span><span class="token punctuation">" </span></span>' + testString );
                document.getElementById('language-markup').innerHTML = updateCodeSample;
            }
            getComponent.setAttribute(attribute, getInput);
        } else {
            if(document.getElementById(inputID + '_replace-attribute')) {
                document.getElementById(inputID + '_replace-attribute').outerHTML = '';
            } else if (getCodeSample.includes(attributeMarkup)) {
                updateCodeSample = getCodeSample.replace('<span class="token attr-name">' + attribute + '</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>' + '#' + '<span class="token punctuation">"</span></span>', '');
                document.getElementById('language-markup').innerHTML = updateCodeSample;
            }
            getComponent.removeAttribute(attribute);
        }
    };
}

// Toggle Attribute
// toggleAttribute(inputID, componentID, attribute)
// toggleAttribute('card-meta', 'mzp-c-card-content', '<p class="mzp-c-card-meta">6 hours ago</p>')

// Button Toggle
function attributeReplace(inputID) { // eslint-disable-line no-unused-vars
    var buttonLinkOn = document.getElementById('button-link-on');
    var buttonLinkOff = document.getElementById('button-link-off');
    var tagOpenCurrent = '<span class="token tag"><span class="token punctuation">&lt;</span>button</span>';
    var tagOpenNew = '<span class="token tag"><span class="token punctuation">&lt;</span>a</span><span id="button-url_replace-attribute"><span class="token attr-name"> href</span><span class="token punctuation">="</span><span id="button-url_replace-text" class="token attr-value">#</span><span class="token punctuation">"</span></span>';
    var tagCloseCurrent = '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>';
    var tagCloseNew = '<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>';

    buttonLinkOn.addEventListener('change', function () {
        if (buttonLinkOn.checked) {
            if (buttonLinkOn.hasAttribute('data-display')) { //data-display
                var getCodeSample = document.getElementById('language-markup').innerHTML;
                document.getElementById(buttonLinkOn.dataset.display).style.display = 'table-row';
                document.getElementById('language-markup').innerHTML = getCodeSample.replace(tagOpenCurrent, tagOpenNew).replace(tagCloseCurrent, tagCloseNew);
            }
        }
    });

    buttonLinkOff.addEventListener('change', function () {
        if (buttonLinkOff.checked) {

            var getCodeSample = document.getElementById('language-markup').innerHTML;
            document.getElementById(buttonLinkOn.dataset.display).style.display = 'none';
            document.getElementById('language-markup').innerHTML = getCodeSample.replace('<span class="token tag"><span class="token punctuation">&lt;</span>a</span>', tagOpenCurrent).replace(tagCloseNew, tagCloseCurrent);
            document.getElementById('button-url_replace-attribute').outerHTML = '';
        }
    });
}
