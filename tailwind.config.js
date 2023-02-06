/** @type {import('tailwindcss').Config} */

const radix = require("@radix-ui/colors");

const accent = (src) => ({
  accent: src,
});

const COLOR_SCALES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const scale = (src, accessor) => {
  return COLOR_SCALES.reduce((current, idx) => {
    const key =
      typeof accessor === "function" ? accessor(idx) : `${accessor}${idx}`;

    return {
      ...current,
      [idx]: src[key],
    };
  }, {});
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dropShadow: {
      sm: [
        "0px 3px 1px rgba(22, 26, 29, 0.02)",
        "0px 1px 1px rgba(22, 26, 29, 0.08)",
        "0px 1px 1px rgba(22, 26, 29, 0.13)",
        "0px 0px 0px rgba(22, 26, 29, 0.15)",
        "0px 0px 0px rgba(22, 26, 29, 0.15)",
      ],
      DEFAULT: [
        "0px 4px 2px rgba(22, 26, 29, 0.02)",
        "0px 2px 1px rgba(22, 26, 29, 0.07)",
        "0px 1px 1px rgba(22, 26, 29, 0.12)",
        "0px 0px 1px rgba(22, 26, 29, 0.14)",
        "0px 0px 0px rgba(22, 26, 29, 0.14)",
      ],
      md: [
        "0px 9px 4px rgba(22, 26, 29, 0.02)",
        "0px 5px 3px rgba(22, 26, 29, 0.07)",
        "0px 2px 2px rgba(22, 26, 29, 0.11)",
        "0px 1px 1px rgba(22, 26, 29, 0.13)",
        "0px 0px 0px rgba(22, 26, 29, 0.13)",
      ],
      lg: [
        "0px 25px 10px rgba(22, 26, 29, 0.01)",
        "0px 14px 8px rgba(22, 26, 29, 0.05)",
        "0px 6px 6px rgba(22, 26, 29, 0.08)",
        " 0px 2px 3px rgba(22, 26, 29, 0.09)",
        "0px 0px 0px rgba(22, 26, 29, 0.09)",
      ],
      xl: [
        "0px 47px 19px rgba(22, 26, 29, 0.01)",
        "0px 26px 16px rgba(22, 26, 29, 0.04)",
        "0px 12px 12px rgba(22, 26, 29, 0.07)",
        "0px 3px 6px rgba(22, 26, 29, 0.08)",
        "0px 0px 0px rgba(22, 26, 29, 0.08)",
      ],
      "2xl": [
        "0px 70px 28px rgba(22, 26, 29, 0.01)",
        "0px 39px 24px rgba(22, 26, 29, 0.03)",
        "0px 17px 17px rgba(22, 26, 29, 0.05)",
        "0px 4px 10px rgba(22, 26, 29, 0.06)",
        "0px 0px 0px rgba(22, 26, 29, 0.06)",
      ],
    },
    fontFamily: {
      display: "circe, sans-serif",
      text: "libre-franklin, sans-serif",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999rem",
    },
    fontSize: {
      "2xs": "0.6875rem", // 11
      xs: "0.75rem", // 12
      sm: "0.875rem", // 14
      base: "1rem", // 16
      lg: "clamp(1.13rem, calc(1.09rem + 0.13vw), 1.20rem)",
      xl: "clamp(1.27rem, calc(1.19rem + 0.31vw), 1.44rem)",
      "2xl": "clamp(1.42rem, calc(1.30rem + 0.54vw), 1.73rem)",
      "3xl": "clamp(1.60rem, calc(1.41rem + 0.83vw), 2.07rem)",
      "4xl": "clamp(1.80rem, calc(1.52rem + 1.21vw), 2.49rem)",
      "5xl": "clamp(2.03rem, calc(1.63rem + 1.70vw), 2.99rem)",
      "6xl": "clamp(2.28rem, calc(1.74rem + 2.30vw), 3.58rem)",
    },
    fontWeight: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
    letterSpacing: {
      tighter: "-0.02em",
      tight: "-0.0125em",
      none: "0",
      wide: "0.0125em",
      wider: "0.025em",
    },
    lineHeight: {
      none: "1",
      tighter: "1.1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
    screens: {
      "2xs": "20rem", // 320
      xs: "30rem", // 480
      "max-xs": { max: "29.9375rem" },
      sm: "40rem", // 640
      "max-sm": { max: "39.9375rem" },
      md: "48rem", // 768
      "max-md": { max: "47.9375rem" },
      lg: "64rem", // 1024
      "max-lg": { max: "63.9375rem" },
      xl: "80rem", // 1280
    },
    extend: {
      spacing: {
        "5xs": "var(--size-5xs)", // 4px
        "4xs": "var(--size-4xs)", // 8px
        "3xs": "var(--size-3xs)", // 12px
        "2xs": "var(--size-2xs)", // 16px
        xs: "var(--size-xs)", // 24px
        sm: "var(--size-sm)", // 32px
        md: "var(--size-md)", // 40px
        lg: "var(--size-lg)", // 48px
        xl: "var(--size-xl)", // 56px
        "2xl": "var(--size-2xl)", // 64px
        "3xl": "var(--size-3xl)", // 72px
        "4xl": "var(--size-4xl)", // 80px
        "5xl": "var(--size-5xl)", // 88px
        "6xl": "var(--size-6xl)", // 96px

        // One-up scales
        "5xs-4xs": "var(--size-5xs-4xs)", // 4px -> 8px
        "4xs-3xs": "var(--size-4xs-3xs)", // 8px -> 12px
        "3xs-2xs": "var(--size-3xs-2xs)", // 12px -> 16px
        "2xs-xs": "var(--size-2xs-xs)", // 16px -> 24px
        "xs-s": "var(--size-xs-s)", // 24px -> 32px
        "s-m": "var(--size-s-m)", // 32px -> 40px
        "m-l": "var(--size-m-l)", // 40px -> 48px
        "l-xl": "var(--size-l-xl)", // 48px -> 56px
        "xl-2xl": "var(--size-xl-2xl)", // 56px -> 64px
        "2xl-3xl": "var(--size-2xl-3xl)", // 64px -> 72px
        "3xl-4xl": "var(--size-3xl-4xl)", // 72px -> 80px
        "4xl-5xl": "var(--size-4xl-5xl)", // 80px -> 88px
        "5xl-6xl": "var(--size-5xl-6xl)", // 88px -> 96px
      },
      colors: {
        primary: {
          brand: {
            DEFAULT: "#1C66DE",
            alt: "#030063",
          },
        },
        slate: scale(radix.slate, "slate"),
        amber: scale(radix.amber, "amber"),
        blue: scale(radix.blue, "blue"),
        green: scale(radix.green, "green"),
        indigo: scale(radix.indigo, "indigo"),
        orange: scale(radix.orange, "orange"),
        plum: scale(radix.plum, "plum"),
        red: scale(radix.red, "red"),
        sky: scale(radix.sky, "sky"),
        yellow: scale(radix.sky, "sky"),
        teal: scale(radix.teal, "teal"),
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("./utils/tailwind/components.js"),
  ],
};
