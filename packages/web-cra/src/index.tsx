import React from 'react';
import { AppRegistry } from 'react-native'
import { createGlobalStyle } from 'styled-components';
import { App as AppInner } from 'components/src/App'

const GlobalStyle = createGlobalStyle`
  input[type=text]:focus-visible {
    outline: none;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppInner />
    </React.Fragment>
  );
}

AppRegistry.registerComponent('myprojectname', () => App)
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
})
