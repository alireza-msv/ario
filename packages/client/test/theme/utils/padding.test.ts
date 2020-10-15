import PaddingSize from '~/types/theme/PaddingSize';
import { theme } from '~/theme';
import { paddingSizeToCss } from '~/theme/utils/paddings';

describe('paddingSizeToCss tests', () => {
  it('should merge paddings when vertical and horizontal are equal', () => {
    const css = paddingSizeToCss(PaddingSize.MD, PaddingSize.MD);

    expect(css).toStrictEqual(['padding: ', theme.paddings.md]);
  });

  it('should create padding respectively', () => {
    const css = paddingSizeToCss(PaddingSize.SM, PaddingSize.LG);

    expect(css).toStrictEqual([
      'padding: ',
      theme.paddings.sm,
      ' ',
      theme.paddings.lg,
    ]);
  });
});
