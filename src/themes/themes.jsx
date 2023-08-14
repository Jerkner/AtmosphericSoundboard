import Amazon from '../themes/amazon/Amazon';
import Harbor from '../themes/harbor/Harbor';
import ZenGarden from './zengarden/ZenGarden';
import Park from './park/Park';
// Import other theme components here

export const themeComponents = {
  Amazon,
  Harbor,
  ZenGarden,
  Park,
  // Add other theme components here
};

export const getThemeComponent = themeName => themeComponents[themeName];