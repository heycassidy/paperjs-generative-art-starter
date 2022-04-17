import { globalCss } from '../../stitches.config.js'

const globalStyles = globalCss({
  html: {
    boxSizing: 'border-box'
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit'
  },
  body: {
    margin: 0,
    minHeight: '100vh',
    backgroundColor: 'white',
  }
});

export default globalStyles