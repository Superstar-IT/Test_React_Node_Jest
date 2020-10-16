import React from 'react';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <section>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
