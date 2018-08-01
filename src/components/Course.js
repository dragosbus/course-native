import React from 'react';
import {View, Text, Image, Button} from 'react-native';

const Course = (props) =>{
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.description}</Text>
            <Text>{props.views}</Text>
            <Button 
              title="Link to course"
            />
            <Text>{props.link}</Text>
            <Image source={{uri: props.image}} style={{width: 400, height: 200}}/>
          </View>
    );
};

export default Course;