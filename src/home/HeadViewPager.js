/**
 * Created by 明明 on 2017/2/8.
 */
import React,{ Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class HeadViewPager extends Component{
    constructor(props){
        super(props);
    }



    render(){
        let { topList } = this.props;
        if(topList.length == 0){
            return null;
        }
        return(
            <Swiper
                style={{width:windowWidth,height:200}}
                autoplay={true}
                dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13,
                            borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13,
                            borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
                paginationStyle={{bottom: 70}}>
                {
                    topList.map((top,index)=>{
                        console.log(top.image);
                        return (
                             <Image
                                key={index}
                                style={{width:windowWidth,height:200}}
                                source={{uri:top.image}}/>
                        );
                    })
                }
            </Swiper>
        );
    }
}