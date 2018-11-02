import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { library as fontAwesomeLibrary } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faEdit,
  faUser,
  faPills,
  faMapMarker,
  faCog,
  faKey,
  faSignOutAlt,
  faRibbon,
  faVial,
  faChild,
  faSearch,
  faNotesMedical,
  faHeart,
  faUserMd,
  faLemon,
  faHome
} from '@fortawesome/free-solid-svg-icons';
import { Logout, LoadingView } from '@openmrs/react-components';
import './App.css';
import setupStoreAndPersistor, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoginPage from './login/LoginPage'
import Layout from './layout/Layout'
import HomePage from './home/HomePage'

// add any more fonts you wish to use to the import above and to here
fontAwesomeLibrary.add(faBars, faEdit, faPills, faUser, faMapMarker, faCog, faKey, faSignOutAlt, faRibbon, faVial, faChild, faSearch, faNotesMedical, faHeart, faUserMd, faLemon, faHome);

const { store, persistor } = setupStoreAndPersistor();

const App = props => {

  return (
    <Provider store={store}>

      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              component={LoginPage}
              path="/login"
            />
            <Route
              component={Logout}
              path="/logout"
            />
            <Layout
              component={HomePage}
              exact
              path="/"
            />
          </Switch>
        </ConnectedRouter>
      </PersistGate>

    </Provider>
  );

};

export default App;
