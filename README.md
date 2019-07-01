# OU ICE 5

Documentation is at http://the-open-university.github.io/ouice

## Installing
All the core assets for the theme live within the `/gui` folder, and this can easily be [downloaded directly from this repository](https://github.com/the-open-university/ouice/archive/master.zip).

You are free to simply copy these files to where you need them.

The `/gui/styles.css` is the primary stylesheet that `@imports` all of the various subcomponents.

You could use a build process to concatenate and minify these files into a single file but this project does not provide any of the mechanisms for this.

The package is not registered with NPM.

## Documentation
The [documentation site](http://the-open-university.github.io/ouice) is all contained within the `/docs` folder with the exception of the root `index.html` file.

The documetation is completely static with no build process. Originally the project was using Jekyll but this was too slow while developing the site so this was the simple compromise. It is a little fiddly doing mass changes to headers and footers, as these need to be done via find and replace.
