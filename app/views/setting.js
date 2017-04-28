/**
 * Created by bianlongting .
 * Date 2017/4/28 10-29
 * Email 1137060420@qq.com
 * Description
 */

import React , { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

export default class Setting extends Component {
    static navigationOptions = {
        title : "设置"
    };
    constructor (props) {
        super (props);
        
        this.state = {
            height : 500
        }
    }
    render (){
        return (
            <View style = {{ marginTop  :10 , flex: 1, }}>
                <View style = { styles.setBox } >
                    <Text>关于车蚂蚁</Text>
                    <Image style = { styles.arrow } resizeMode = { "contain" } source = { require('../images/right.gif') } />
                </View>
                <View style = { styles.setBox }>
                    <Text>服务协议</Text>
                    <Image style = { styles.arrow } resizeMode = { "contain" } source = { require('../images/right.gif') } />
                </View>
                <View style = { styles.setBox }>
                    <Text>意见反馈</Text>
                    <Image style = { styles.arrow } resizeMode = { "contain" } source = { require('../images/right.gif') } />
                </View>
                <View style = { styles.setBox }>
                    <Text>欢迎页</Text>
                    <Image style = { styles.arrow } resizeMode = { "contain" } source = { require('../images/right.gif') } />
                </View>
                <Text style = { styles.version }>4.3.1</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    setBox : {
        height : 40,
        paddingLeft : 10,
        paddingRight : 10,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        backgroundColor : "#fff",
        borderBottomWidth : 1,
        borderBottomColor : "#f5f5f5"
    },
    arrow : {
        width : 10,
    },
    version : {
        position : "absolute",
        bottom : 0,
        width : "100%",
        height : 40,
        lineHeight : 40,
        backgroundColor : "#bbb",
        textAlign : "center"
    }
})