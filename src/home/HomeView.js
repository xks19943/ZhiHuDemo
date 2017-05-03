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
    RefreshControl,
    PixelRatio,
    ScrollView,
    InteractionManager
} from 'react-native';
import NavigationBar from './NavigationBar';
import StatusBars from '../component/StatusBars';
import Model from '../model/Model';
import HeadViewPager from './HeadViewPager';
import Utils from '../utils/Utils';
import DetailView from './DetailView';
export default class HomeView extends Component{
    currentDate = '';
    storyList = [];
    canLoad = false;
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state = {
            dataSource:ds,
            isRefreshing:false,
            topList:[],
        }
    }


    onMenu = ()=>{
        let url = 'https://www.baidu.com/';
        let title = '百度坑爹的渣渣';
        let desc  = '百度就是个坑爹货';
        let imageUrl = 'https://www.baidu.com/img/bd_logo1.png';
        Utils.share(url,title,desc,imageUrl);
    }

    toDetail = (id)=>{
        this.props.navigator && this.props.navigator.push({
            component:DetailView,
            params:{
                id:id
            }
        })
    }

    componentDidMount() {
        this.onRefresh();
    }

    getData = () =>{
        Model.lastestNew().then((data)=>{
            console.log(data);
            const {top_stories,stories,date} = data;
            this.currentDate = Utils.getTime(date);
            this.storyList = stories;
            this.setState({
                isRefreshing:false,
                topList:top_stories,
                dataSource:this.state.dataSource.cloneWithRows(this.storyList),
            })
        }).catch((e)=>{

        })
    }

    onRefresh = ()=>{
        this.setState({isRefreshing:true});
        InteractionManager.runAfterInteractions(()=>{
            this.getData();
        })
    }

    onScroll = () =>{
        if(this.currentDate >= 20130520 && !this.canLoad){
            this.canLoad = true;
        }
    }

    onLoadMore = ()=>{
        if(!this.canLoad){
            return;
        }
        Model.beforeNew(this.currentDate).then((data)=>{
            this.canLoad = false;
            const {stories,date} = data;
            this.storyList = this.storyList.concat(stories);
            this.currentDate = date;
            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(this.storyList),
            })
        }).catch((e)=>{

        })
    }

    renderHeader= ()=>{
        return(
            <HeadViewPager topList={this.state.topList}/>
        );
    }


    renderItem = (rowData)=>{
        return (
            <TouchableOpacity
                onPress={()=>this.toDetail(rowData.id)}
                style={{marginHorizontal:16,backgroundColor:'#ffffff',flexDirection:'row',padding:16,marginBottom:8}}>
                <Text style={{flex:1,marginRight:16,fontSize:FontSize.primary,color:Theme.primaryTextColor}}
                    numberOfLines={3}>
                    {rowData.title}
                </Text>
                <Image
                    source={{uri:rowData.images[0]}}
                    style={{width:50,height:50,resizeMode:'contain'}}/>
            </TouchableOpacity>

        );
    }


    render(){
        const {optionMenu} = this.props;
        return(
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    onMenu={this.onMenu}
                    optionMenu={optionMenu}
                    title={'首页'}/>

                <ListView
                    style={{flex:1,backgroundColor:'#f4f4f5'}}
                    renderRow={this.renderItem}
                    dataSource={this.state.dataSource}
                    onScroll={this.onScroll}
                    onEndReachedThreshold={10}
                    onEndReached={this.onLoadMore}
                    renderHeader={this.renderHeader}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}
                            progressBackgroundColor={'#ffffff'}
                            colors={[Theme.primaryColor]}
                            />
                    }
                />

            </View>
        );
    }
}