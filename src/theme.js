import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(54,137,187)',
    },
    secondary: {
      main: 'rgb(107,106,106)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;