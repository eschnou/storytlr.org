/**
 * URL utilities
 * 
 * @module url
 * @author Alard Weisscher
 * @namespace util
 */

VF.namespace('VF.util.url');
VF.util.url = function() {
  
  /**
   * Return only the filename from the present url
   * 
   * @method getFileName
   * @private
   */
  function getFileName() {
    //this gets the full url
    var url = document.location.href;
    //this removes the anchor at the end, if there is one
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    //this removes the query after the file name, if there is one
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    //this removes everything before the last slash in the path
    url = url.substring(url.lastIndexOf("/") + 1, url.length);
    //return
    return url;
  }
  
  /**
   * Return only the path from the present url
   * 
   * @method getPath
   * @private
   */
  function getPath() {
    //this gets the full url
    var url = document.location.href, path;
    // first strip 
    path = url.substr(url.indexOf('//') + 2, url.length - 1);
    path = path.substr(path.indexOf('/'), path.lastIndexOf('/') - path.indexOf('/') + 1);
    //return
    return path;
  }
  
  /**
   * Parses the url, extracts the variables and returns them as an array
   * 
   * @method getUrlVars
   * @return {Array} vars An associative array with all the variables in the url
   * @private
   */
  function getUrlVars() {
    var vars = [], hash, i, length, hashes;
    hashes = window.location.href.slice(
        window.location.href.indexOf('?') + 1).split('&');

    length = hashes.length;
    for ( i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }

    return vars;
  }

  /**
   * Public functions
   */
  return {
    getUrlVars : getUrlVars,
    getFileName : getFileName,
    getPath : getPath
  };
};