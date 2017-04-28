import React , { Component } from 'react'
import {
	Animated,
	Image,
	Easing
} from 'react-native'

export default class FadeInView extends Component {
	constructor(props) {
      super(props);
      // 初始状态
      this.state = {
          fadeOutOpacity: new Animated.Value(0),
      };
  	}
	startAnimation() {
      this.state.fadeOutOpacity.setValue(1);
      Animated.timing(this.state.fadeOutOpacity, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,// 线性的渐变函数
      }).start();
  }
  componentDidMount() {
      this.startAnimation();
  }

	render (){
		return (
			<Animated.View // 可选的基本组件类型: Image, Text, View(可以包裹任意子View)
	            style = {{flex: 1,alignItems: 'center',justifyContent: 'center',
	                    opacity: this.state.fadeOutOpacity,}}> 
	            <Image source = {require('../../git.jpg') }
	                style = {{width: 400,height: 400}}/>
	        </Animated.View > 
		)
	}

}