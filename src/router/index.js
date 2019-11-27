import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Screens from '../stackNavigation';
import SHome from '../stackNavigation/StackHome';
import StackSupport from '../stackNavigation/StackSupport';
import StackBlog from '../stackNavigation/StackBlog';
import StackReserveWash from '../stackNavigation/StackReserveWash';
import StackProfile from '../stackNavigation/StackProfile';
import Feather from 'react-native-vector-icons/Feather';

const NavigatorTab = createSwitchNavigator({
  get: createStackNavigator(Screens, {
    initialRouteName: 'GetStarted',
  }),
  tabs: createBottomTabNavigator(
    {
      Support: createStackNavigator(StackSupport, {
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../../assets/images/telemarketer.png')}
              size={30}
              color="#900"
              style={styles.icon}
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
              color="#900"
              style={styles.icon}
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
              color="#900"
              style={styles.icon}
            />
          ),
        },
      }),
      Profile: createStackNavigator(StackProfile, {
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../../assets/images/user.png')}
              size={30}
              color="#900"
              style={styles.icon}
            />
          ),
        },
      }),
      Home: createStackNavigator(SHome, {
        initialRouteName: 'Home',
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <Image
              source={require('../../assets/images/home.png')}
              size={30}
              color="#900"
              style={styles.icon}
            />
          ),
        },
      }),
    },
    {
      initialRouteName: 'Home',
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
