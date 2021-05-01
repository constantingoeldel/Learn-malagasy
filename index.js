// /**
//  * @format
//  */
// import StorybookUIRoot from "./storybook";
// AppRegistry.registerComponent('learnGasy', () => StorybookUIRoot);

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Root from './Root';
AppRegistry.registerComponent(appName, () => Root);
