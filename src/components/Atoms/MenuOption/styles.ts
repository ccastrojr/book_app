import { Link } from 'react-router-dom';

import { colors, font } from 'common/styles/theme';
import { transitionCommonProps } from 'common/utils/defaultCSS';
import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled(Link)<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;

  height: 35px;

  font-size: 15px;
  font-weight: ${font.bold};
  color: ${colors.white};
  text-decoration: none;

  padding: 0 30px;

  z-index: 1;

  svg {
    margin-right: 18px;
  }

  transition: ${transitionCommonProps};

  ${props =>
    props.selected &&
    css`
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;

        height: 35px;
        width: 8px;

        background: ${colors.lightBlue};
      }
    `}

  &:hover {
    background: ${darken(0.02, colors.highBlue)};
  }
`;
