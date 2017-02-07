/**
 * Created by liaoye on 2017/2/7.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class MenuView extends Component{
    render(){
        return(
            <View style={{flex:1, backgroundColor:'#efeff4'}}>
                <Text style={{fontSize:40, color:'#000000'}}>
                    {'这是菜单'}
                </Text>
            </View>
        );
    }
}