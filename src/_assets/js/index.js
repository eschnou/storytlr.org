/**
 * Page controller for homepage
 * 
 * @module index
 * @author Alard Weisscher
 * @namespace pages
 */

ST.namespace('ST.pages.index');
ST.pages.index = function() {
  
  var face = 0;
  
  function updateFace() {
    // remove faces
    $('#face').fadeOut('fast', function() {
      $(this).removeClass('icon-cowboy').removeClass('icon-lady').removeClass('icon-jew').removeClass('icon-helmet').removeClass('icon-darth-vader').removeClass('icon-man-glasses').removeClass('icon-man-sunglasses');
      if (face == 0) {
        $('#face').addClass('icon-cowboy');
      } else if (face == 1) {
        $('#face').addClass('icon-lady');
      } else if (face == 2) {
        $('#face').addClass('icon-jew');
      } else if (face == 3) {
        $('#face').addClass('icon-helmet');
      } else if (face == 4) {
        $('#face').addClass('icon-darth-vader');
      } else if (face == 5) {
        $('#face').addClass('icon-man-glasses');
      } else if (face == 6) {
        $('#face').addClass('icon-man-sunglasses');
      }
      $('#face').fadeIn();
      face++;
      if (face == 7) {
        face = 0;
      }
    })
  }
  
  /**
   * Initialize when page is loaded
   * 
   * @method init
   * @private
   */
  function init() {
    setInterval(function() {
      updateFace();
    }, 4000);
  }

  /**
   * Public functions
   */
  return {
    init : init
  };
};

/**
 * Trigger init function when page is loaded
 */
$(document).ready(function() {
  ST.pages.index().init();
});