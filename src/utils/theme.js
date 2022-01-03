import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#f0c94a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    direction:"rtl"
  },
});

export default theme;