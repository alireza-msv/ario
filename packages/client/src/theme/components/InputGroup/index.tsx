import * as React from 'react';
import styled, { css } from 'styled-components';
import Input, { InputProps } from '../Input';

export interface InputGroupProps extends InputProps {
  label: string,
  id?: string,
}

const generateRandomId = (): string => `inputgroup_${Math.trunc(Math.random() * 1e5)}`;

interface StyledLabelProps {
  shrink: boolean,
  sm?: boolean,
  lg?: boolean,
}

const StyledLabel = styled.label<StyledLabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  font-size: ${({ theme }) => theme.font.size};
  transform-origin: top left;
  transition: transform ${({ theme }) => theme.transitions.normal};
  line-height: 1;
  ${({ shrink }) => shrink && css`transform: translate3d(0, -16px, 0) scale(0.75);`};
  ${({ shrink, sm }) => !shrink && sm && css`transform: translate3d(10px, 8px, 0) scale(1);`};
  ${({ shrink, lg }) => !shrink && lg && css`transform: translate3d(10px, 16px, 0) scale(1);`};
  ${({ shrink, lg, sm }) => !(shrink || sm || lg) && css`transform: translate3d(10px, 12px, 0) scale(1);`};
`;

const StyledInputGroup = styled.div`
  position: relative;
  margin-top: 16px;
`;

const InputGroup: React.FC<InputGroupProps> = ({
  id,
  label,
  sm,
  lg,
  value,
  onFocus,
  onBlur,
  placeholder,
  ...rest
}) => {
  const [igId, setIgId] = React.useState<string>(id);
  const [focused, setFocused] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!igId) {
      setIgId(generateRandomId());
    }
  }, []);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <StyledInputGroup>
      <StyledLabel
        shrink={focused && !value}
        htmlFor={igId}
        sm={sm}
        lg={lg}
        data-testid="label"
      >
        {label}
      </StyledLabel>
      <Input
        id={igId}
        value={value}
        sm={sm}
        lg={lg}
        placeholder={focused ? placeholder : ''}
        data-testid="input"
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </StyledInputGroup>
  );
};

export default InputGroup;
