import {Bu, Button, Text, View} from 'react-native'
import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      
        // <navigation />
        <View>
          <Text>Login here</Text>
          <Button
        title="Go to Signup"
        onPress={() => this.props.navigation.navigate('Signup')}
      />
        </View>
      
    );
  }
}

export default Login;