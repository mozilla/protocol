// create namespace
if (typeof Mozilla === 'undefined') {
    var Mozilla = {};
}

(function() {
    'use strict';

    var Menu = {};
    var _hoverTimeout;
    var _mqWideNav;

    Menu.open = function(el) {
        el.classList.add('selected');
    };

    Menu.close = function() {
        var current = document.querySelectorAll('.mzp-c-menu-category.selected');

        for (var i = 0; i < current.length; i++) {
            current[i].classList.remove('selected');
        }
    };

    Menu.toggle = function(el) {
        el.classList.toggle('selected');
    };

    Menu.onMouseEnter = function(e) {
        clearTimeout(_hoverTimeout);

        // Only open the panel if the user shows hover intent
        _hoverTimeout = setTimeout(function() {
            Menu.close();
            Menu.open(e.target);
        }, 150);
    };

    Menu.onMouseLeave = function() {
        // Clear hover intent timer.
        clearTimeout(_hoverTimeout);

        _hoverTimeout = setTimeout(function() {
            Menu.close();
        }, 150);
    };

    Menu.onFocus = function(e) {
        // prevent mouse events from firing on touch devices.
        if (e.type === 'touchstart') {
            e.preventDefault();
        }

        Menu.close();
        Menu.open(e.target.parentNode);
    };

    Menu.onFocusOut = function() {
        var self = this;

        /**
         * After an element loses focus, `document.activeElement` will always be `body` before
         * moving to the next element. A `setTimeout` of `0` circumvents this issue as it
         * re-queues the JavaScript to run at the end of the current excecution.
         */
        setTimeout(function() {
            if (!self.contains(document.activeElement)) {
                Menu.close();
            }
        }, 0);
    };

    Menu.onClickWide = function(e) {
        e.preventDefault();
    };

    Menu.onClickSmall = function(e) {
        e.preventDefault();
        Menu.toggle(e.target.parentNode);
    };

    Menu.handleState = function() {
        _mqWideNav = matchMedia('(min-width: 768px)');

        _mqWideNav.addListener(function(mq) {
            if (mq.matches) {
                Menu.unbindEventsSmall();
                Menu.bindEventsWide();
            } else {
                Menu.unbindEventsWide();
                Menu.bindEventsSmall();
            }

            Menu.closeCurrent();
        });

        if (_mqWideNav.matches) {
            Menu.bindEventsWide();
        } else {
            Menu.bindEventsSmall();
        }
    };

    Menu.bindEventsWide = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-has-drop-down');
        var link;

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('mouseenter', Menu.onMouseEnter, false);
            items[i].addEventListener('mouseleave', Menu.onMouseLeave, false);

            link = items[i].querySelector('.mzp-c-menu-title');
            link.addEventListener('touchstart', Menu.onFocus, false);
            link.addEventListener('focus', Menu.onFocus, false);
            link.addEventListener('click', Menu.onClickWide, false);
        }

        document.querySelector('.mzp-c-menu').addEventListener('focusout', Menu.onFocusOut, false);
    };

    Menu.unbindEventsWide = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-has-drop-down');
        var link;

        for (var i = 0; i < items.length; i++) {
            items[i].removeEventListener('mouseenter', Menu.onMouseEnter, false);
            items[i].removeEventListener('mouseleave', Menu.onMouseLeave, false);

            link = items[i].querySelector('.mzp-c-menu-title');
            link.removeEventListener('touchstart', Menu.onFocus, false);
            link.removeEventListener('focus', Menu.onFocus, false);
            link.removeEventListener('click', Menu.onClickWide, false);
        }

        document.querySelector('.mzp-c-menu').removeEventListener('focusout', Menu.onFocusOut, false);
    };

    Menu.bindEventsSmall = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-has-drop-down .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener('click', Menu.onClickSmall, false);
        }
    };

    Menu.unbindEventsSmall = function() {
        var items = document.querySelectorAll('.mzp-c-menu-category.mzp-has-drop-down .mzp-c-menu-title');

        for (var i = 0; i < items.length; i++) {
            items[i].removeEventListener('click', Menu.onClickSmall, false);
        }
    };

    /**
     * Basic menu is CSS only.
     * Hover is supported on wide viewports.
     * For small viewports, full navigation is listed with no requirement for interaction.
     */
    Menu.initBasic = function() {
        document.querySelector('.mzp-c-menu').classList.add('mzp-c-menu-basic');
    };

    Menu.isSupported = function() {
        return typeof window.matchMedia !== 'undefined' &&
               window.matchMedia('all').addListener &&
               'classList' in document.createElement('div');
    };

    Menu.init = function() {
        if (Menu.isSupported) {
            Menu.handleState();
        } else {
            Menu.initBasic();
        }
    };

    Menu.init();

    window.Mozilla.Menu = Menu;

})();
