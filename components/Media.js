/**
 * Created by luozhong on 16/12/14.
 */
import React, { Component } from 'react';
import{
    AppRegistry,
    StyleSheet,
    Image,
    View ,
    Dimensions,
    TouchableHighlight,
    Animated
} from 'react-native'

import Video from 'react-native-video';

let width = Dimensions.get('window').width;

let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'absolute',
        height: height,
        width: width,
        top: 0,
        left: 0
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
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

let Media = React.createClass({
    pausedVideo: function () {
        this.props.pausedVideo();
    },
    render (){
        let paused = this.props.paused;
        let h = (!paused && this.props.media == "video") ? height : 0;
        let opacity = (!paused && this.props.media == "video") ? 1 : 0;
        return (
            <TouchableHighlight style={[styles.container,{height:h},{opacity:opacity}]}  onPress={this.pausedVideo} underlayColor="rgba(0,0,0,0)">
                <View style={[styles.container,{height:h}]}>
                    <Video
                        source={this.props.url}
                        style={[styles.backgroundVideo]}
                        ref={(ref) => {
                             this.player = ref
                            }}                             // Store reference
                        rate={1.0}                     // 0 is paused, 1 is normal.
                        volume={1.0}                   // 0 is muted, 1 is normal.
                        muted={false}                  // Mutes the audio entirely.
                        paused={paused}                 // Pauses playback entirely.
                        //resizeMode="cover"             // Fill the whole screen at aspect ratio.
                        repeat={false}                  // Repeat forever.
                        playInBackground={false}       // Audio continues to play when app entering background.
                        playWhenInactive={true}       // [iOS] Video continues to play when control or notification center are shown.
                        progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
                        onLoadStart={this.loadStart}   // Callback when video starts to load
                        onLoad={this.setDuration}      // Callback when video loads
                        onProgress={this.setTime}      // Callback every ~250ms with currentTime
                        onEnd={this.onEnd}             // Callback when playback finishes
                        onError={this.videoError}
                        />
                </View>
            </TouchableHighlight>
        )
    }
});
module.exports = Media;