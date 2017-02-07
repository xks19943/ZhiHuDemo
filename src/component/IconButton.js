/**
 * Created by 明明 on 2017/2/6.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class IconButton extends Component{
    render(){
        return(
            <Icon name={this.props.name} style={this.props.style}/>
        );
    }
}