/**
 * Created by bianlongting .
 * Date 2017/4/27 17-02
 * Email 1137060420@qq.com
 * Description Button组件
 */

import React , { Component } from 'react'

import {
    TouchableOpacity ,
    Text,
    View,
    StyleSheet
} from 'react-native'

class Button extends Component {
    constructor (props){
        super(props)
    }
    render () {
        let touchableProps = {
        };
        if (!this.props.disabled) {     //如果disabled为true,则按钮不能点击
            touchableProps.onPress = this.props.onPress;
            touchableProps.onPressIn = this.props.onPressIn;
            touchableProps.onPressOut = this.props.onPressOut;
            touchableProps.onLongPress = this.props.onLongPress;
        }
        return (
            <TouchableOpacity { ...touchableProps } style = { this.props.styles } >
                <Text
                    style = { this.props.textStyle }
                >{ this.props.text }</Text>
            </TouchableOpacity>
        )
    }
}


export default Button