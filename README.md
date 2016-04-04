# Islandora Pretty Text Diff

## Introduction

Integrates the jQuery.PrettyTextDiff plugin to visualize differences in texts.

## Requirements

This module requires the following modules/libraries:

* [Islandora](https://github.com/islandora/islandora)
* [Tuque](https://github.com/islandora/tuque)
* [Libraries API](https://drupal.org/project/libraries)
* [jQuery.PrettyTextDiff](https://github.com/arnab/jQuery.PrettyTextDiff)

## Installation

Follow the typical Drupal module installation instructions [here](https://drupal.org/documentation/install/modules-themes/modules-7).

The jQuery.PrettyTextDiff plugin should be placed in the libraries directory so that jquery.pretty-text-diff.min.js is found in the root of the jQuery.PrettyTextDiff directory.

jQuery.PrettyTextDiff is a wrapper for Google's Diff Match and Patch JavaScript library. This library is included in the module (Apache License 2.0).

## Configuration

Enabling the module adds the diff form to the bottom of datastreams' versions page.

### Customization

Islandora modules may call the islandora_pretty_text_diff_content() function with two different versions of content to render a diff.

## Documentation

Further documentation for this module is available at [www.contentmath.com](https://www.contentmath.com).

## Troubleshooting/Issues

Have an issue with the module?

* [Issue Queue](https://github.com/contentmath/islandora_pretty_text_diff/issues)

Need support or additional features or modifications?

* [Content Math](https://www.contentmath.com)

## Maintainers/Sponsors

Current maintainers:

* [Mitch MacKenzie](https://www.contentmath.com)

## License

[GPLv3](http://www.gnu.org/licenses/gpl-3.0.txt)
