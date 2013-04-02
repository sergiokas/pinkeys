# Primitive makefile for including just required files in the distribution.
# @requires jsmin (http://www.crockford.com/javascript/jsmin.html)
# @requires zip
FILES=background.js install.js manifest.json
DIST=dist
DIRS=images

dist: clean copy minify pack

copy:
	@mkdir $(DIST)
	@echo "### Copying files..." 
	@cp -R $(DIRS) $(FILES) $(DIST)

minify:
	@echo "### Minifying JS..."
	@cat $(DIST)/background.js | jsmin > $(DIST)/background.min.js
	@mv $(DIST)/background.min.js $(DIST)/background.js
	@cat $(DIST)/install.js | jsmin > $(DIST)/install.min.js
	@mv $(DIST)/install.min.js $(DIST)/install.js
pack:
	@echo "### Packing..."
	@cd $(DIST); zip -r dist.zip *

clean:
	@rm -rf $(DIST)
