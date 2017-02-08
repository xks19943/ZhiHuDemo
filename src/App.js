/**
 * Created by 明明 on 2017/2/5.
 */
import React,{Component} from 'react';
import {
    Navigator,
    BackAndroid,
    ToastAndroid,
    PixelRatio
} from 'react-native';
import DrawerView from './home/DrawerView';
import Splash from 'react-native-splash-screen';
let nav;
/*设置全局的屏幕宽高*/
global.windowWidth = PixelRatio.get('window').width;
global.windowHeight = PixelRatio.get('window').height;

export default class App extends Component{

    constructor(props){
        super(props);
        BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid)
    }

    onBackAndroid = ()=>{
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            const top = routers[routers.length - 1];
            if (top.ignoreBack || top.component.ignoreBack){
                // 路由或组件上决定这个界面忽略back键
                return true;
            }
            const handleBack = top.handleBack || top.component.handleBack;
            if (handleBack) {
                // 路由或组件上决定这个界面自行处理back键
                return handleBack();
            }
            // 默认行为： 退出当前界面。
            nav.pop();
            return true;
        }else if(routers.length ==1){
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用',1000);
            return true;
        }
        return false;
    }

    renderScene = (route,navigator)=>{
        let Component = route.component;
        nav = navigator;
        return <Component {...route.params} navigator={navigator}/>
    }

    configureScene = ()=>{
        return Navigator.SceneConfigs.FloatFromBottom;
    }

    componentDidMount() {
        Splash.hide();
    }

    render(){
        return(
            <Navigator
                initialRoute={{component:DrawerView}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
}