import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/navigation';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
