import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {getTheme} from 'react-native-material-kit';

const theme = getTheme();

const Course = (props) =>{
    return (
        <View style={theme.cardStyle}>
            <Image source={{uri: props.image}} style={theme.cardImageStyle}/>
            <Text style={[theme.cardTitleStyle, styles.title]}>{props.title}</Text>
            <Text style={[theme.cardContentStyle, styles.description]}>{props.description}</Text>
            <Text style={[theme.cardActionStyle, styles.courseLink]}
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
    },
    title: {
        width: '100%',
        fontSize: 20,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginLeft: -25,
        marginRight:'auto',
        marginTop: -5,
    },
    description: {
        fontSize: 17
    },
    courseLink: {
        
    }
});

export default Course;