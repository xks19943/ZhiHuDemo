/**
 * Created by 明明 on 2017/2/7.
 */
import React,{ Component } from 'react';
import {
    StatusBar
} from 'react-native';

export default class StatusBars extends Component{
    render(){
        return(
            <StatusBar
                backgroundColor={'#0288D1'}
                barStyle={'light-content'}/>
        )
    }
}