/**
 * Created by 明明 on 2017/2/25.
 */
import React,{ Component } from 'react';
import {
    Text,
    View,
    InteractionManager,
    WebView,
    TouchableOpacity,
    Image,
    ScrollView,
    PixelRatio
} from 'react-native';
import Model from '../model/Model';
import StatusBars from '../component/StatusBars';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class DetailView extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            image:'',
            share_url:'',
            js:'',
            css:'',
            images:'',
            image_source:'',
            body:'',
            height:0,
            width:0,
        }
    }

    /**
     * 返回上个页面
     */
    goBack = ()=>{
        this.props.navigator && this.props.navigator.pop();
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            Model.newsDetail(this.props.id).then((data)=>{
                const {title,image,share_url,images,image_source,body,css} = data;
                console.log('详情为',data);
                this.setState({
                    title:title,
                    image:image,
                    share_url:share_url,
                    images:images,
                    image_source:image_source,
                    css:css,
                    body:body
                })
            }).catch((e)=>{

            })
        })
    }

    /**
     * 设置webview适应宽高
     * @param title
     */
    onNavChange = (title)=>{
        this.setState({
            height:(parseInt(title.title)+30),
            width:(parseInt(title.url))
        })
    }

    renderImage = ()=>{
        if(this.state.image){
            return(
                <Image
                    source={{uri:this.state.image }}
                    style={{width:WindowWidth,height:WindowWidth/1.8}}/>
            );
        }
    }

    render(){
        return(
            <View style={{flex:1}}>
                <StatusBars/>
                {this.renderNavBar()}
                <ScrollView
                    style={{flex:1}}>
                    {this.renderImage()}
                    <WebView
                        source={{html: `<!DOCTYPE html>
                        <html>
                        <head>
                            <style>
                                ${this.state.css}
                            </style>
                            <script>
                                window.onload=function(){
                                    var images = document.getElementsByClassName('content-image');
                                    var pixelRatio = ${PixelRatio.get()};
                                    var globalWidth = ${GLOBAL.WindowWidth};
                                    if(images != null && images.length>0){
                                        for (var i = 0; i < images.length; i++) {
                                            var imageWidth = images[i].offsetWidth / pixelRatio;
                                            var imageHeight = images[i].offsetHeight / pixelRatio;
                                            var scaling = imageWidth / imageHeight;
                                            if(imageWidth > globalWidth){
                                                imageWidth = globalWidth;
                                            }
                                            imageHeight = imageWidth / scaling;
                                            images[i].style.width = imageWidth + 'px';
                                            images[i].style.height = imageHeight  + 'px';
                                        }
                                    }
                                    window.location.hash = 1;
                                    document.title = document.body.clientHeight;
                                }
                            </script>
                        </head>
                        <body>${this.state.body}</body>
                        </html>`}}
                        style={{width:this.state.width,height:this.state.height}}
                        onNavigationStateChange={(title)=>this.onNavChange(title)}/>
                </ScrollView>
            </View>
        );
    }

    renderNavBar(){
        return(
            <View style={{height:44,flexDirection:'row',alignItems:'center',paddingHorizontal:8,backgroundColor:'#03A9F4'}}>
                <TouchableOpacity style={{marginHorizontal:8}} onPress={()=>this.goBack()}>
                    <Image
                        style={{width:32,height:32}}
                        source={{uri:'back'}}/>
                </TouchableOpacity>

                <View style={{flex:1}}/>

                <TouchableOpacity style={{marginHorizontal:8}}>
                    <Image
                        style={{width:32,height:32}}
                        source={{uri:'share'}}/>
                </TouchableOpacity>

                <TouchableOpacity style={{marginHorizontal:8}}>
                    <Image
                        style={{width:32,height:32}}
                        source={{uri:'collect'}}/>
                </TouchableOpacity>

                <View style={{marginHorizontal:8,flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity>
                        <Image
                            style={{width:32,height:32}}
                            source={{uri:'comment'}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,color:'#ffffff'}}>
                        {'0'}
                    </Text>
                </View>

                <View style={{marginHorizontal:8,flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity>
                        <Image
                            style={{width:32,height:32}}
                            source={{uri:'praise'}}/>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,color:'#ffffff'}}>
                        {'0'}
                    </Text>
                </View>
            </View>
        );
    }


}
