/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App2 from './App2';
// import PasswordValidator from './PasswordValidator';
// import BackgroundChanger from './BackgroundChanger';
// import RollTheDIce from './RollTheDIce';
// import CurrencyConvertor from './CurrencyConvertor';
import TicTacToe from './TicTacToe';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TicTacToe);
