import React, { Component } from 'react';
import { View, Text, Style, StyleSheet } from 'react-native';

export default class TabTwoView extends Component{
	static navigationOptions = {
	  title: 'tabTwo',
	  tabBarLabel: 'tabTwo',
	}

	constructor(props){
		super(props);
		
		this.state = {}
	}

	componentDidMount(){

	}

	render(){

		return(<View style={{flex:1,backgroundColor:'#ff0000'}}/>);
	}

}
