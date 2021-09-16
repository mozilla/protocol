# 4.1.0

* **logos** Remove transparent whitespace to right of Pocket wordmark PNGs (Fix #59)

## migration tips

* The Pocket wordmark PNGs have changed dimensions. If you've specified a size where this wordmark appears, update to the new width.

# 4.0.0

* **logos** Add VPN assets (#49)
* **logos** Add Focus assets (Fix #51)
* **logos** (breaking) Add full size options to Mozilla assets (Fix #54)
* **logos** (breaking) Update Pocket logo sizes (Fix #55)

## migration tips

* Updated Mozilla file names
    * black.svg -> logo-word-hor.svg (the dimensions has increased, check you have coded a width where used)
    * white.svg -> logo-word-hor-white.svg (the dimensions has increased, check you have coded a width where used)
    * black.png -> logo-word-hor-xs.png
    * black@2x.png -> logo-word-hor-sm.png
    * black@3x.png -> logo-word-hor-md.png
    * white.png -> logo-word-hor-white-xs.png
    * white@2x.png -> logo-word-hor-white-sm.png
    * white@3x.png -> logo-word-hor-white-md.png
* Updated Pocket file names
    * logo-word-horz-white.svg -> logo-word-hor-white.svg
    * logo-word-horz.svg -> logo-word-hor.svg
    * pocket.svg -> logo.svg
    * the dimensions have increased for all SVG files, check you have coded a width where used

# 3.0.2

* **icons** Add a set of brand icons/spot illustration in a variety of colors (#47)

# 3.0.1

* **other** Add zap SVGs (#44)
* **logos** Add Monitor brand open graph image (#42)
* **logos** Add master brand open graph image (#39)

# 3.0.0

* **logos** Move to standard sized logos for Firefox browsers and products
* **logos** Remove Focus logos
* **logos** Remove duplicate `social/icons` folder in favour of `/icons/social`
* **logos** Add Pocket logo+wordmarks as SVGs
* **logos** Update `/icons/social/firefox` icons to new browser design
* **other** Add Open Graph images for products

## migration tips

* If you were using the old browser logos files you can swap them with the `lg` versions of the new ones, they are the same dimensions
* If you need the focus logos, you will need to host them locally
* If you were using the social icons in the root folder you can update to use the new folder location, there have not been any name changes.

# 2.1.1.

* **icons** Add social media icons back
* **icons** Add white versions of some UI assets

# 2.1.0

* **logos** Update Firefox Beta, Developer and Nightly logos (#30)

# 2.0.0

* **icons** Replaced existing icons with new icon style

# 1.0.1

#Features

* **icons** Added header navigation icons

# 1.0.0

## Features

* **icons** Added new menu, close and expand icons (black & white variants).
* **icons** Removed old close icon.
* **icons** Removed old kebab menu icon.

# 0.0.5

## Features

* **logos** Added Pocket logo
* **icons** Added menu panel arrow icon
* **backgrounds** Added hero curve SVG mask

# 0.0.4

## Features

* **logos** Added firefox logos (release, beta, dev edition, nightly, focus) (#2)

# 0.0.3
* **icons** Remove png support for icons

# 0.0.2

## Features

* **logos** Added mozilla logo
* **icons/ui** Added UI icons (audio, video, close, kebab)
* **icons/social** Added mozilla and protocol icons

# 0.0.1

## Features

* **icons** Added support for social icons (facebook, firefox, github, instagram, pocket, twitter, and youtube)
