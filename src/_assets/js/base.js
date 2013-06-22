/**
 * The base module declares the global namespace
 * 
 * @module base
 * @author Alard Weisscher
 * @global ST
 */

// create the namespace for the complete site
// check if the ST namespace already exists and if not, create it
var ST = ST || {};

/**
 * Creates a namespace for a module
 * 
 * @method namespace
 * @return {Object} module namespace
 */
ST.namespace = function(namespaceString) {
  var parts = namespaceString.split('.'), parent = window, currentPart = '', i, partLength;
  partLength = parts.length;
  
  for (i = 0; i < partLength; i++) {
    currentPart = parts[i];
    parent[currentPart] = parent[currentPart] || {};
    parent = parent[currentPart];
  }

  return parent;
};