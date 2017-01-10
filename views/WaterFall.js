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

let w = Dimensions.get('window').width;

let singleWidth = w / 2 - 4;

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        margin: 2,
        width: singleWidth,
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
});

export default class WaterFall extends React.Component {

    // 初始化模拟数据
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.ds = ds;
        this.state = {
            dataSource: ds.cloneWithRows([])
        };
    }

    componentDidMount(){
        this.setState({
            dataSource:this.ds.cloneWithRows(Global.activities)
        })
    }
    getRealHeight(uri) {
        Image.getSize(uri, (width, height)=> {
            return singleWidth / (width / height);
        });
    }

    initList(rowData) {
        let data = rowData,
            index = this.props.index,
            cover_img = data.cover_img,
            head_img = data.club.cover_img,
            club_name = data.club.club_name,
            title = data.title,
            ts = data.ts;

        console.log(index);
        let h = 100 + Math.random() * 100;
        return (
            <View style={[styles.item,{height:h}]}>
                <Image style={{width:singleWidth,height:h}} source={{uri:cover_img}}/>
            </View>
        )
    }
    reFresh(){

    }
    render() {
        return (
            <View style={{flex:1}}>
                <Header
                    backgroundStyle="#333"
                    backIcon={require('../images/back_bai.png')}
                    textColor="#fff"
                    title='瀑布流'
                    rightBtnFun={
                        () => this.reFresh()
                    }
                    navigator={this.props.navigator}
                    />
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    enableEmptySections={true}
                    renderRow={
                            (rowData) => this.initList(rowData)
                          }
                    />
            </View>
        )
    }
}
