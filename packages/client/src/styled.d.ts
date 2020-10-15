import 'styled-components';
import Colors from './types/theme/Colors';
import Transitions from './types/theme/Transitions';
import Font from './types/theme/Font';
import FontWeights from './types/theme/FontWeights';
import ZIndex from './types/theme/ZIndex';
import Breakpoints from './types/theme/Breakpoints';
import BorderRadiuses from './types/theme/BorderRadiuses';
import Sizes from './types/theme/Sizes';
import Paddings from './types/theme/Paddings';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors,
    transitions: Transitions,
    font: Font,
    fontWeights: FontWeights,
    zIndex: ZIndex,
    breakpoints: Breakpoints,
    borderRadiuses: BorderRadiuses,
    sizes: Sizes,
    paddings: Paddings,
    grid: {
      cols: number,
      gutter: string,
    },
  }
}
