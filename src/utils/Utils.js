/**
 * Created by 明明 on 2017/2/10.
 */
import React,{ Component } from 'react';
import {
    NativeModules
} from 'react-native'
var ShareModule = NativeModules.UMShareModule;

var Utils = {
    share:function (url,title,desc,imageUrl) {
        ShareModule.shareOpen({
            url:url,
            title:title,
            description:desc,
            thumb:imageUrl,
        },()=>{
            //console.log("shareOpen");
        });
    }
}

module.exports = Utils;