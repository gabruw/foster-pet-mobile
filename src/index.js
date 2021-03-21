//#region Imports

import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import { expoDeploy, name } from '../app.json';
import App from './App';

//#endregion

if (expoDeploy) {
    registerRootComponent(App);
} else {
    AppRegistry.registerComponent(name, () => App);
}
