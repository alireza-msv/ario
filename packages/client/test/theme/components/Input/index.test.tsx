import * as React from 'react';
import { render } from '@testing-library/react';
import Input from '~/theme/components/Input';
import Theme, { theme } from '~/theme';
import 'jest-styled-components';
import TextAlign from '~/types/theme/TextAlign';
import TextDirection from '~/types/theme/TextDirection';

const renderInput = (props = {}) => render(<Input {...props} />, { wrapper: Theme });

describe('Input tests', () => {
  it('should render correctly', () => {
    const { container } = renderInput();

    expect(container.firstChild).toHaveStyleRule('border', `1px solid ${theme.colors.gray300}`);
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.gray800);
    expect(container.firstChild).toHaveStyleRule('padding', theme.paddings.sm);
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.gray300, {
      modifier: '::placeholder',
    });
    expect(container.firstChild).toHaveStyleRule('outline', 'none', {
      modifier: ':focus',
    });
    expect(container.firstChild).toHaveStyleRule('border-color', theme.colors.primary500, {
      modifier: ':focus',
    });
    expect(container.firstChild).toHaveStyleRule('box-shadow', '0 0 0 1px rgba(187,34,153,0.7)', {
      modifier: ':focus',
    });
    expect(container.firstChild).toHaveStyleRule('color', theme.colors.gray400, {
      modifier: ':disabled',
    });
    expect(container.firstChild).toHaveStyleRule('background-color', 'inherit', {
      modifier: ':disabled',
    });
  });

  it('should have height: 40px when neither sm nor lg is true', () => {
    const { container } = renderInput();

    expect(container.firstChild).toHaveStyleRule('height', theme.sizes.inputHeight.md);
  });

  it('should have height: 34px when sm is true', () => {
    const { container } = renderInput({ sm: true });

    expect(container.firstChild).toHaveStyleRule('height', theme.sizes.inputHeight.sm);
  });

  it('should have height: 48px when lg is true', () => {
    const { container } = renderInput({ lg: true });

    expect(container.firstChild).toHaveStyleRule('height', theme.sizes.inputHeight.lg);
  });

  it('should have height: 48px when both sm and lg are true', () => {
    const { container } = renderInput({ sm: true, lg: true });

    expect(container.firstChild).toHaveStyleRule('height', theme.sizes.inputHeight.lg);
  });

  it('should have border-radius: 5px when rounded is false', () => {
    const { container } = renderInput();

    expect(container.firstChild).toHaveStyleRule('border-radius', theme.borderRadiuses.sm);
  });

  it('should have border-radius: 20px when rounded is true', () => {
    const { container } = renderInput({ rounded: true });

    expect(container.firstChild).toHaveStyleRule('border-radius', '20px');
  });

  it('should have border-radius: 17px when rounded and sm are true', () => {
    const { container } = renderInput({ rounded: true, sm: true });

    expect(container.firstChild).toHaveStyleRule('border-radius', '17px');
  });

  it('should have border-radius: 24px when rounded and lg are true', () => {
    const { container } = renderInput({ rounded: true, lg: true });

    expect(container.firstChild).toHaveStyleRule('border-radius', '24px');
  });

  it('should have text-align: right when textAlign is Right', () => {
    const { container } = renderInput({ textAlign: TextAlign.Right });

    expect(container.firstChild).toHaveStyleRule('text-align', 'right');
  });

  it('should have text-align: center when textAlign is Center', () => {
    const { container } = renderInput({ textAlign: TextAlign.Center });

    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
  });

  it('should have text-align: left when textAlign is Left', () => {
    const { container } = renderInput({ textAlign: TextAlign.Left });

    expect(container.firstChild).toHaveStyleRule('text-align', 'left');
  });

  it('should have direction: ltr when direction is LTR', () => {
    const { container } = renderInput({ direction: TextDirection.LTR });

    expect(container.firstChild).toHaveStyleRule('direction', 'ltr');
  });

  it('should have direction: rtl when direction is RTL', () => {
    const { container } = renderInput({ direction: TextDirection.RTL });

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
