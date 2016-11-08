<<<<<<< HEAD
import Exponent, { Asset, Components } from 'exponent';
=======
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
import React, {Component} from 'react';
import {StatusBar} from 'react-native'
import {
  createRouter,
  NavigationProvider,
} from '@exponent/ex-navigation';

import LogIn from './components/logIn/LogIn';
<<<<<<< HEAD
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
=======
import Checkout from './components/Checkout';
import Drawer from './components/Drawer';

export const Router = createRouter(() => ({
  home: () => LogIn,
  checkout: () => Checkout,
  // tabNavigationExample: () => TabNavigationExample,
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
  // slidingTabNavigationExample: () => SlidingTabNavigationExample,
  // alertBarsExample: () => AlertBarsExample,
  // translucentBarExample: () => TranslucentBarExample,
  // eventEmitterExample: () => EventEmitterExample,
  // customNavigationBarExample: () => CustomNavigationBarExample,
}));

class App extends Component {
<<<<<<< HEAD
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
=======
    render() {
>>>>>>> 1065eae48ff06cb70a187260df8b04b2e79cd975
        return (
            <NavigationProvider router={Router}>
                <StatusBar barStyle="light-content" />
                <Drawer />
            </NavigationProvider>
        );
    }
}

export default App;
