import { colors } from 'common/styles/theme';
import styled from 'styled-components';

interface IProps {
  disabled?: boolean;
}

export const Container = styled.label<IProps>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 24px;

  padding-left: 27px;

  font-size: 16px;
  color: ${colors.grey};

  user-select: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  input {
    position: absolute;
    height: 0;
    width: 0;

    opacity: 0;
  }

  span.checkmark {
    position: absolute;
    top: 2px;
    left: 0;

    height: 22px;
    width: 22px;

    border-radius: 4px;
    border: 1px solid ${colors.mediumGrey};
    background: ${props =>
      props.disabled ? colors.mediumWhite : colors.white};
  }

  input:checked ~ .checkmark {
    border: 2px solid
      ${props => (props.disabled ? colors.lightGrey : colors.blue)};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 1px;

    width: 4px;
    height: 10px;

    border: solid ${props => (props.disabled ? colors.lightGrey : colors.blue)};
    border-width: 0 2px 2px 0;

    transform: rotate(45deg);
  }
`;
