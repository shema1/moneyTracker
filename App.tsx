import React from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {AppNavigator, useNavigationPersistence} from './src/navigators';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as storage from './src/utils/storage';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  // const [theme, setTheme] = useState(getTheme('dark'));
  const isDarkMode = false;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // const appIsReady = isNavigationStateRestored;

  // const colorModeManager = {
  //   get: async () => {
  //     // THIS IS NOT TESTED: AT THE MOMENT IS WORKING ONLY ON DARK MODE
  //     // TODO: change this to get dark and light mode.
  //     return 'dark';
  //   },
  //   set: async value => {
  //     setTheme(getTheme(value));
  //   },
  // };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <StatusBar
            barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor="red"
          />
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
