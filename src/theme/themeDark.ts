import {StatusBar} from 'react-native';

const themeDark = {
  colors: {
    background: {},
    error: {},
    primary: {
      50: '',
      100: '#BEB6FD',
      200: '#A89DFD',
      300: '#9284FD',
      400: '#7B6AFC',
      500: '#6551FD',
      600: '#553FFD',
      700: '#4E38FD',
      800: '',
    },
    secondary: {
      500: '#03D2AB',
    },
    gray: {
      /*
      50: "#F5F5FF",
      100: "#E6E6F2",
      200: "#DFDFF0",
      300: "#9797AA",
      400: "#7D7D8C",
      500: "#646470",
      600: "#51515B",
      700: "#3E3E46",
      800: "#25252A",
      900: "#18181B",
       */
      5: '#BABACC',
      10: '#18181b8f',
      50: '',
      100: '#F5F5FF',
      200: '#E6E6F2',
      300: '#DFDFF0',
      400: '#9797AA',
      500: '#7D7D8C',
      550: '#646470',
      600: '#51515B',
      700: '#3E3E46',
      800: '#25252A',
      900: '#18181B',
    },
    red: {
      400: '#FF8181',
      500: '#D16666',
    },
    orange: {
      500: '#F5732B',
    },
    blue: {
      300: '#0D99FF',
    },
  },
  components: {
    Heading: {
      sizes: {
        h1: {fontSize: '36px', lineHeight: '45px', fontWeight: '700'}, // lineHeight: 125%
        h2: {fontSize: '24px', lineHeight: '30px', fontWeight: '700'}, // lineHeight: 125%
        h3: {fontSize: '20px', lineHeight: '25px', fontWeight: '700'}, // lineHeight: 125%
        h4: {fontSize: '16px', lineHeight: '20px', fontWeight: '700'}, // lineHeight: 125%
      },
    },
    Text: {
      sizes: {
        t1: {fontSize: '16px', lineHeight: '20px', fontWeight: '400'},
        t2: {fontSize: '14px', lineHeight: '17.5px', fontWeight: '400'},
        caption: {fontSize: '12px', lineHeight: '14.4px', fontWeight: '400'},
      },
    },
    Button: {
      defaultProps: {
        variant: 'solid',
        colorScheme: 'primary',
        size: 'xl',
      },
      baseStyle: {
        borderRadius: '4px',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          _text: {
            fontSize: '18px',
            lineHeight: '20px',
            fontWeight: '700',
            color: 'white',
          },
          _disabled: {
            opacity: 1,
            bg: 'gray.700',
            _text: {
              color: 'gray.400',
            },
          },
          _pressed: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          borderWidth: '2px',
          _text: {
            color: 'white',
          },
          _dark: {
            borderColor: 'primary.500',
            _text: {
              color: 'white',
            },
            _pressed: {
              borderColor: 'primary.600',
            },
            _disabled: {
              opacity: 1,
              color: 'gray.400',
            },
          },
        },
        link: {
          _text: {
            color: 'white',
            textDecorationLine: 'underline',
          },
          _dark: {
            _text: {
              color: 'white',
              textDecorationLine: 'underline',
            },
          },
        },
      },
      sizes: {
        xl: {
          py: '14.5px',
          px: '16px',
          width: '100%',
          _text: {
            fontSize: '18px',
          },
        },
      },
    },
    Modal: {
      baseStyle: {
        _dark: {
          bg: 'gray.10',
          mt: StatusBar.currentHeight,
        },
      },
    },
    ModalHeader: {
      baseStyle: {
        _dark: {
          bg: 'background.700',
        },
      },
    },
    ModalContent: {
      baseStyle: {
        _dark: {
          bg: 'background.700',
        },
      },
    },
    ModalBody: {
      baseStyle: {
        _dark: {
          bg: 'background.700',
        },
      },
    },
    ModalFooter: {
      baseStyle: {
        _dark: {
          bg: 'background.700',
        },
      },
    },
    Input: {
      baseStyle: {
        _text: {
          color: 'gray.500',
        },
        selectionColor: 'white',
        _dark: {
          _focus: {
            selectionColor: 'white',
          },
        },
      },
    },
  },
};

themeDark.colors.background = {
  100: themeDark.colors.gray[100],
  200: themeDark.colors.gray[200],
  700: themeDark.colors.gray[700],
  800: themeDark.colors.gray[800],
  900: themeDark.colors.gray[900],
};
themeDark.colors.error = {
  400: themeDark.colors.red[400],
  500: themeDark.colors.red[500],
};
export default themeDark;
