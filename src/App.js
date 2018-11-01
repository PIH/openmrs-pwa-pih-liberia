import React from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { LoadingView } from '@openmrs/react-components';
import './App.css';
import setupStoreAndPersistor, { history } from './store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = setupStoreAndPersistor();

const App = props => {

  return (
    <Provider store={store}>

      <PersistGate loading={<LoadingView />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>

          </Switch>
        </ConnectedRouter>
      </PersistGate>

    </Provider>
  );

};

export default App;
