const plugin = require("tailwindcss/plugin");

const components = plugin(function ({ addComponents, theme }) {
  addComponents({
    // Typography
    ".ui-typography-hero": {
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.6xl"),
      lineHeight: theme("lineHeight.tighter"),
      letterSpacing: theme("letterSpacing.tighter"),
    },
    ".ui-typography-headline": {
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.5xl"),
      lineHeight: theme("lineHeight.tight"),
      letterSpacing: theme("letterSpacing.tight"),
    },
    ".ui-typography-title1": {
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.4xl"),
      lineHeight: theme("lineHeight.tight"),
      letterSpacing: theme("letterSpacing.tight"),
    },
    ".ui-typography-title2": {
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.3xl"),
      lineHeight: theme("lineHeight.tight"),
      letterSpacing: theme("letterSpacing.tight"),
    },
    ".ui-typography-title3": {
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.2xl"),
      lineHeight: theme("lineHeight.snug"),
    },
    ".ui-typography-heading": {
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.xl"),
      lineHeight: theme("lineHeight.snug"),
    },
    ".ui-typography-subhead": {
      fontFamily: theme("fontFamily.display"),
      fontWeight: theme("fontWeight.bold"),
      fontSize: theme("fontSize.lg"),
      lineHeight: theme("lineHeight.snug"),
    },
    ".ui-typography-body": {
      fontFamily: theme("fontFamily.text"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.base"),
      lineHeight: theme("lineHeight.normal"),
    },
    ".ui-typography-footnote": {
      fontFamily: theme("fontFamily.text"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.sm"),
      lineHeight: theme("lineHeight.relaxed"),
      letterSpacing: theme("letterSpacing.wide"),
    },
    ".ui-typography-micro": {
      fontFamily: theme("fontFamily.text"),
      fontWeight: theme("fontWeight.regular"),
      fontSize: theme("fontSize.xs"),
      lineHeight: theme("lineHeight.relaxed"),
      letterSpacing: theme("letterSpacing.wide"),
    },
  });
});

module.exports = components;
