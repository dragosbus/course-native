import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const Course = (props) =>{
    return (
        <View style={styles.course}>
            <Image source={{uri: props.image}} style={styles.image}/>
            <Text>{props.title}</Text>
            <Text>{props.description}</Text>
            <Text>{props.views}</Text>
            <Button 
              title="Link to course"
            />
            <Text>{props.link}</Text>
          </View>
    );
};

const styles = StyleSheet.create({
    course: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    image: {
        width: "100%",
        height: 200
    }
});

export default Course;