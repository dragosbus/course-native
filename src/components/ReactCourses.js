import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';
import data from '../data/courses.json';

import Course from './Course';


export default class ReactCourses extends Component {
  static navigationOptions = {
    title: 'React Courses'
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log(data)
    return (
      <View style={styles.container}>
        <Button onPress={()=>navigate('NativeCourses')} title="React Navite Courses"/>
        <FlatList
          data={data}
          renderItem={({item}, index)=> <Course key={index} {...item}/>
          }
        />
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
