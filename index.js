/** @format */

import {AppRegistry} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from'./src/components/NativeCourses';


const courses = createBottomTabNavigator({
    ReactCourses: {screen: ReactCourses},
    NativeCourses: {screen: NativeCourses}
}, {
    tabBarOptions: {
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff'
        }
    }
});

AppRegistry.registerComponent('courses', () => courses);
