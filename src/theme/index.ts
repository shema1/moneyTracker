import {extendTheme} from 'native-base';
import themeLight from './themeLight';
import themeDark from './themeDark';
import {ICustomTheme} from 'native-base/src/theme';

export const getTheme = (colorMode: string) => {
  const obj: ICustomTheme = colorMode === 'dark' ? themeDark : themeLight;

  const theme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: colorMode,
    },
    ...obj,
    ...customFonts,
  });

  return theme;
};

const customFonts = {
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Thin',
      },
      200: {
        normal: 'Roboto-Light',
      },
      300: {
        normal: 'Roboto-Light',
      },
      400: {
        normal: 'Roboto-Regular',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      600: {
        normal: 'Roboto-Bold',
      },
      700: {
        normal: 'Roboto-Bold',
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
};
