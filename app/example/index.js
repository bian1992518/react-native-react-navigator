import React , { Component } from 'react'
import {
	Text,
	View
} from 'react-native'
import Button from 'react-native-button'


export default class Example extends Component {
	constructor(props) {
	  	super(props);
	
	 	this.state = {};
	}
	render (){
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Button onPress = { () => navigate('Test') }>Test</Button>
				<Button onPress = { () => navigate('Main') }>Main</Button>
				<Button onPress = { () => navigate('FadeInView') }>FadeInView</Button>
				<Button onPress = { () => navigate('TabView') }>TabView</Button>
				<Button onPress = { () => navigate('Elements' ,{ user: 'Lucy' }) }>Elements</Button>
			</View>
		)
	}
}