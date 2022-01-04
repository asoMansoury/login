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
    common:{
      main:"#FFFFFF",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    direction:"rtl"
  },
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});

export default theme;