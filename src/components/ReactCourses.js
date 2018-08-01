import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking} from 'react-native';
import data from '../data/courses.json';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Course from './Course';

export default class ReactCourses extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return <Icon
        name={"home"}
        size={26}
        style={{color: tintColor}}
      />
    }
  };

  handleLink(link) {
    Linking.canOpenURL(link).then(supported=> {
      if(supported) {
        Linking.openURL(link);
      } else {
        console.log('dont know');
      }
    })
  }

  render() {    
    return (
      <View style={styles.container}>
        <Text>React Courses</Text>
        <FlatList
          style={styles.listCourses}
          data={data}
          renderItem={({item}, index)=> <Course key={index} {...item} handleLink={this.handleLink.bind(this)}/>
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
  },
  icon: {
    width: 26,
    height: 26
  }
});
