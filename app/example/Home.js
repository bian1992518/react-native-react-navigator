import React , { Component } from 'react'
import {
	View,
	Text,
	Button,
	Alert,
	TouchableHighlight
} from 'react-native'
export default class HomeScreen extends Component {
	render (){
		const { navigate } = this.props.navigation;
		const { test } = this.props;
		return (
			<View>
				<Text>这里是首页11</Text>
				<Button
		          onPress={() => this.props.navigation.navigate('Chat',{ user : 'blt' })}
		          title="Chat with Lucy"/>
		         <Button
		          onPress={() => this.props.navigation.navigate('Counter',{ user : 'blt' })}
		          title="Chat with Lucy"/>
		        <TouchableHighlight 
		          onPress={() => this.test()}>
		          <Text>12</Text>
		        </TouchableHighlight>
			</View>
		)
	}
	test (){
		Alert.alert('tishi',store.getState().count)
	}
}



