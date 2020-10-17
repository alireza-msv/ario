import styled from 'styled-components';
import PaddingSize from '~/types/theme/PaddingSize';
import { paddingSizeToCss } from '~/theme/utils/paddings';

interface ContentProps {
  padding?: PaddingSize,
  verticalPadding?: PaddingSize,
  horizontalPadding?: PaddingSize,
}

const Content = styled.div<ContentProps>`
  border-radius: ${({ theme }) => theme.borderRadiuses.md};
  background-color: ${({ theme }) => theme.colors.foreground};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  ${({
    padding,
    verticalPadding,
    horizontalPadding,
  }) => paddingSizeToCss(verticalPadding || padding, horizontalPadding || padding)};
`;

Content.defaultProps = {
  padding: PaddingSize.MD,
};

export default Content;
