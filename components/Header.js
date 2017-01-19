/**
 * Created by luozhong on 16/12/14.
 */
import React, { Component } from 'react';
import{
    AppRegistry,
    StyleSheet,
    ScrollView,
    ListView,
    Image,
    Text,
    View ,
    Dimensions,
    TouchableOpacity,
    Animated
} from 'react-native'


let screenWidth = Dimensions.get('window').width;

//创建热门活动
let Header = React.createClass({
    styles: {
        content: {
            backgroundColor: "#fff",
            //position:"absolute",
            //left:0,
            //top:0,
            //width:screenWidth,
            //height:64,
        },
        headerBanner: {
            height: 44,
            flexDirection: "row",
            marginTop: 20,
            width: screenWidth,
            borderBottomWidth: 1,
            borderBottomColor: "#FCD9E7",
            alignItems: "center",
            justifyContent: "space-between"
        },
        backImage: {
            width: 30,
            height: 20,
            justifyContent: "center",
            resizeMode: 'contain'
        },
        title: {
            color: "#333",
            width: screenWidth - 120,
            fontSize: 18,
            textAlign: 'center'
        },
        flex: {
            flex: 1
        },
        backBtn: {
            marginLeft: 10,
            height:44,
            justifyContent:"center"
        },
        leftBtn: {
            width: 60,
        },
        rightBtn: {
            width: 60
        }
    },
    getInitialState: function () {
        return ({
            top: new Animated.Value(0),
            hidden: false
        })
    },
    back: function (navigator) {
        navigator.pop();
    },
    initBackBtn: function () {
        if (typeof this.props.backBtn != "undefined" && !this.props.backBtn) {
            return null;
        }
        let btn = null;
        let backIcon = this.props.backIcon;
        if (backIcon) {
            btn = (
                <TouchableOpacity style={[this.styles.backBtn]} onPress={this.back.bind(this,this.props.navigator)}>
                    <Image style={[this.styles.backImage]} source={backIcon}/>
                </TouchableOpacity>
            );
        } else {
            btn = (
                <TouchableOpacity style={[this.styles.backBtn]} onPress={this.back.bind(this,this.props.navigator)}>
                    <Text style={{textAlign:"center",color:"#fff"}}>返回</Text>
                </TouchableOpacity>
            );
        }
        return btn;
    },
    componentDidMount: function () {

    },
    shouldComponentUpdate: function (nextProps, nextState) {
        if (nextProps.hidden) {
            Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
                this.state.top,                 // 将`bounceValue`值动画化
                {
                    toValue: -64                         // 将其值以动画的形式改到一个较小值
                }
            ).start();
        }
        if (!nextProps.hidden) {
            Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
                this.state.top,                 // 将`bounceValue`值动画化
                {
                    toValue: 0                          // 将其值以动画的形式改到一个较小值
                }
            ).start();
        }
        return nextProps.hidden != nextState.hidden
    },
    render (){
        let title = this.props.title || "";
        let rightBtnText = this.props.rightBtnText || "";
        let backgroundStyle = this.props.backgroundStyle || "#fff";
        let textColor = this.props.textColor || "#333";
        return (
            <Animated.View style={[this.styles.content,{backgroundColor:backgroundStyle},{marginTop:this.state.top}]}>
                <View style={this.styles.headerBanner}>
                    <View style={[this.styles.leftBtn]}>
                        {this.initBackBtn()}
                    </View>
                    <View>
                        <Text numberOfLines={1} style={[this.styles.title,{color:textColor}]}>{title}</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.rightBtnFun}>
                        <View style={[this.styles.rightBtn]}>
                            <Text style={{textAlign:"center",color:textColor}}>
                                {rightBtnText}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
});
module.exports = Header;