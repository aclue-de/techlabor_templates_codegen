import { createTheme, responsiveFontSizes, Theme } from '@mui/material';

export const CreateDefaultTheme = (): Theme => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Helvetica'].join(','),
    },
    shape: {
      borderRadius: 16,
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#30a4a8',
      },
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            lineHeight: 1,
          },
        },
      },
    },
  });
  return responsiveFontSizes(theme);
};
