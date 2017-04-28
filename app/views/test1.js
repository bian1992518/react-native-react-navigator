import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import util from '../utils/index'

export default class CMY extends Component {
    componentWillMount (){
        util.httpRequest()
        .then(data => {
            console.log(data);
        })
    }
  	render() {
    	return (
      		<View >
       			<Text>这里是Test1232</Text>
      		</View>
    	);
  	}
}

