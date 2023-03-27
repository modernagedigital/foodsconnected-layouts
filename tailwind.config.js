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

      xshort: { raw: "(min-height: 640px)" },
      short: { raw: "(min-height: 768px)" },
      tall: { raw: "(min-height: 860px)" },
      xtall: { raw: "(min-height: 960px)" },
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
        slate: {
          1: "var(--slate1)",
          2: "var(--slate2)",
          3: "var(--slate3)",
          4: "var(--slate4)",
          5: "var(--slate5)",
          6: "var(--slate6)",
          7: "var(--slate7)",
          8: "var(--slate8)",
          9: "var(--slate9)",
          10: "var(--slate10)",
          11: "var(--slate11)",
          12: "var(--slate12)",
        },
        green: {
          1: "var(--green1)",
          2: "var(--green2)",
          3: "var(--green3)",
          4: "var(--green4)",
          5: "var(--green5)",
          6: "var(--green6)",
          7: "var(--green7)",
          8: "var(--green8)",
          9: "var(--green9)",
          10: "var(--green10)",
          11: "var(--green11)",
          12: "var(--green12)",
        },
        indigo: {
          1: "var(--indigo1)",
          2: "var(--indigo2)",
          3: "var(--indigo3)",
          4: "var(--indigo4)",
          5: "var(--indigo5)",
          6: "var(--indigo6)",
          7: "var(--indigo7)",
          8: "var(--indigo8)",
          9: "var(--indigo9)",
          10: "var(--indigo10)",
          11: "var(--indigo11)",
          12: "var(--indigo12)",
        },
        red: {
          1: "var(--red1)",
          2: "var(--red2)",
          3: "var(--red3)",
          4: "var(--red4)",
          5: "var(--red5)",
          6: "var(--red6)",
          7: "var(--red7)",
          8: "var(--red8)",
          9: "var(--red9)",
          10: "var(--red10)",
          11: "var(--red11)",
          12: "var(--red12)",
        },
        plum: {
          1: "var(--plum1)",
          2: "var(--plum2)",
          3: "var(--plum3)",
          4: "var(--plum4)",
          5: "var(--plum5)",
          6: "var(--plum6)",
          7: "var(--plum7)",
          8: "var(--plum8)",
          9: "var(--plum9)",
          10: "var(--plum10)",
          11: "var(--plum11)",
          12: "var(--plum12)",
        },
        blue: {
          1: "var(--blue1)",
          2: "var(--blue2)",
          3: "var(--blue3)",
          4: "var(--blue4)",
          5: "var(--blue5)",
          6: "var(--blue6)",
          7: "var(--blue7)",
          8: "var(--blue8)",
          9: "var(--blue9)",
          10: "var(--blue10)",
          11: "var(--blue11)",
          12: "var(--blue12)",
        },
        amber: {
          1: "var(--amber1)",
          2: "var(--amber2)",
          3: "var(--amber3)",
          4: "var(--amber4)",
          5: "var(--amber5)",
          6: "var(--amber6)",
          7: "var(--amber7)",
          8: "var(--amber8)",
          9: "var(--amber9)",
          10: "var(--amber10)",
          11: "var(--amber11)",
          12: "var(--amber12)",
        },
        sky: {
          1: "var(--sky1)",
          2: "var(--sky2)",
          3: "var(--sky3)",
          4: "var(--sky4)",
          5: "var(--sky5)",
          6: "var(--sky6)",
          7: "var(--sky7)",
          8: "var(--sky8)",
          9: "var(--sky9)",
          10: "var(--sky10)",
          11: "var(--sky11)",
          12: "var(--sky12)",
        },
        yellow: {
          1: "var(--yellow1)",
          2: "var(--yellow2)",
          3: "var(--yellow3)",
          4: "var(--yellow4)",
          5: "var(--yellow5)",
          6: "var(--yellow6)",
          7: "var(--yellow7)",
          8: "var(--yellow8)",
          9: "var(--yellow9)",
          10: "var(--yellow10)",
          11: "var(--yellow11)",
          12: "var(--yellow12)",
        },
        teal: {
          1: "var(--teal1)",
          2: "var(--teal2)",
          3: "var(--teal3)",
          4: "var(--teal4)",
          5: "var(--teal5)",
          6: "var(--teal6)",
          7: "var(--teal7)",
          8: "var(--teal8)",
          9: "var(--teal9)",
          10: "var(--teal10)",
          11: "var(--teal11)",
          12: "var(--teal12)",
        },
        primary: {
          tint: "var(--blue6)",
          DEFAULT: "var(--blue10)",
          shade: "var(--blue11)",
        },
        accent: {
          tint: "var(--indigo7)",
          DEFAULT: "var(--indigo10)",
        },
        action: "var(--blue11)",
        highlight: "var(--blue11)",
        type: {
          heading: "var(--indigo11)",
          subheading: "var(--blue11)",
          light: "var(--slate11)",
          DEFAULT: "var(--slate11)",
          strong: "var(--slate12)",
        },
        neutral: {
          1: "var(--slate1)",
          2: "var(--slate2)",
          3: "var(--slate3)",
          4: "var(--slate4)",
          5: "var(--slate5)",
          6: "var(--slate6)",
          7: "var(--slate7)",
          8: "var(--slate8)",
          9: "var(--slate9)",
          10: "var(--slate10)",
          11: "var(--slate11)",
        },
        danger: {
          tint: "var(--red3)",
          DEFAULT: "var(--red11)",
          shade: "var(--red12)",
        },
        warning: {
          tint: "var(--orange3)",
          DEFAULT: "var(--orange11)",
          shade: "var(--orange12)",
        },
        success: {
          tint: "var(--green3)",
          DEFAULT: "var(--green11)",
          shade: "var(--green12)",
        },
        info: {
          tint: "var(--blue3)",
          DEFAULT: "var(--blue11)",
          shade: "var(--blue12)",
        },
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
