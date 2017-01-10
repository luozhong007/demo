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
    StatusBar
} from 'react-native';

let Header = require('../components/Header');

let Global = require('../components/Global');

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

class ListViewDemo extends React.Component {

// 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.ds = ds;
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    initList(rowData) {
        let data = rowData,
            index = this.props.index,
            cover_img = data.cover_img,
            head_img = data.club.cover_img,
            club_name = data.club.club_name,
            title = data.title,
            ts = data.ts;
        return (
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
        )
    }

    //shouldComponentUpdate(props, state, context)  {
    //}

    componentDidMount(){
        this.setState({
            dataSource: this.ds.cloneWithRows(Global.activities)
        })
    }

    reFresh() {
        this.setState({
            dataSource: this.ds.cloneWithRows(Global.activities)
        })
    }

    render() {
        return (
            <View>
                <Header
                    backgroundStyle="#333"
                    backIcon={require('../images/back_bai.png')}
                    textColor="#fff"
                    title='listView'
                    rightBtnFun={
                        () => this.reFresh()
                    }
                    navigator={this.props.navigator}
                    />
                <ListView
                    style={{backgroundColor:"#fff",paddingTop:10}}
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    initialListSize={2}
                    renderRow={(rowData) =>
                     <View style={styles.viewsContent}>
                        {this.initList(rowData)}
                     </View>
                    }
                    />
            </View>
        )
    }
}
module.exports = ListViewDemo;