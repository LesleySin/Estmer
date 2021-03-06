import React from 'react';
import onAppStart from './scr/AppStart/onAppStart';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { RootNavigator } from './scr/Navigation/RootNavigator';
import { NativeBaseProvider } from 'native-base';
import { ModalView } from './scr/Components/ModalView';
import AppDispatchService from './scr/Core/Services/AppDispatchService/AppDispatchService';
import KeychainExample from './scr/keych';

import { Provider } from 'react-redux'
import { store } from './scr/AppState/store';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const dependencies = onAppStart();
  const appDispatcher = new AppDispatchService(dependencies, navigationRef);

  return (
    <Provider store={store} >
      <NativeBaseProvider>
        <NavigationContainer ref={navigationRef} >
          <ModalView deps={dependencies} />
          <RootNavigator deps={dependencies} />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
