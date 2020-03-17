const autoprefixer = require('autoprefixer')
const postCSSImport = require('postcss-import')()
const postCSSNested = require('postcss-nested')
const postCSSCustomMedia = require('postcss-custom-media')
const colorFunction = require('postcss-color-function')

const postCSSAutoprefixer = autoprefixer()

const gridBreakpoints = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
  retina: {
    minPixelRatio: 1.25,
    minResolution: '120dpi',
  },
}

module.exports = {
  plugins: [
    postCSSImport,
    postCSSAutoprefixer,
    postCSSNested,
    postCSSCustomMedia({
      importFrom: {
        customMedia: {
          '--xs-viewport': `(min-width: ${gridBreakpoints.xs})`,
          '--sm-viewport': `(min-width: ${gridBreakpoints.sm})`,
          '--md-viewport': `(min-width: ${gridBreakpoints.md})`,
          '--lg-viewport': `(min-width: ${gridBreakpoints.lg})`,
          '--xl-viewport': `(min-width: ${gridBreakpoints.xl})`,
          '--xxl-viewport': `(min-width: ${gridBreakpoints.xxl})`,
          '--retina-display': `
          (-webkit-min-device-pixel-ratio: ${gridBreakpoints.retina.minPixelRatio}),
          (min-resolution: ${gridBreakpoints.retina.minResolution})
          `,
        },
      },
    }),
    colorFunction,
  ],
}
