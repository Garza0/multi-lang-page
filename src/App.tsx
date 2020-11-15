import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import About from './pages/About';
import Page404 from './pages/404';
import HomePage from './pages/Homepage';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}>
          {/* <HomePage /> */}
        </Route>
        <Route exact path="/about" component={About}>
          {/* <About /> */}
        </Route>
        <Route path="/404" component={Page404}>
          {/* <Page404 /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;