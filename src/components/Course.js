import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {getTheme} from 'react-native-material-kit';

const theme = getTheme();

const Course = (props) =>{
    return (
        <View style={theme.cardStyle}>
            <Image source={{uri: props.image}} style={theme.cardImageStyle}/>
            <Text style={theme.cardTitleStyle}>{props.title}</Text>
            <Text style={theme.cardContentStyle}>{props.description}</Text>
            <Text style={theme.cardActionStyle}
            onPress={()=>props.handleLink(props.link)}>Tap to link</Text>
          </View>
    );
};

const styles = StyleSheet.create({
    course: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: "100%",
        height: 200
    }
});

export default Course;