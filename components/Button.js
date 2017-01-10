/**
 * Created by luozhong on 16/12/14.
 *
 *
 *
    <Button
         btnStyle={{backgroundColor:"#333"}}
         textStyle={{color:"#fff"}}
         underlayColor="red"
         onPress={
                () => {
                   this.playVideo();
                }
            }
         />
 */
import React, { Component } from 'react';
import{
    StyleSheet,
    View ,
    TouchableHighlight,
    Text
} from 'react-native'

let Button = React.createClass({
    getInitialState:function(){
        return({
            styles:{
                btnText: {
                    color: "#666",
                    fontSize: 16
                },
                button: {
                    backgroundColor: "#d8d8d8",
                    height: 35,
                    padding:10,
                    borderRadius: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom:0
                }
            }
        })
    },

    componentDidMount:function(){
        let originBtnStyle = this.state.styles.button;
        let propBtnStyle = this.props.btnStyle;
        let btnStyle = {};
        for(let i in originBtnStyle){
            if(typeof propBtnStyle[i] != "undefined"){
                btnStyle[i] = propBtnStyle[i];
            }else{
                btnStyle[i] = originBtnStyle[i];
            }
        }
        let originTextStyle = this.state.styles.btnText;
        let propTextStyle = this.props.textStyle;
        let textStyle = {};
        for(let i in originTextStyle){
            if(typeof propTextStyle[i] != "undefined"){
                textStyle[i] = propTextStyle[i];
            }else{
                textStyle[i] = originTextStyle[i];
            }
        }
        this.setState({
            styles:{
                btnText:textStyle,
                button:btnStyle
            }
        })
    },
    render (){
        let underlayColor = this.props.underlayColor || "rgba(0,0,0,0)";

        return (
            <TouchableHighlight onPress={this.props.onPress} style={[this.state.styles.button]} underlayColor={underlayColor}>
                <Text style={this.state.styles.btnText}>{this.props.title}</Text>
            </TouchableHighlight>
        )
    }
});
module.exports = Button;