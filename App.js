/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format 
 * @flow 
 */

import React, {Component} from 'react';
import { eventEmitter, initialMode } from 'react-native-dark-mode';

import { DarkModeProvider } from 'react-native-dark-mode';
import Main from './src/routes/Navigations'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeMode: initialMode,
    };
  }
  componentDidMount() {
    eventEmitter.on('currentModeChanged', mode => {
      console.log('Switched to', mode, 'mode');
      this.setState({
        themeMode: mode,
      });
    });
  }
  render() {
    return (
      <DarkModeProvider mode={this.state.themeMode}>
        <Main/>
        </DarkModeProvider>
    );
  }
}

export default App;
