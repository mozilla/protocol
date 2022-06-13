This container element sets the maximum width of content on the page, centers the column horizontally in the viewport, and includes some padding that prevents its contents from butting against the edges of the viewport or against other adjacent elements. The maximum width and spacing change at different responsive breakpoints to adapt to different viewport widths.

- The default container has a `max-width` of `1440px`.
- The container's width isn't explicit; it's a fluid box with a minimum width of `304px` and constrained to a maximum width that differs at different responsive breakpoints. If you want to know how wide this box is, the answer is: it depends.
- Side padding also adjusts at different breakpoints, with less padding in small windows and more padding in large windows.
- You can apply theme classes to set a max-width narrower than the default, to constrain the maximum width even in larger viewports.
    - `mzp-t-content-sm` : `432px`
    - `mzp-t-content-md` : `688px`
    - `mzp-t-content-lg` : `928px`
    - `mzp-t-content-xl` : `1152px`
- The content container features generous top and bottom padding, intended to establish a vertical rhythm between sections of a page. However, in some cases you may only want to define the content width and avoid the additional spacing above and below the container. For those cases you can use the class `mzp-t-content-nospace` to override the top and bottom padding (left and right padding remains).
- This container is often (but not always) inside another element that defines a full-width "tier" or horizontal section of a page, with this `mzp-l-content` inner container defining the column centered within that section. If you need a page section to have a "full bleed" background that extends to the edges of the window, apply that background to an outer container and not to `mzp-l-content`.

### No-nos
- Don't nest an `mzp-l-content` container element inside another one. The width and spacing adjusts to the viewport breakpoint so nested containers may do unpredictable things as the window size changes.
- Some Protocol components are intended to be full-width and already include `mzp-l-content` container as part of the component. Don't nest those components inside another `mzp-l-content` container.
