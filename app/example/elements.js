import SideMenu from 'react-native-side-menu'
import React , { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button
} from 'react-native'
import { StackNavigator , NavigationActions } from 'react-navigation';

class Menu extends Component {
	render (){
		return (
			<Text>这里是sidemenu</Text>
		)
	}
}

var isOpen = true

import { Test } from './test'

function test1 (param){
    isOpen = !isOpen
}

const navigateAction = NavigationActions.navigate({
  routeName: 'Profile',
  params: {},

  // navigate can have a nested navigate action that will be run inside the child router
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
})

export default class Elements extends Component {
	static navigationOptions = {
    	header : {
    		title: 'Welcome',
    		left : (
                <Button onPress = { () => Test(self) } title="12"></Button>
            ),
            right : (
                <Button title="12"></Button>
            )
    	}
  	};
	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		isOpen : false
	  	};
	}
	render (){
		this.props.navigation.dispatch(navigateAction)
		const menu = <Menu />
		const {state} = this.props.navigation;
		const {goBack} = this.props.navigation;
		return (
			<SideMenu menu = {menu} isOpen = { isOpen } >
				<View style={styles.container}>
					<Text>12</Text>
					<Button onPress = { () => this.flag() } title = "12" />
				</View>
				<Text>Name: {state.params.user}</Text>
				<Button
			        onPress={() => goBack()}
			        title="Go back from this HomeScreen" />
			</SideMenu>
		)
	}
	flag (){
		this.setState({
			isOpen : !this.state.isOpen
		})
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});