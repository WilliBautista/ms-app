import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { HomeScreen } from '../components/pages/HomeScreen';
import { Error404Screen } from '../components/pages/Error404Screen';
import { AboutScreen } from '../components/pages/AboutScreen';
import { ActivitiesScreen } from '../components/pages/ActivitiesScreen';
import { ContactScreen } from '../components/pages/ContactScreen';

export const AppRoutes = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/nosotros" component={AboutScreen} />
          <Route exact path="/actividades" component={ActivitiesScreen} />
          <Route exact path="/contactenos" component={ContactScreen} />
          <Route exact path="/404" component={Error404Screen} />
          <Redirect to="/404" />
        </Switch>
      </>
    </Router>
  );
}
