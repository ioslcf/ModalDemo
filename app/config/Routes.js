import React from 'react';
import {Dimensions,Platform} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import TabOneView from '../views/TabOneView';
import TabTwoView from '../views/TabTwoView';


// 标签导航
const HomeNavigator = TabNavigator({
  TabOne: {screen: TabOneView},
  TabTwo: {screen: TabTwoView},
}, {
  tabBarOptions: {
    inactiveTintColor: '#000000',
    activeTintColor: 'white',
    style: {backgroundColor: '#42C5F4',height:52},
    indicatorStyle: {height: 0},
    labelStyle: {margin: 0, fontSize: 15, marginTop: 0},
    tabStyle: {paddingBottom: 0, borderTopWidth: 0, borderTopColor: '#efefef'},
    showIcon: true
  },
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazyLoad: true,
  backBehavior:'none'
});

// 主栈
export const MainNavigator = StackNavigator({

  TabOneView: {screen: HomeNavigator,
    navigationOptions:{
      header:null
    }
  }
}, {
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); },  // 回调
});
