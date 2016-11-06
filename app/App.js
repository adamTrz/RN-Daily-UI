import React, {Component} from 'react';
import {StatusBar} from 'react-native'
import {
  createRouter,
  NavigationProvider,
} from '@exponent/ex-navigation';

import LogIn from './components/logIn/LogIn';
import Checkout from './components/Checkout';
import Drawer from './components/Drawer';

export const Router = createRouter(() => ({
  home: () => LogIn,
  checkout: () => Checkout,
  // tabNavigationExample: () => TabNavigationExample,
  // slidingTabNavigationExample: () => SlidingTabNavigationExample,
  // alertBarsExample: () => AlertBarsExample,
  // translucentBarExample: () => TranslucentBarExample,
  // eventEmitterExample: () => EventEmitterExample,
  // customNavigationBarExample: () => CustomNavigationBarExample,
}));

class App extends Component {
    render() {
        return (
            <NavigationProvider router={Router}>
                <StatusBar barStyle="light-content" />
                <Drawer />
            </NavigationProvider>
        );
    }
}

export default App;
