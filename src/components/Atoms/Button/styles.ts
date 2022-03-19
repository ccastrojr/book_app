import { colors, font, sizes } from 'common/styles/theme';
import { transitionCommonProps } from 'common/utils/defaultCSS';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { IColors } from './IButton';

interface ContainerProps extends IColors {
  size: 'FULL';
}

export const Container = styled.button<ContainerProps>`
  height: ${sizes.normal};

  border: none;
  border-radius: 8px;

  font-weight: ${font.bold};
  font-size: 16px;
  color: ${colors.white};

  transition: ${transitionCommonProps};

  ${props =>
    props.color === 'default' &&
    css`
      background: ${colors.blue};

      &:hover {
        background: ${darken(0.05, colors.blue)};
      }
    `};

  ${props =>
    props.color === 'darken' &&
    css`
      background: ${colors.darken_blue};

      &:hover {
        background: ${darken(0.05, colors.darken_blue)};
      }
    `};

  ${props =>
    props.color === 'transparent' &&
    css`
      background: transparent;
      color: ${colors.mediumGrey};

      &:hover {
        color: ${darken(0.2, colors.mediumGrey)};
      }
    `};

  ${props =>
    props.size === 'FULL' &&
    css`
      width: 100%;
    `}

  &:disabled {
    background-color: ${colors.lightGrey};
    color: ${colors.grey};
    cursor: not-allowed;
  }
`;
