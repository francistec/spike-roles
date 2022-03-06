/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import React from 'react';
import StackNavigation from './StackScreen'
import { store } from './store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    <>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </>
  );
};


export default App;
