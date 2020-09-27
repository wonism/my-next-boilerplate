import { createElement } from 'react';
import { css, Global } from '@emotion/core';
import emotionReset from 'emotion-reset';

const styles = css`
  ${emotionReset}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;

export const globalStyles = createElement(Global, { styles });
