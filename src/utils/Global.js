/**
 * Created by 明明 on 2017/2/16.
 * 这里定义一些全局变量
 */

import React,{Component} from 'react';
import {
    Dimensions,
    PixelRatio
} from 'react-native';

global.WindowWidth = Dimensions.get('window').width;
global.WindowHeight = Dimensions.get('window').height;
global.Theme = {
    primaryDarkColor:'#0288D1',
    primaryColor:'#03A9F4',
    primaryTextColor:'#333333',
    secondTextColor:'#555555',
    grayTextColor:'#888888',
};

global.FontSize = {
    large:18,
    primary:16,
    normal:14,
    small:12,
}