/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'; // Add this import
import { enableScreens } from 'react-native-screens'; // Add this import

enableScreens(); // Add this line

AppRegistry.registerComponent(appName, () => App);
