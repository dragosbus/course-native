import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import Course from './Course';
import data from '../data/courses.json';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return <Icon
        name={"home"}
        size={26}
        style={{color: tintColor}}
      />
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>React Native Courses</Text>
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
  