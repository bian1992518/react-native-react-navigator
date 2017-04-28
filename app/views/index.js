/**
 * Created by bianlongting .
 * Date 2017/4/28 10-06
 * Email 1137060420@qq.com
 * Description
 */
import React , { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'


export default class Index extends Component {
    constructor (props) {
        super(props);
        
        this.state = {}
    }
    render (){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>这里是首页</Text>
                <Text onPress = { () => navigate('Login') }>Login</Text>
                <Text onPress = { () => navigate('Setting') }>Setting</Text>
            </View>
        )
    }
}
