import {DefaultTheme} from '@react-navigation/native';

const commonColor = {
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  activeColor: '#DE5E69',
  deactiveColor: '#DE5E6950',
  boxActiveColor: '#DE5E6940',
};

/* We need to extend the existing 'DefaultTheme object' and 'DefaultTheme colors object ' into our CUSTOM theme values.
 */
const dark = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    themeColor: '#000000',
    white: '#FFFFFF',
    sky: '#831a23',
    gray: 'white',
    ...commonColor,
  },
};

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    themeColor: '#FFFFFF',
    white: '#000000',
    sky: '#DE5E69',
    gray: 'gray',
    ...commonColor,
  },
};

export default {light, dark};
