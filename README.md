📐 The Grid
=============

For a demo visit http://grid.koole.io. There is no other documentation, so I recommend you use your favorite browsers devtools.

Import the grid into your sass files using:

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