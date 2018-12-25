import React, { Component } from 'react';
import { View, Text, Style, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default class TabOneView extends Component{
	static navigationOptions = {
	  title: 'tabOne',
	  tabBarLabel: 'tabOne',
	}

	constructor(props){
		super(props);
		
		this.state = {
			showModal:false,
		}
	}

	componentDidMount(){

	}

	render(){
		let {showModal} = this.state;
		return(<View style={[styles.pageContainer]}>
				<Modal onRequestClose={() => {this.setState({showModal: !showModal});}} transparent={true} animationType='none' visible={this.state.showModal}>
					<TouchableOpacity style={[styles.modalView]} onPress={()=>{this.setState({showModal: !showModal});}}  activeOpacity={0.8}>
				        <View  style={[styles.modalView]}></View>
		            </TouchableOpacity>
			      </Modal>
			      <TouchableOpacity style={[styles.btn1]} onPress={()=>{this.setState({showModal: !showModal});}}  activeOpacity={0.8}>
		              <Text style={styles.txt}>打开modal遮罩层</Text>
	            </TouchableOpacity>
			</View>);
	}

}


const styles = StyleSheet.create({
  pageContainer: {flex:1,backgroundColor:'#00ff00'},
  modalView: {flex:1,backgroundColor:'rgba(0, 0, 0, .2)'},
  btn1:{marginTop: 200,borderRadius:5, alignItems:'center',justifyContent:'center',height:43,backgroundColor:'#ffffff'},
});

