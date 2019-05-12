ou-header and footer v2.0

We need to delete the assets folder once Kentico is upgraded


index.shtm also needs to go somewhere better as it is a test harness
gui needs refactoring into the OU Standard of css and img
Any scripts we write should go into js

The idea this time is that the header contains everything, and the css and js does the triggering. In order to force the clients PC to update when we update the css/js, we modify ou-head.html incrementing the value after the css/js call

eg


<link rel="stylesheet" type="text/css" href="gui/styles.css?" media="screen, projection" />
<link rel="stylesheet" type="text/css" href="gui/header-footer.css?1" media="screen, projection" />
<script type="text/javascript" src="js/header.js?1"></script>

becomes

<link rel="stylesheet" type="text/css" href="gui/styles.css?2" media="screen, projection" />
<link rel="stylesheet" type="text/css" href="gui/header-footer.css?2" media="screen, projection" />
<script type="text/javascript" src="js/header.js?2"></script>

This forces the clients browser to refresh and  use the latest versions of the files.

For bonus points it would be lovely if the build could increment this number for us.


To set up your PC.  
In IIS - Point a virtual directory at OU.Digital\OU.Digital\OuDigital and name it oudigital
In IIS - Point a virtual directory at OU.Digital\testharness and name it oudigital-test

You should then be able to visit http://localhost/oudigital-test/index.shtm and get a working page