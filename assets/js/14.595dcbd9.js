(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{374:function(e,a,t){"use strict";t.r(a);var r=t(25),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"change-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-log"}},[e._v("#")]),e._v(" Change log")]),e._v(" "),t("h2",{attrs:{id:"v0-7-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-5"}},[e._v("#")]),e._v(" v0.7.5")]),e._v(" "),t("p",[e._v("Released: 10 July, 2020")]),e._v(" "),t("h3",{attrs:{id:"fixed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Figma/Sketch: Gradient strokes")]),e._v(" "),t("li",[e._v("Figma: Skewed parametric shapes (line 502)")]),e._v(" "),t("li",[e._v("Figma: Rounded parametric shapes")]),e._v(" "),t("li",[e._v("Figma: skip empty vector layers")]),e._v(" "),t("li",[e._v("Reworked build system for smarter loading of Ae scripting system and better support for Windows machines")]),e._v(" "),t("li",[e._v("Misc transfer bugs")])]),e._v(" "),t("h3",{attrs:{id:"changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Sketch: removed image fill exporting. This has never transferred correctly so it's more effective to do it manually.")])]),e._v(" "),t("h2",{attrs:{id:"v0-7-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-4"}},[e._v("#")]),e._v(" v0.7.4")]),e._v(" "),t("p",[e._v("Released: 29 June, 2020")]),e._v(" "),t("h3",{attrs:{id:"added"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Ae panel now checks the version of Sketch/Figma’s AEUX and points to download an update")])]),e._v(" "),t("h3",{attrs:{id:"fixed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-2"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Rewritten color conversion")]),e._v(" "),t("li",[e._v("Sketch image exporting")]),e._v(" "),t("li",[e._v("Messaging when Sketch fails to export images")]),e._v(" "),t("li",[e._v("Ae footage reloading")])]),e._v(" "),t("h3",{attrs:{id:"removed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),t("ul",[t("li",[e._v("Sketch image fills - conflict with image layer exporting")]),e._v(" "),t("li",[e._v("Sketch pattern fill exporting")])]),e._v(" "),t("h2",{attrs:{id:"v0-7-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-3"}},[e._v("#")]),e._v(" v0.7.3")]),e._v(" "),t("p",[e._v("Released: 18 June, 2020")]),e._v(" "),t("h3",{attrs:{id:"added-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-2"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Figma checkbox to export an image reference for manual alignment")]),e._v(" "),t("li",[e._v("Figma button to rasterize groups to images. Different from the native Rasterize action in that it creates a 4x image (not actual pixels) and adds image on top (does not remove the original art).")]),e._v(" "),t("li",[e._v("Sketch/Figma image export path is now persistent during the same session and will not ask where to save every time. To reset this path, close and reopen the Sketch or Figma panel.")]),e._v(" "),t("li",[e._v("Ae panel no longer needs to be open to listen for messages from Figma/Sketch")])]),e._v(" "),t("h3",{attrs:{id:"fixed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-3"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Figma boolean shape on multi-path compound layers (icons)")]),e._v(" "),t("li",[e._v("Figma nested boolean shape alignment –more than 2 levels of nesting will become misaligned and should be flattened")]),e._v(" "),t("li",[e._v("Figma stroked text without fills")]),e._v(" "),t("li",[e._v("Flatten is smarter – will outline text layers and find rounded rectanges")]),e._v(" "),t("li",[e._v("Sketch image export spinner didn’t clear")])]),e._v(" "),t("h2",{attrs:{id:"v0-7-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-2"}},[e._v("#")]),e._v(" v0.7.2")]),e._v(" "),t("p",[e._v("Released: 19 Febuary, 2020")]),e._v(" "),t("h3",{attrs:{id:"added-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-3"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Figma plugin is now available to Googlers under Plugins>Google")]),e._v(" "),t("li",[e._v("Image transfer limit upgraded to 200mb")]),e._v(" "),t("li",[e._v("Sketch panel flash. If you misplace the AEUX panel, using the keyboard shortcut (CMD+Shift+Z) a second time will flash the panel.")]),e._v(" "),t("li",[e._v("More intuitive messaging for failures")])]),e._v(" "),t("h3",{attrs:{id:"fixed-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-4"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Windows image exporting (error on line 691)")]),e._v(" "),t("li",[e._v("Ae app switching opened old versions if using the prerelease beta")]),e._v(" "),t("li",[e._v("Sketch dark mode")]),e._v(" "),t("li",[e._v("Figma error: no background color")])]),e._v(" "),t("h2",{attrs:{id:"v0-7-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-1"}},[e._v("#")]),e._v(" v0.7.1")]),e._v(" "),t("p",[e._v("Released: 06 Febuary, 2020")]),e._v(" "),t("h3",{attrs:{id:"added-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-4"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Ae new comp duration entry")]),e._v(" "),t("li",[e._v("Ae new comp frame-rate entry")]),e._v(" "),t("li",[e._v("Loading spinner to Figma and Sketch")])]),e._v(" "),t("h3",{attrs:{id:"fixed-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-5"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Figma boolean shape alignment")]),e._v(" "),t("li",[e._v("Figma nested frame alignment")]),e._v(" "),t("li",[e._v("Figma gradient point opacity")])]),e._v(" "),t("h2",{attrs:{id:"v0-7-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-0"}},[e._v("#")]),e._v(" v0.7.0")]),e._v(" "),t("p",[e._v("Released: 28 January, 2020")]),e._v(" "),t("h3",{attrs:{id:"changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changes"}},[e._v("#")]),e._v(" Changes")]),e._v(" "),t("ul",[t("li",[e._v("Rewrite of the Sketch UI system to support Catalina")]),e._v(" "),t("li",[e._v("Figma in-app plugin")]),e._v(" "),t("li",[e._v("New data transfer system")])]),e._v(" "),t("h3",{attrs:{id:"removed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed-2"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),t("ul",[t("li",[e._v("Support for figma.aeux.io web converter")]),e._v(" "),t("li",[e._v("Ae panel file drop")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-9"}},[e._v("#")]),e._v(" v0.6.9")]),e._v(" "),t("p",[e._v("Released: 03 June, 2019")]),e._v(" "),t("h3",{attrs:{id:"added-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-5"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("New logo")])]),e._v(" "),t("h4",{attrs:{id:"ae"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ae"}},[e._v("#")]),e._v(" Ae")]),e._v(" "),t("ul",[t("li",[e._v("More open precomp/unprecomp behavior to support non-AEUX grouping")])]),e._v(" "),t("h4",{attrs:{id:"figma"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#figma"}},[e._v("#")]),e._v(" Figma")]),e._v(" "),t("ul",[t("li",[e._v("Non-filled shape support")]),e._v(" "),t("li",[e._v("Image downloading in browser as a zip file")]),e._v(" "),t("li",[e._v("figma.aeux.io")])]),e._v(" "),t("h3",{attrs:{id:"fixed-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-6"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("h4",{attrs:{id:"sketch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sketch"}},[e._v("#")]),e._v(" Sketch")]),e._v(" "),t("ul",[t("li",[e._v("Prevented endless spinning when no layers selected")])]),e._v(" "),t("h4",{attrs:{id:"ae-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ae-2"}},[e._v("#")]),e._v(" Ae")]),e._v(" "),t("ul",[t("li",[e._v("No longer breaks with empty boolean shapes")]),e._v(" "),t("li",[e._v("Empty path objects wont crash the import")]),e._v(" "),t("li",[e._v("Un-precomp preserves parenting hierarchy when moving layers between comps")]),e._v(" "),t("li",[e._v("Smarter check before removing a precomp from the project if it exists multiple times in the current comp")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-8"}},[e._v("#")]),e._v(" v0.6.8")]),e._v(" "),t("p",[e._v("Released: 15 April, 2019")]),e._v(" "),t("h3",{attrs:{id:"fixed-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-7"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Sketch 54 support")]),e._v(" "),t("li",[e._v("Catch for missing symbols in Sketch")]),e._v(" "),t("li",[e._v("Catch for bug on line 1193")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-7"}},[e._v("#")]),e._v(" v0.6.7")]),e._v(" "),t("p",[e._v("Released: 25 February, 2019")]),e._v(" "),t("h3",{attrs:{id:"added-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-6"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Ae backward compatibility to CC2014. Note: the Figma converter requires CC2018+ to download images through Ae.")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-6"}},[e._v("#")]),e._v(" v0.6.6")]),e._v(" "),t("p",[e._v("Released: 15 February, 2019")]),e._v(" "),t("h3",{attrs:{id:"added-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-7"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Ae panel image downloading for Figma. The online "),t("a",{attrs:{href:"https://aeux-55e58.firebaseapp.com",target:"_blank"}},[e._v("Figma converter")]),e._v(" generates images (if needed) and these image URLs are downloaded in the JSON file. Once imported into Ae, the panel downloads these images directly to a directory you specify. This process allows direct access to your images without granting the converter app or Google any access to your data.")]),e._v(" "),t("li",[e._v("While still lacking support for vertical text alignment and open paths (like horizontal rules, simple stroked lines and other open shapes without fills), the Figma converter is available for testing.")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-5"}},[e._v("#")]),e._v(" v0.6.5")]),e._v(" "),t("p",[e._v("Released: 15 January, 2019")]),e._v(" "),t("h3",{attrs:{id:"added-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-8"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Group dropshadows - only visible if you Precomp Groups")]),e._v(" "),t("li",[e._v("Sketch menu items which allow shortcuts to be added if that's how you like to work")]),e._v(" "),t("li",[e._v("Support for relative image paths")]),e._v(" "),t("li",[e._v("Adding support for upcoming Figma integration")]),e._v(" "),t("li",[e._v("In-panel help menu")]),e._v(" "),t("li",[e._v("Support for Nested Boolean shapes in Sketch")])]),e._v(" "),t("h3",{attrs:{id:"changed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-2"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Revised Sketch and AE panel UI (design by "),t("a",{attrs:{href:"https://www.instagram.com/alt.danil/",target:"_blank"}},[e._v("Danil Altynov")]),e._v(")")]),e._v(" "),t("li",[e._v("New Symbol instance will named with its layer name instead of symbol name")]),e._v(" "),t("li",[e._v("Blurs are stored as an array. Sketch supports only one but Figma can handle multiple.")]),e._v(" "),t("li",[e._v("Images added to comp are renamed with the layer name instead of the ugly id string")]),e._v(" "),t("li",[e._v("Right-click > Help goes to temporary help doc")])]),e._v(" "),t("h3",{attrs:{id:"removed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#removed-3"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),t("ul",[t("li",[e._v("The AE Window>Extension menu for Figma")])]),e._v(" "),t("h3",{attrs:{id:"fixed-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-8"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Error when creating a comp less that 4px high or wide")]),e._v(" "),t("li",[e._v("Bug with overrides that stalled the process")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-4"}},[e._v("#")]),e._v(" v0.6.4")]),e._v(" "),t("p",[e._v("Released: 19 November, 2018")]),e._v(" "),t("h3",{attrs:{id:"fixed-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-9"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Rounding error on new comps not on a pixel")]),e._v(" "),t("li",[e._v("Introduced bug where the Sketch panel didn't open")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-3"}},[e._v("#")]),e._v(" v0.6.3")]),e._v(" "),t("p",[e._v("Released: 15 November, 2018")]),e._v(" "),t("h3",{attrs:{id:"fixed-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-10"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Error on text with multiple line breaks")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-2"}},[e._v("#")]),e._v(" v0.6.2")]),e._v(" "),t("p",[e._v("Released: 08 October, 2018")]),e._v(" "),t("h3",{attrs:{id:"added-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-9"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Support for Sketch 52")])]),e._v(" "),t("h3",{attrs:{id:"changed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-3"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Removed support for Sketch < 52 - it’s way too hard to support older versions since Sketch changes their plugin API with every update")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-1"}},[e._v("#")]),e._v(" v0.6.1")]),e._v(" "),t("p",[e._v("Released: 01 October, 2018")]),e._v(" "),t("h3",{attrs:{id:"added-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-10"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Un-precompose button. Now groups in AE may be converted to precomps, and also converted back to regular layers in the main comp with a single click.")]),e._v(" "),t("li",[e._v("Support for images in Cloud libraries")])]),e._v(" "),t("h3",{attrs:{id:"changed-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-4"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Detach Symbols button originally recursively detached symbols which lead to unintended effects on nested symbols that were used in multiple symbols")]),e._v(" "),t("li",[e._v("Lots of code cleanup and commenting")]),e._v(" "),t("li",[e._v("Simplified shape layer creation functions that all start the same")]),e._v(" "),t("li",[e._v("Moved blending mode conversion into the Sketch side of the system to make AE’s layer building simpler. This will help with support for future design apps.")]),e._v(" "),t("li",[e._v("Simplified folder creation in Ae from 3 separate funcs down to one.")])]),e._v(" "),t("h3",{attrs:{id:"fixed-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-11"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Error when 3rd party tool docked on the canvas and trying to build to a selected comp")]),e._v(" "),t("li",[e._v("Error if unable to write gradient preset file to disk. Instead, it now opens the AE preferences that must be enabled.")]),e._v(" "),t("li",[e._v("Bug that failed to save the user’s state in the Ae panel")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-0"}},[e._v("#")]),e._v(" v0.6.0")]),e._v(" "),t("p",[e._v("Released: 04 September, 2018")]),e._v(" "),t("h3",{attrs:{id:"added-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-11"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("In-panel messaging to explain errors and inaccurate layer representation (Sketch and AE)")]),e._v(" "),t("li",[e._v("Ability to rename the exported .json file for multiple outputs without overwriting")]),e._v(" "),t("li",[e._v("Support for AE Text tracking greater than +/- 1000 with text animators")]),e._v(" "),t("li",[e._v("Support for blurs on shapes (not images because those are exported)")])]),e._v(" "),t("h3",{attrs:{id:"changed-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-5"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Refined Sketch var scope")]),e._v(" "),t("li",[e._v("Clearer copy for exported files")]),e._v(" "),t("li",[e._v("Improved stability for AE CC2018 CEP changes")]),e._v(" "),t("li",[e._v("Fixed a json unicode encoding error that replaced all punctuation with â")]),e._v(" "),t("li",[e._v("Better text leading")]),e._v(" "),t("li",[e._v("Set underlying mask layer to not visible to prevent extra pixels")]),e._v(" "),t("li",[e._v("Collapse transform for auto-precomped groups")]),e._v(" "),t("li",[e._v("Removed panel vertical scrollbar to feel more native")])]),e._v(" "),t("h2",{attrs:{id:"v0-5-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-5-8"}},[e._v("#")]),e._v(" v0.5.8")]),e._v(" "),t("p",[e._v("Released: 18 June, 2018")]),e._v(" "),t("h3",{attrs:{id:"added-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-12"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Auto-precomp of groups")]),e._v(" "),t("li",[e._v("Text transform to upper/lower case")]),e._v(" "),t("li",[e._v("Layer prep functions to better reproduce artboards")]),e._v(" "),t("li",[e._v("Text masking")]),e._v(" "),t("li",[e._v("Text flipping")]),e._v(" "),t("li",[e._v("Text rotation")])]),e._v(" "),t("h3",{attrs:{id:"changed-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-6"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Set background color of symbols")]),e._v(" "),t("li",[e._v("Depreciated addClipping() func")]),e._v(" "),t("li",[e._v("Corner radius improvements")]),e._v(" "),t("li",[e._v("Refined text alignment")])]),e._v(" "),t("h2",{attrs:{id:"v0-5-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-5-7"}},[e._v("#")]),e._v(" v0.5.7")]),e._v(" "),t("p",[e._v("Released: 04 June, 2018")]),e._v(" "),t("h3",{attrs:{id:"added-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-13"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("In-panel messaging system")]),e._v(" "),t("li",[e._v("New layer masking system")]),e._v(" "),t("li",[e._v("Push to AE system instead of copy/paste")]),e._v(" "),t("li",[e._v("AE panel preference auto saving system for sessions persistance")])]),e._v(" "),t("h3",{attrs:{id:"changed-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-7"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Precomp size integer rounding")]),e._v(" "),t("li",[e._v("Better text alignment")]),e._v(" "),t("li",[e._v("OS X system commands used to simplify plugin initialization (folders and files)")])]),e._v(" "),t("h2",{attrs:{id:"v0-5-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-5-6"}},[e._v("#")]),e._v(" v0.5.6")]),e._v(" "),t("p",[e._v("Released: 30 April, 2018")]),e._v(" "),t("h3",{attrs:{id:"added-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-14"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Sketch panel UI")]),e._v(" "),t("li",[e._v("AE layer build speed increase by hiding build comp")]),e._v(" "),t("li",[e._v("Sketch panel layer count")]),e._v(" "),t("li",[e._v("Ae progress bar while building")]),e._v(" "),t("li",[e._v("Inner shadow layer style")]),e._v(" "),t("li",[e._v("Support for Sketch cloud library symbols")]),e._v(" "),t("li",[e._v("Button to convert images to symbols to prevent Sketch export cutoff")]),e._v(" "),t("li",[e._v("Button to detach selected symbols")]),e._v(" "),t("li",[e._v("Flip and rotation for shapes, symbols, groups")]),e._v(" "),t("li",[e._v("Shape layer gradients")]),e._v(" "),t("li",[e._v("Symbol overrides for text and nested symbols")])]),e._v(" "),t("h3",{attrs:{id:"changed-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-8"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Full Sketch2AE rewrite based on the Sketch javascript API")]),e._v(" "),t("li",[e._v("Image exporting based on layer IDs to reduce redundancies")])])])}),[],!1,null,null,null);a.default=s.exports}}]);