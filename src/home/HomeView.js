/**
 * Created by 明明 on 2017/2/5.
 */
import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import Head from './Head';
import StatusBars from '../component/StatusBars'
export default class HomeView extends Component{
    render(){
        const {optionMenu} = this.props;
        return(
            <View style={{flex:1}}>
                <StatusBars/>
                <Head
                    optionMenu={optionMenu}
                    title={'首页'}/>
            </View>
        );
    }
}