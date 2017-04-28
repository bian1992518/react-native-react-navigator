/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import { 
    StackNavigator,
    TabNavigator
} from 'react-navigation';

import test from './views/test'
import test2 from './views/test1'
import Example from './example/index'
import FadeInView from './example/animated'
import HomeScreen from './example/Home'
import Elements from './example/elements'
import Index from './views/index'
import Login from './views/login'
import Setting from './views/setting'

const MainScreenNavigator = TabNavigator ({
    Home : {
        screen : HomeScreen,
        navigationOptions : {
            tabBar : {
                label : "Home"
            }
        }
    }
})

const CMY = StackNavigator({
    Index : {
        screen : Index,
        navigationOptions : {
            header : {
                visible : false
            }
        }
    },
    Setting : { screen : Setting },
    Login : { screen : Login},
    Main : {
        screen : test,
        navigationOptions : {
            header : {
                title : "12",
                left : (
                    <Button onPress = { () => test1() } title="12"></Button>
                ),
                right : (
                    <Button title="12"></Button>
                )
            }
        }
    },
    Test : {
        screen : test2
    },
    Example : { 
        screen : Example,
        navigationOptions : {
            header : {
                title : "Example"
            }
        }
    },
    FadeInView : {
        screen : FadeInView
    },
    TabView : {
        screen : MainScreenNavigator
    },
    Elements : {
        screen : Elements,
    }
},{
    headerMode : "screen",
    initialRouteName : 'Index'
});

function test1 (){
    alert("hah")
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

AppRegistry.registerComponent('CMY', () => CMY);
