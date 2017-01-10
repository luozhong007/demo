/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    View,
    StatusBar
} from 'react-native';

let Media = require('./components/Media');

let Button = require('./components/Button');

let Webview = require('./views/Webview');

let ListViewDemo = require('./views/ListViewDemo');

import WaterFall from './views/WaterFall';

import Sticky from './views/Sticky';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});


let HomePage = React.createClass({
    getInitialState: function () {
        return ({
            paused: true
        })
    },
    playVideo: function () {
        this.setState({
            paused: false
        });
    },
    jumpPage: function (id) {
        this.props.navigator.push({
            id: id
        })
    },
    render (){
        return (
            <View style={styles.container}>
                <Button
                    btnStyle={{backgroundColor:"#333",marginBottom:10}}
                    textStyle={{color:"#fff"}}
                    title="播放视频"
                    underlayColor="rgba(0,0,0,0)"
                    onPress={
                        () => {
                           this.playVideo();
                        }
                    }
                    />
                <Button
                    btnStyle={{backgroundColor:"#333",marginBottom:10}}
                    textStyle={{color:"#fff"}}
                    title="ListView"
                    underlayColor="rgba(0,0,0,0)"
                    onPress={
                        () => {
                           this.jumpPage("ListViewDemo");
                        }
                    }
                    />
                <Button
                    btnStyle={{backgroundColor:"#333",marginBottom:10}}
                    textStyle={{color:"#fff"}}
                    title="WaterFall"
                    underlayColor="rgba(0,0,0,0)"
                    onPress={
                        () => {
                           this.jumpPage("WaterFall");
                        }
                    }
                    />
                <Button
                    btnStyle={{backgroundColor:"#333",marginBottom:10}}
                    textStyle={{color:"#fff"}}
                    title="滚动隐藏头部"
                    underlayColor="rgba(0,0,0,0)"
                    onPress={
                        () => {
                           this.jumpPage("Sticky");
                        }
                    }
                    />
                <Button
                    btnStyle={{backgroundColor:"#333"}}
                    textStyle={{color:"#fff"}}
                    title="跳转webview"
                    underlayColor="rgba(0,0,0,0)"
                    onPress={
                        () => {
                           this.jumpPage("Webview");
                        }
                    }
                    />

                <Media media="video" paused={this.state.paused} url={require('./assets/meinan.mp4')} pausedVideo={() => {
                    this.setState({
                        paused: true
                    })
                }}/>
            </View>
        );
    }
});
const showHideTransitions = [
    'fade',
    'slide'
];

export default class demo extends Component {
    //切换场景
    renderNav(route, nav) {
        switch (route.id) {
            case 'HomePage':
                return (
                    <View style={{flex:1}}>
                        <StatusBar barStyle="default" animated={true}/>
                        <HomePage navigator={nav}/>
                    </View>
                );
            case 'Webview':
                return (
                    <View style={{flex:1}}>
                        <StatusBar barStyle="light-content" animated={true}/>
                        <Webview navigator={nav} url="https://www.taobao.com"/>
                    </View>
                );
            case 'ListViewDemo':
                return (
                    <View style={{flex:1}}>
                        <StatusBar barStyle="light-content" animated={true}/>
                        <ListViewDemo navigator={nav} />
                    </View>
                );
            case 'WaterFall':
                return (
                    <View style={{flex:1}}>
                        <StatusBar barStyle="light-content" animated={true}/>
                        <WaterFall navigator={nav} />
                    </View>
                );
            case 'Sticky':
                return (
                    <View style={{flex:1}}>
                        <StatusBar barStyle="light-content" animated={true}/>
                        <Sticky navigator={nav} />
                    </View>
                );
            default :
                return null;
                break
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{id:"HomePage"}}
                renderScene={this.renderNav}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromRight}
                />
        );
    }
}

AppRegistry.registerComponent('demo', () =>demo);
