📐 The Grid
=============
The Grid is a basic and easily customizable grid framework based on flexbox.

For a demo visit http://grid.koole.io. There is no other documentation, so I recommend you use your favorite browsers devtools.

## Installation
The Grid is available on the following package managers:

| Source           |                               |
|:-----------------|:------------------------------|
| npm              | `npm install thegrid --save`  |
| yarn             | `yarn add thegrid`            |

### Sass

Import The Grid into your sass files using:

```sass
@import "~thegrid"
```

Change settings by setting these variables in your sass file:

```sass
$grid-columns: 12
$grid-breakpoints: ("0px": "", "600px": "-sm", "850px": "-md", "1024px": "-lg")

$grid-gutter-width: 20px
$grid-container-width: 90%
$grid-container-max-width: 1200px
```

These settings shown above are the default settings, and can be used as a basic drop-in replacement for the Bootstrap 3 grid.

### CSS

When installed using npm or yarn, a version of The Grid compiled to CSS with the default settings shown above can be found in:

```
node_modules/thegrid/dist/grid.css
```

A minified and prefixed version of this file can be found in:

```
node_modules/thegrid/dist/grid.min.css
```

If you just want to load the grid on your website, you can get the latest version from the unpkg CDN like this:
```html
<link rel="stylesheet" href="https://unpkg.com/thegrid/dist/grid.min.css" />
```

However, to prevent your website from breaking I recommend you to at least pin a version like so:
```html
<link rel="stylesheet" href="https://unpkg.com/thegrid@1.1.0/dist/grid.min.css" />
```
