import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from 'common/styles/global';
import { Routes } from 'routes';

import { Hooks } from './hooks';

function Bootstrap() {
  return (
    <Hooks>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <GlobalStyles />
    </Hooks>
  );
}

export default Bootstrap;
