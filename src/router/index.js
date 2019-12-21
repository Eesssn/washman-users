import React from 'react';
import {Image, StyleSheet, AsyncStorage} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Screens from '../stackNavigation';
import SHome from '../stackNavigation/StackHome';
import StackSupport from '../stackNavigation/StackSupport';
import StackBlog from '../stackNavigation/StackBlog';
import StackReserveWash from '../stackNavigation/StackReserveWash';
import StackProfile from '../stackNavigation/StackProfile';

// const Lol = async () => {
//   const token = await AsyncStorage.getItem('Token');
//   if (token !== null || token !== undefined) {
//     get: createStackNavigator(Screens, {
//       initialRouteName: 'Home',
//     });
//   } else {
//     get: createStackNavigator(Screens, {
//       initialRouteName: 'GetStarted',
//     });
//   }
// };
const NavigatorTab = createSwitchNavigator({
  get: createStackNavigator(Screens, {
    initialRouteName: 'GetStarted',
  }),
  tabs: createBottomTabNavigator(
    {
      Profile: createStackNavigator(StackProfile, {
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../../assets/images/user.png')}
              size={30}
              style={styles.icon}
              tintColor={tintColor}
            />
          ),
        },
      }),

      Blog: createStackNavigator(StackBlog, {
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../../assets/images/write-letter.png')}
              size={30}
              style={styles.icon}
              tintColor={tintColor}
            />
          ),
        },
      }),
      ReserveWash: createStackNavigator(StackReserveWash, {
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../../assets/images/stopwatch.png')}
              size={30}
              style={styles.icon}
              tintColor={tintColor}
            />
          ),
        },
      }),
      Support: createStackNavigator(StackSupport, {
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../../assets/images/telemarketer.png')}
              size={30}
              style={styles.icon}
              tintColor={tintColor}
            />
          ),
        },
      }),
      Home: createStackNavigator(SHome, {
        initialRouteName: 'Home',
        navigationOptions: {
          tabBarIcon: ({tintColor, focused}) => (
            <Image
              source={require('../../assets/images/home.png')}
              size={30}
              style={styles.icon}
              tintColor={tintColor}
            />
          ),
        },
      }),
    },
    {
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: '#3498DB',
        showLabel: false,
        style: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 60,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            height: 2,
            width: 2,
          },
          shadowOpacity: 0.016,
          shadowRadius: 5,
          elevation: 5,
        },
      },
    },
  ),
});

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(NavigatorTab);
