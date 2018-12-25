import React, { Component } from 'react';
import { Platform, View, StatusBar, NativeModules} from 'react-native';
import { MainNavigator } from '../config/Routes';

let SplashScreen = NativeModules.SplashScreen;

class StartView extends Component{

	constructor(props){
		super(props);
		 this.state = {};
	}

	componentDidMount() {
		if(Platform.OS === 'ios'){
			setTimeout(()=>{
				SplashScreen && SplashScreen.hide();
			},3000);//此处的三秒其实是不准的 应该会大于三秒钟 多出的时间是js环境加载的时间
		}

	}

	render(){
		return (
			<View style={{flex:1,backgroundColor:'red'}}>
				<StatusBar hidden={!(this.state.complete&&this.state.guide)} />
				<MainNavigator/>
			</View>
		);
	}

}

export default StartView;
