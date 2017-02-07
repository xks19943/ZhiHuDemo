/**
 * Created by 明明 on 2017/2/7.
 */
import React,{ Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Head extends Component{
    render(){
        const {optionMenu,title,onMessage,onMenu} = this.props;
        return(
            <View style={{height:44,flexDirection:'row',alignItems:'center',paddingHorizontal:8,backgroundColor:'#03A9F4'}}>
                <TouchableOpacity style={{marginHorizontal:8}} onPress={optionMenu}>
                    <Icon name={'bars'} style={{fontSize:32,color:'#ffffff'}}/>
                </TouchableOpacity>
                <Text style={{flex:1,marginHorizontal:8,textAlignVertical:'center',color:'#ffffff',fontSize:16}}
                      numberOfLines={1}>
                    {title}
                </Text>
                <TouchableOpacity style={{marginHorizontal:8}} onPress={onMessage}>
                    <Image
                        style={{width:32,height:32}}
                        source={{uri:'message'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal:8}} onPress={onMenu}>
                    <Image
                        style={{width:32,height:32}}
                        source={{uri:'menu'}}/>
                </TouchableOpacity>
            </View>
        );
    }
}