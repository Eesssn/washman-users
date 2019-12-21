import React from 'react';
import StackNavigator from './src/router';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://alireza-shahsavari.ir/washman/public/api/';

const App = () => {
  return <StackNavigator />;
};

export default App;
