const gulp = require('gulp');
const config = require('../config').lintCss;
const handleErrors = require('../utils/handleErrors');
const postcss = require('gulp-postcss');
const reporter = require('postcss-reporter');
const stylelint = require('stylelint');

gulp.task('css:lint', function() {

  var styleLintConfig =
  {
    "rules": {
        "at-rule-name-case": "lower",
        "block-no-empty": true,
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "color-no-invalid-hex": true,
        "comment-no-empty": true,
        "comment-whitespace-inside": "always",
        "custom-property-empty-line-before": [ "always", {
          except: [
            "after-custom-property",
            "first-nested",
          ],
          ignore: [
            "after-comment",
            "inside-single-line-block",
          ],
        } ],
        "declaration-bang-space-after": "never",
        "declaration-bang-space-before": "always",
        "declaration-block-no-duplicate-properties": [ true, {
          ignore: ["consecutive-duplicates-with-different-values"],
        } ],
        "declaration-block-no-ignored-properties": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-semicolon-newline-after": "always-multi-line",
        "declaration-block-semicolon-space-after": "always-single-line",
        "declaration-block-semicolon-space-before": "never",
        "declaration-block-single-line-max-declarations": 1,
        "declaration-block-trailing-semicolon": "always",
        "declaration-colon-newline-after": "always-multi-line",
        "declaration-colon-space-after": "always-single-line",
        "declaration-colon-space-before": "never",
        "declaration-empty-line-before": [ "always", {
          except: [
            "after-declaration",
            "first-nested",
          ],
          ignore: [
            "after-comment",
            "inside-single-line-block",
          ],
        } ],
        "function-calc-no-unspaced-operator": true,
        "function-comma-space-before": "never",
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-max-empty-lines": 0,
        "function-name-case": "lower",
        "function-parentheses-newline-inside": "always-multi-line",
        "function-parentheses-space-inside": "never-single-line",
        "function-whitespace-after": "always",
        "keyframe-declaration-no-important": true,
        "length-zero-no-unit": true,
        "max-empty-lines": 1,
        "media-feature-colon-space-after": "always",
        "media-feature-colon-space-before": "never",
        "media-feature-name-case": "lower",
        "media-feature-name-no-unknown": true,
        "media-feature-no-missing-punctuation": true,
        "media-feature-parentheses-space-inside": "never",
        "media-feature-range-operator-space-after": "always",
        "media-feature-range-operator-space-before": "always",
        "media-query-list-comma-newline-after": "always-multi-line",
        "media-query-list-comma-space-after": "always-single-line",
        "media-query-list-comma-space-before": "never",
        "no-empty-source": true,
        "no-eol-whitespace": true,
        "no-extra-semicolons": true,
        "no-invalid-double-slash-comments": true,
        "no-missing-end-of-source-newline": true,
        "number-leading-zero": "always",
        "number-no-trailing-zeros": true,
        "property-case": "lower",
        "property-no-unknown": true,
        "selector-attribute-brackets-space-inside": "never",
        "selector-attribute-operator-space-after": "never",
        "selector-attribute-operator-space-before": "never",
        "selector-list-comma-space-before": "never",
        "selector-max-empty-lines": 0,
        "selector-pseudo-class-case": "lower",
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-class-parentheses-space-inside": "never",
        "selector-pseudo-element-case": "lower",
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "unit-case": "lower",
        "unit-no-unknown": true,
        "value-list-comma-space-before": "never",
        "value-list-max-empty-lines": 0,
    }
  }

  return gulp.src(config.src)
    .pipe(postcss([
        stylelint(styleLintConfig),
        reporter({ clearMessages: true })
    ]));
});
