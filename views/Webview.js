/**
 * Created by luozhong on 16/12/28.
 */
import React, { Component } from 'react'
import {
    WebView,
    View
} from 'react-native'

let Header = require('../components/Header');

let Webview = React.createClass({
    styles: {
        flex: 1,
        backgroundColor: "#f8f8f8"
    },
    getInitialState: function () {
        return ({
            url: "#"
        })
    },
    componentDidMount: function () {

    },
    render (){
        return (
            <View style={{flex:1}}>
                <Header
                    backgroundStyle="#333"
                    backIcon={require('../images/back_bai.png')}
                    textColor="#fff"
                    title='浏览器'
                    navigator={this.props.navigator}
                    />
                <WebView style={this.styles}
                         source={{uri:this.state.url,method: 'GET'}}
                         scalesPageToFit={true}
                         startInLoadingState={true}
                    >
                </WebView>
            </View>
        );
    }
});

module.exports = Webview;


