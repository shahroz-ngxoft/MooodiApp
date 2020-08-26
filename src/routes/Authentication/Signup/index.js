import {Button, Text, View} from 'react-native'
import React, {Component} from 'react';

class Signup extends Component {
  render() {
    return (
      
        // <navigation />
        <View>
          <Text>Signup here</Text>
          <Button
        title="Go to Login"
        onPress={() => this.props.navigation.navigate('Login')}
      />
        </View>
      
    );
  }
}

export default Signup;