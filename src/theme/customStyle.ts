import {theme} from 'native-base';
import card from './custom/card';
import layout from './custom/layout';
import layoutInternal from './custom/layoutInternal';
import layoutMenu from './custom/layoutMenu';
import input from './custom/input';
import switchButton from './custom/switchButton';
import leaderboard from './custom/leaderboard';
import bottomSlider from './custom/bottomSlider';
import shareSlider from './custom/shareSlider';
import bannerTip from './custom/bannerTip';

const getThemeColor = (str: string) => {
  const [colorName, shade] = str.split('.');
  const themeColor: any = theme.colors;
  if (!shade) {
    return themeColor[colorName];
  }
  return themeColor[colorName][shade];
};

export default {
  card,
  layout,
  layoutInternal,
  layoutMenu,
  input,
  switchButton,
  leaderboard,
  bottomSlider,
  shareSlider,
  bannerTip,
  getThemeColor,
};
