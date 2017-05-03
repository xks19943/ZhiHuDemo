/**
 * Created by 明明 on 2017/2/10.
 */
import React,{ Component } from 'react';
import {
    NativeModules
} from 'react-native'
var ShareModule = NativeModules.UMShareModule;

var Utils = {
    share(url,title,desc,imageUrl) {
        ShareModule.shareOpen({
            url:url,
            title:title,
            description:desc,
            thumb:imageUrl,
        },()=>{
            //console.log("shareOpen");
        });
    },

    /**
     * 求前一天的日期 返回
     * @param time
     */
    getTime(time){
        let pattern = /(\d{4})(\d{2})(\d{2})/;
        let formatedDate = time.replace(pattern, '$1/$2/$3');  //分成 yyyy/mm/dd 的样式
        let timeStamp = Date.parse(formatedDate);           //求yyyy/mm/dd到1970/1/1的毫秒值
        let dayTime = 24 * 60 *60 * 1000;
        let newDateTime = timeStamp - dayTime;
        let dayDate = new Date(newDateTime);
        console.log(dayDate);
        let year = dayDate.getFullYear();
        let month = dayDate.getMonth() + 1;
        let date = dayDate.getDate();
        return year + ( month <10 ? '0' + month : month)+ (date <10 ? '0' + date : date);
    },


}

export default Utils;