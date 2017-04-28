import React , { Component } from 'react'

import {
	View,
	Text,
    TextInput,
    StyleSheet,
    Alert,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'

import Button from '../components/Button'
import utils from '../utils/index'

var timer = null;

class Login extends Component {
    static navigationOptions = {
        title: '一键登录',
    };
	constructor(props) {
	 	super(props);
	
	  	this.state = {
	  	    mobile : "",
            verify : "",
            flag : true,
            verifyVal : "获取验证码",
            verifyFlag : true
        };
	}
	componentWillUnmount (){
	    //组件卸载后清除计时器
	    clearInterval(timer);
    }
	
	render (){
	    const flag = this.state.flag;
        const verifyFlag = this.state.verifyFlag;
        
		return (
			<View>
				<Text style = { styles.title } >车蚂蚁新老用户,都可以使用手机号快速登录</Text>
                <View>
                    <TextInput
                        style = { styles.input }
                        placeholder = "请输入手机号"
                        maxLength = { 11 }
                        autoFocus = { true }
                        clearButtonMode = { "while-editing" }
                        enablesReturnKeyAutomatically = { true }
                        keyboardType = { "numeric" }
                        value = { this.state.mobile }
                        onChangeText = { (text) => this.changeMobile(text) }
                    />
                    <View style = { styles.verifyBox } >
                        <TextInput
                            style = {[styles.input, styles.verify]}
                            placeholder = "验证码"
                            maxLength = { 6 }
                            clearButtonMode = { "while-editing" }
                            enablesReturnKeyAutomatically = { true }
                            keyboardType = { "numeric" }
                            value = { this.state.verify }
                            onChangeText = { (text) => this.changeVerify(text) }
                        />
                       <Button styles = { styles.btnVerify }  textStyle = { styles.btnText } disabled = { !verifyFlag } onPress = { () => this.getVerify() } text = { this.state.verifyVal } />
                    </View>
                </View>
                <Button styles = {[ styles.btnLogin  , flag ? "" :  styles.validLogin ]} textStyle = { styles.btnLoginText } onPress = { () => this.login() } disabled = { flag }  text = "登录" />
                <View style = { styles.protocol }>
                    <Text style = {{ color : "#666" }} >点击立即登录,表示您已同意</Text>
                    <Button textStyle = {{ color : "#fd6934"}} text = "《车蚂蚁注册协议》"/>
                </View>
			</View>
		)
	}
    
    /**
     * 输入手机号
     * @param text
     */
    changeMobile (text){
        const self = this;
        self.setState({
            mobile : text,
            flag : !(text.length == 11 && self.state.verify.length == 6)
        })
    }
    
    /**
     * 输入验证码
     * @param text
     */
    changeVerify (text){
        const self = this;
        self.setState({
            verify : text,
            flag : !(text.length == 6 && self.state.mobile.length == 11)
        })
    }
    
    /**
     * 获取验证码
     */
    getVerify (){
        const self = this;
	    const mobile = self.state.mobile;
        if (mobile.length !== 11) {
            Alert.alert("请输入正确的手机号",null,[
                { text : '确认' }
            ])
        }else {
            var data = {
                mobile : mobile
            };
            utils.httpRequest("http://stagemall.chemayi.com/api/get-verify-code","POST",data)
                .then((data) => {
                    if (data.flag === 1) {
                        Alert.alert(
                            "已发送验证码",
                            null,
                            [
                                { text : "确认" }
                            ]
                        )
                        var leftTime = 60;
                        timer  = setInterval(function(){
                            if (leftTime == 0) {
                                self.setState({
                                    verifyVal : "重新发送",
                                    verifyFlag : true
                                });
                                clearInterval(timer);
                                return false;
                            }else{
                                self.setState({
                                    verifyVal : leftTime -- + "(s)",
                                    verifyFlag : false
                                });
                                return true;
                            }
                        },1000);
                    }
                })
        }
    }
    
    /**
     * 登录
     */
    login (){
        const state = this.state;
        const {goBack} = this.props.navigation;
        var data = {
            Mobile : state.mobile,
            VerifyCode : state.verify
        }
        utils.httpRequest("http://stagemall.chemayi.com/api/do-login","POST",data)
            .then((data) => {
                if(data.flag === 1){
                    goBack();
                }
            })
    }
}

const styles = StyleSheet.create({
    title : {
        marginTop : 10,
        textAlign : "center",
        marginBottom : 10,
        color : "#666"
    },
    input : {
        height : 40,
        borderColor : "#ccc",
        borderWidth : 1,
        width : "80%",
        backgroundColor : "#fff",
        borderRadius : 3,
        paddingLeft : 11,
        fontSize : 14,
        marginLeft : 31,
    },
    verifyBox : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        height : 40,
        width : "80%",
        marginTop : 10,
    },
    verify : {
        width : "50%",
    },
    btnVerify: {
        width: "43%",
        marginLeft : "7%",
        alignItems : "center",
        justifyContent : "center",
        height : 40,
        backgroundColor:'#fd6934',
        borderRadius:5,
    },
    btnText : {
        color : "#fff"
    },
    btnLogin : {
        width : "80%",
        marginLeft : 30,
        marginTop : 10,
        backgroundColor : "#ccc",
        height : 45,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 5,
        marginBottom : 20
    },
    btnLoginText : {
        color : "#fff",
        fontSize : 17
    },
    validLogin : {
        backgroundColor : "#fd6934"
    },
    protocol : {
        flexDirection : "row",
        justifyContent : "center",
    }
    
})

export default Login;