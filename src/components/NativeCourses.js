import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import Course from './Course';
import data from '../data/courses.json';

export default class App extends Component {
  static navigationOptions = {
    title: 'React Native Courses'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to react courses</Text>
        <Button onPress={()=>navigate('ReactCourses')} title="React Courses"/>
        <FlatList
          style={styles.listCourses}
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
    listCourses: {
      padding: 10,
    }
  });
  