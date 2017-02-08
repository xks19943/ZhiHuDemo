/**
 * Created by 明明 on 2017/2/5.
 */
import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    ListView,
    RefreshControl
} from 'react-native';
import NavigationBar from './NavigationBar';
import StatusBars from '../component/StatusBars'
import Model from '../model/Model';
import HeadViewPager from './HeadViewPager';
export default class HomeView extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state = {
            dataSource:ds,
            topList:[],
        }
    }

    componentDidMount() {
        Model.lastestNew().then((data)=>{
            console.log(data.top_stories);
            this.setState({topList:data.top_stories})
        }).catch((e)=>{

        })
    }

    render(){
        const {optionMenu} = this.props;
        return(
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    optionMenu={optionMenu}
                    title={'首页'}/>
                <HeadViewPager topList={this.state.topList}/>
                <ListView
                    style={{flex:1}}
                    dataSource={this.state.dataSource}/>
            </View>
        );
    }
}