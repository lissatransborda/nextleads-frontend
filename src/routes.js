import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Leads from './pages/Leads';
import Form from './pages/Form';
import Thanks from './pages/Thanks';
import Estatisticas from './pages/Estatisticas';
import Configurar from './pages/Configurar';
import Alertas from './pages/Alertas';
import Exportar from './pages/Exportar';
import Email from './pages/Email';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/leads" component={Leads} />
        <Route path="/form" component={Form} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/estatisticas" component={Estatisticas} />
        <Route path="/alertas" component={Alertas} />
        <Route path="/exportar" component={Exportar} />
        <Route path="/configurar" component={Configurar} />
        <Route path="/email" component={Email} />
      </Switch>
    </BrowserRouter>
  );
}
