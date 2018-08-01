/** @format */

import {AppRegistry} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import ReactCourses from './src/components/ReactCourses';
import NativeCourses from'./src/components/NativeCourses';


const courses = TabNavigator({
    ReactCourses: {screen: ReactCourses},
    NativeCourses: {screen: NativeCourses}
}, {
    tabBarOptions: {
        tabBarComponent: TabBarBottom,
        activeTintColor: '#e91e63',
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});

AppRegistry.registerComponent('courses', () => courses);
