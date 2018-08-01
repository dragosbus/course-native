import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ReactCourses extends Component {
  static navigationOptions = {
    title: 'React Courses'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to react courses</Text>
        <Button onPress={()=>navigate('NativeCourses')} title="React Navite Courses"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
