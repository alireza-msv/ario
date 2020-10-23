import * as React from 'react';
import {
  findByTestId,
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import InputGroup, { InputGroupProps } from '~/theme/components/InputGroup';
import Theme from '~/theme';
import 'jest-styled-components';

const renderInputGroup = (props: InputGroupProps) => (
  render(<InputGroup {...props} />, { wrapper: Theme })
);

describe('InputGroup tests', () => {
  afterEach(cleanup);

  it('should render correctly', async () => {
    const { container } = renderInputGroup({ label: 'test' });
    const label = await findByTestId(container, 'label');

    expect(container.firstChild).toHaveStyleRule('position', 'relative');
    expect(container.firstChild).toHaveStyleRule('margin-top', '16px');
    expect(label.textContent).toBe('test');
    expect(label).toHaveStyleRule('position', 'absolute');
    expect(label).toHaveStyleRule('top', '0');
    expect(label).toHaveStyleRule('left', '0');
    expect(label).toHaveStyleRule('font-size', '16px');
    expect(label).toHaveStyleRule('line-height', '1');
  });

  test('label should have transform: translate3d(10px, 12px, 0) scale(1)', async () => {
    const { container } = renderInputGroup({ label: 'test' });
    const label = await findByTestId(container, 'label');

    expect(label).toHaveStyleRule('transform', 'translate3d(10px,12px,0) scale(1)');
  });

  test('label should have transform: translate3d(10px, 16px, 0) scale(1) when lg is true', async () => {
    const { container } = renderInputGroup({ label: 'test', lg: true });
    const label = await findByTestId(container, 'label');

    expect(label).toHaveStyleRule('transform', 'translate3d(10px,16px,0) scale(1)');
  });

  test('label should have transform: translate3d(10px, 8px, 0) scale(1) when sm is true', async () => {
    const { container } = renderInputGroup({ label: 'test', sm: true });
    const label = await findByTestId(container, 'label');

    expect(label).toHaveStyleRule('transform', 'translate3d(10px,8px,0) scale(1)');
  });

  test('input should not have placeholder when label is not shrinked', async () => {
    const { container } = renderInputGroup({ label: 'test', placeholder: 'placeholder' });
    const input = await findByTestId(container, 'input');

    expect(input.getAttribute('placeholder')).toBe('');
  });

  test('input should have placeholder when label is shrinked', async () => {
    const { container } = renderInputGroup({ label: 'test', placeholder: 'placeholder' });
    const input = await findByTestId(container, 'input');

    fireEvent.focus(input);
    expect(input.getAttribute('placeholder')).toBe('placeholder');
  });

  test('input should have given id', async () => {
    const { container } = renderInputGroup({ label: 'test', id: 'testId' });
    const label = await findByTestId(container, 'label');
    const input = await findByTestId(container, 'input');

    expect(input.getAttribute('id')).toBe('testId');
    expect(label.getAttribute('for')).toBe('testId');
  });

  test('input should have random id when id is not applied', async () => {
    const { container } = renderInputGroup({ label: 'test' });
    const label = await findByTestId(container, 'label');
    const input = await findByTestId(container, 'input');
    const randomIdRegex = /^inputgroup_\d+$/;

    expect(randomIdRegex.test(input.getAttribute('id'))).toBe(true);
    expect(randomIdRegex.test(label.getAttribute('for'))).toBe(true);
  });

  it('should shrink label on input focus when value is empty', async () => {
    const { container } = renderInputGroup({ label: 'test' });
    const label = await findByTestId(container, 'label');
    const input = await findByTestId(container, 'input');

    fireEvent.focus(input);
    expect(label).toHaveStyleRule('transform', 'translate3d(0,-16px,0) scale(0.75)');
  });

  it('should not shrink label on input focus when value is not empty', async () => {
    const { container } = renderInputGroup({
      label: 'test',
      value: 'test',
      onChange: console.log,
    });
    const label = await findByTestId(container, 'label');
    const input = await findByTestId(container, 'input');

    fireEvent.focus(input);
    expect(label).toHaveStyleRule('transform', 'translate3d(10px,12px,0) scale(1)');
  });

  it('should propagate focus event', async () => {
    const onFocus = jest.fn();
    const { container } = renderInputGroup({ label: 'test', onFocus });
    const input = await findByTestId(container, 'input');

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('should propagate blur event', async () => {
    const onBlur = jest.fn();
    const { container } = renderInputGroup({ label: 'test', onBlur });
    const input = await findByTestId(container, 'input');

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
