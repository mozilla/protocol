An expandable menu used in the [Navigation](/patterns/organisms/navigation.html) organism, consisting of [Menu Items](/patterns/molecules/menu.html#menu-item) and an optional [Card](/patterns/molecules/card.html#extra-small-card) molecule.

- On wide viewports a menu's content is displayed when hovering or focusing on a menu link.
- On small viewports a menu's content is expanded/collapsed when clicking on a menu link.
- Menu content should consist of two lists of one or more [Menu Items](/patterns/molecules/menu.html#menu-item).
- An Extra Small Card can also be included inside a menu using the `mzp-has-card` class. Cards are only visible on wide viewports.
- A menu can also feature regular links that do not expand on hover/click by omitting the `mzp-has-drop-down` and  `mzp-js-expandable` classes.
- A menu with a state class of `mzp-is-basic` is accessible without JavaScript. This state class gets replaced with `mzp-is-enhanced` when JS is executed.
- A menu can be initialized using `Mzp.Menu.init(options)`, where `options` is an Object with the following properties.
- `onMenuOpen` [Function] callback when a menu is opened (optional).
- `onMenuClose` [Function] callback when a menu is closed (optional).
- `onMenuButtonClose` [Function] callback when a menu close button is clicked (optional).
