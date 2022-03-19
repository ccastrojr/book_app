import { colors } from 'common/styles/theme';
import { transitionCommonProps } from 'common/utils/defaultCSS';
import { darken } from 'polished';
import styled from 'styled-components';

interface ITriggerButton {
  visible: boolean;
}

export const Container = styled.div`
  position: relative;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 20px;

  display: flex;
  flex-direction: column;

  width: fit-content;
  padding: 5px;
  z-index: 1;
  background-color: ${colors.lightenWhite};

  button + button {
    margin-top: 5px;
  }

  &,
  button {
    border-radius: 4px;
  }
`;

export const Option = styled.button`
  width: 80px;

  padding: 5px;

  border: none;
  background: transparent;
  text-align: right;

  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey};

  &:hover {
    background-color: ${darken(0.05, colors.darkenWhite)};
  }

  &:disabled {
    color: ${colors.greyDarken3};
    cursor: not-allowed;
  }
`;

export const TriggerButton = styled.button<ITriggerButton>`
  position: absolute;
  top: -12px;
  right: -10px;

  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  font-size: 20px;
  font-weight: 700;

  border-radius: 50%;
  border: none;
  background-color: ${colors.darkenWhite};

  transition: ${transitionCommonProps};

  span {
    margin-bottom: 12px;
  }

  &:hover {
    background: ${darken(0.05, colors.darkenWhite)};
  }
`;
