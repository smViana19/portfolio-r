import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#87CEEB',
        },
    },
    typography: {
        fontFamily: 'Helvetica',
    },
});
theme = responsiveFontSizes(theme);

export default theme;
