/**
 * @file
 * JavaScript for Islandora Pretty Text Diff.
 */

Drupal.behaviors.islandoraPrettyTextDiff = {
    attach: function (context, settings) {
        (function ($) {
            $("body").prettyTextDiff({
                originalContainer: "#islandora-pretty-text-diff-first",
                changedContainer: "#islandora-pretty-text-diff-second",
                diffContainer: "#islandora-pretty-text-diff-diff"
            });
        }(jQuery));
    }
};