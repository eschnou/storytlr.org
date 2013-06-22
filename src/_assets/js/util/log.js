/**
 * Log function for the console
 * 
 * @method log
 * @parameter {Arguments} arguments Anything you want to log but were afraid to
 *            ask
 * @author Paul Irish -
 *         http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
 */
window.log = function() {
  log.history = log.history || []; // store logs to an array for reference
  log.history.push(arguments);
  if (this.console) {
    console.log(Array.prototype.slice.call(arguments));
  }
};