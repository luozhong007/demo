/**
 * Created by luozhong on 17/1/6.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    View,
    Dimensions,
    ListView,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';

let Header = require('../components/Header');

let Global = require('../components/Global');

let w = Dimensions.get('window').width;

let screenHeight = Dimensions.get('window').height;

let singleWidth = w / 2 - 4;

const styles = StyleSheet.create({

    activityContent: {
        backgroundColor: "red",
        marginBottom: 10
    },
    banner: {
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5"
    },
    bannerIcon: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    vertialAlignCenter: {
        justifyContent: "center"
    },
    bannerTitle: {
        fontSize: 18
    },
    moreTextView: {
        marginTop: 10,
        right: 10
    },
    moreText: {
        color: "#35BABC"
    },

    //图片
    activityImg: {
        width: Dimensions.get('window').width - 20,
        height: (Dimensions.get('window').width - 20) * 0.5,
        resizeMode: Image.resizeMode.cover
    },
    imgView: {
        width: Dimensions.get('window').width - 20,
        height: (Dimensions.get('window').width - 20) * 0.5,
        marginBottom: 10,
        marginLeft: 10,
        overflow: "hidden"
    },
    actInfoView: {
        position: "absolute",
        bottom: 10,
        left: 10,
        backgroundColor: "rgba(0,0,0,0)"
    },
    actInfoText: {
        color: "#fff"
    },
    actInfoTextDesc: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "600"
    },
    actInfoTextTime: {
        fontSize: 12
    },
    actAuthorView: {
        position: "absolute",
        top: 10,
        left: 10,
        backgroundColor: "rgba(0,0,0,0)",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    clubName: {
        color: "#fff",
        fontSize: 14,
        marginLeft: 10
    }
});

export default class Sticky extends React.Component {

    // 初始化模拟数据
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(Global.activities),
            top: 0,
            scrollTop: 0,
            //showHideTransition: "fade",
            showHideTransition: "slide",
            isHidden: false,
            headerHidden: false
        };

    }

    getRealHeight(uri) {
        Image.getSize(uri, (width, height)=> {
            return singleWidth / (width / height);
        });
    }

    initList(rowData,_this) {
        let data = rowData,
            index = this.props.index,
            cover_img = data.cover_img,
            head_img = data.club.cover_img,
            club_name = data.club.club_name,
            title = data.title,
            ts = data.ts;
        return (
            <TouchableOpacity>
                <View style={styles.imgView} key={index}>
                    <Image style={styles.activityImg} source={{uri:cover_img}}>
                        <View style={styles.actAuthorView}>
                            <View>
                                <Image style={styles.bannerIcon} source={{uri:head_img}}/>
                            </View>
                            <View style={styles.vertialAlignCenter}>
                                <Text style={styles.clubName}>
                                    {club_name}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.actInfoView}>
                            <Text style={[styles.actInfoText,styles.actInfoTextDesc]}>{title}</Text>
                            <Text style={[styles.actInfoTextTime,styles.actInfoText]}>{ts}</Text>
                        </View>
                    </Image>
                </View>
            </TouchableOpacity>
        )
    }

    onScroll(e) {
        let y = e.nativeEvent.contentOffset.y;//获取滚动高度
        let h = 60;//滚动隐藏高度
        let contentHeight = e.nativeEvent.contentSize.height;//容器高度
        if (y >= contentHeight - screenHeight - 64) {
            return
        }
        if (y > 0 && y - this.state.top >= h) {
            //console.log("---------------------");
            this.state.top = y;
            this.showStatusBar(true);
        }
        if (y < this.state.scrollTop && y - this.state.top <= h) {
            //console.log("++++++++++++++++");
            this.state.top = y;
            this.showStatusBar(false);
        }

        this.state.scrollTop = y;
    }

    showStatusBar(type) {
        this.setState({
            isHidden: type,
            headerHidden: type
        });
    }

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar barStyle="light-content" hidden={this.state.isHidden} animated={true} showHideTransition={this.state.showHideTransition}/>
                <Header
                    backgroundStyle="#333"
                    backIcon={require('../images/back_bai.png')}
                    textColor="#fff"
                    title='滚动隐藏'
                    rightBtnText=''
                    navigator={this.props.navigator}
                    hidden={this.state.headerHidden}
                    />
                <ListView
                    style={{backgroundColor:"#fff",paddingTop:10}}
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    onScroll={
                        (event) => this.onScroll(event)
                    }
                    renderRow={
                        (rowData) => this.initList(rowData)
                      }
                    />
            </View>
        )
    }
}
