import 'react-native-gesture-handler'
import { AppRegistry, Text } from 'react-native'
import { App } from 'components/src/App'

import React from 'react';
import { name as appName } from './app.json'

overrideText();
AppRegistry.registerComponent(appName, () => App)

export function overrideText() {
  const oldRender = (Text as any).render;
  (Text as any).render = function (...args) {
      const origin = oldRender.call(this, ...args);
      return React.cloneElement(origin, {
          style: [{/* color: 'red', */ fontFamily: 'Pragmatica Medium'}, origin.props.style]
      });
  };
}
