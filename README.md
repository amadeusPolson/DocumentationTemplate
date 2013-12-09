DocumentationTemplate
=====================

A template for building documentation that looks nice and works well with displaying screenshots.  This repository
will be used as a submodule to the actual documentation.

Notes when adding or modifying the actual html documentation:
 - The javascript assumes each <li> has only a single <h2> element.  If there are more, 
	then the step logic won't auto-generate correctly.