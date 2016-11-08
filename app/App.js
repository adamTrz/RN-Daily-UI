import Exponent, { Asset, Components } from 'exponent';
import React, {Component} from 'react';
import {StatusBar} from 'react-native'
import {
  createRouter,
  NavigationProvider,
} from '@exponent/ex-navigation';

import LogIn from './components/logIn/LogIn';
import Checkout from './components/checkOut/Checkout';
import Netflix from './components/netflix/Netflix';
import Drawer from './components/Drawer';

const assets = [
    require('./assets/banner.png')
]

export const Router = createRouter(() => ({
  home: () => LogIn,
  checkout: () => Checkout,
  netflix: () => Netflix,
  // slidingTabNavigationExample: () => SlidingTabNavigationExample,
  // alertBarsExample: () => AlertBarsExample,
  // translucentBarExample: () => TranslucentBarExample,
  // eventEmitterExample: () => EventEmitterExample,
  // customNavigationBarExample: () => CustomNavigationBarExample,
}));

class App extends Component {
    state = {
        bootstrapped: false
    }
    componentDidMount() {
        this._bootstrap()
    }

    _bootstrap = async () => {
        const promises = assets.map(module => Asset.fromModule(module).downloadAsync())
        await Promise.all(promises)
        this.setState({bootstrapped: true})
    }

    render() {
        if (!this.state.bootstrapped) return null
        return (
            <NavigationProvider router={Router}>
                <StatusBar barStyle="light-content" />
                <Drawer />
            </NavigationProvider>
        );
    }
}

export default App;
