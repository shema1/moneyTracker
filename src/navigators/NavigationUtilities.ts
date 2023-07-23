import {useState, useEffect, useRef} from 'react';
import {BackHandler, Platform} from 'react-native';
import {
  PartialState,
  NavigationState,
  NavigationAction,
  createNavigationContainerRef,
} from '@react-navigation/native';
import Config from '../config';
import type {PersistNavigationConfig} from '../config/config.base';
import {useIsMounted} from '../utils/useIsMounted';
import {Toast} from 'native-base';

/* eslint-disable */
export const RootNavigation = {
  navigate(_name: string, _params?: any) { },
  goBack() { },
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) { },
  getRootState(): NavigationState {
    return {} as any
  },
  dispatch(_action: NavigationAction) { },
}
/* eslint-enable */

export const navigationRef = createNavigationContainerRef();

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: NavigationState | PartialState<NavigationState>,
) {
  if (!state?.index) {
    return undefined;
  }

  const route = state.routes[state?.index];

  // Found the active route -- return the name
  if (!route.state) {
    return route.name;
  }

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state);
}

/**
 * Hook that handles Android back button presses and forwards those on to
 * the navigation or allows exiting the app.
 */
export function useBackButtonHandler(
  canExit: (routeName: string) => boolean,
  canRedirectToHome: (routeName: string) => boolean,
) {
  // ignore if iOS ... no back button!
  if (Platform.OS === 'ios') {
    return;
  }

  // The reason we're using a ref here is because we need to be able
  // to update the canExit function without re-setting up all the listeners

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const canExitRef = useRef(canExit);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const canGoHome = useRef(canRedirectToHome);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    canExitRef.current = canExit;
  }, [canExit]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    canGoHome.current = canRedirectToHome;
  }, [canRedirectToHome]);

  let backBtnPress: number = 0;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // We'll fire this when the back button is pressed on Android.
    const onBackPress = () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      // grab the current route
      const routeName = getActiveRouteName(navigationRef.getRootState());

      if (!routeName) {
        return;
      }

      if (canGoHome.current(routeName)) {
        // navigate(SCREEN_HOME);
        return true;
      }

      // are we allowed to exit?
      if (canExitRef.current(routeName)) {
        // exit and let the system know we've handled the event
        // eslint-disable-next-line react-hooks/exhaustive-deps
        backBtnPress += 1;
        Toast.show({
          description: 'Are you sure you want to close the app?',
          duration: 3000,
        });

        setTimeout(() => {
          backBtnPress = 0;
        }, 3000);

        //  let a = ToastAndroid.show('pizda', ToastAndroid.)
        if (backBtnPress >= 2) {
          Toast.closeAll();
          BackHandler.exitApp();
        }
        return true;
      }

      // we can't exit, so let's turn this into a back action
      if (navigationRef.canGoBack()) {
        navigationRef.goBack();
        return true;
      }

      return false;
    };

    // Subscribe when we come to life
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    // Unsubscribe when we're done
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);
}

/**
 * This helper function will determine whether we should enable navigation persistence
 * based on a config setting and the __DEV__ environment (dev or prod).
 */
function navigationRestoredDefaultState(
  persistNavigation: PersistNavigationConfig,
) {
  if (persistNavigation === 'always') {
    return false;
  }
  // if (persistNavigation === "dev" && __DEV__) return false
  // if (persistNavigation === "prod" && !__DEV__) return false

  // all other cases, disable restoration by returning true
  return true;
}

/**
 * Custom hook for persisting navigation state.
 */
export function useNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState();
  const isMounted = useIsMounted();
  const initNavState = navigationRestoredDefaultState(Config.persistNavigation);
  const [isRestored, setIsRestored] = useState(initNavState);

  const routeNameRef = useRef<string | undefined>();

  const onNavigationStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);

    if (previousRouteName !== currentRouteName) {
      // track screens.
      if (__DEV__) {
        console.log(currentRouteName);
      }
    }

    // Save the current route name for later comparison
    routeNameRef.current = currentRouteName;

    // save nav state in store only if it onboarding or home screens
    // if (
    //   currentRouteName?.includes('ONBOARDING') ||
    //   currentRouteName?.includes('SCREEN_HOME')
    // ) {
    //   // Persist state to storage
    //   storage.save(persistenceKey, state);
    // }
  };

  const restoreState = async () => {
    try {
      const state = await storage.load(persistenceKey);
      if (state) {
        setInitialNavigationState(state);
      }
    } finally {
      if (isMounted()) {
        setIsRestored(true);
      }
    }
  };

  useEffect(() => {
    if (!isRestored) {
      restoreState();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRestored]);

  return {
    onNavigationStateChange,
    restoreState,
    isRestored,
    initialNavigationState,
  };
}

/**
 * use this to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function resetRoot(params = {index: 0, routes: []}) {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot(params);
  }
}
