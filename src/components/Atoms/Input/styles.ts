import { colors, sizes } from 'common/styles/theme';
import { transitionCommonProps } from 'common/utils/defaultCSS';
import styled from 'styled-components';

interface ContainerProps {
  focused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: ${sizes.normal};
  width: 100%;

  padding: 0 20px;
  border: 2px solid ${props => (props.focused ? colors.blue : colors.grey)};
  border-radius: 8px;

  transition: ${transitionCommonProps};

  svg {
    margin-right: 20px;
  }

  input {
    width: 100%;
    height: 100%;

    border: none;

    color: ${colors.grey};
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;

  font-size: 14px;
  font-weight: 500;
  color: ${colors.greyDarken3};
`;
