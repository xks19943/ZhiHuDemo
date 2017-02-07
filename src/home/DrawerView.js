/**
 * Created by 明明 on 2017/2/7.
 */
import React,{ Component } from 'react';
import Drawer from 'react-native-drawer';
import HomeView from './HomeView';
import MenuView from './MenuView';

export default class DrawerView extends Component{
    constructor(props){
        super(props);
    }

    openMenu = ()=>{
        this.drawer.open();
    }

    closeMenu = ()=>{
        this.drawer.close();
    }

    render(){
        return(
            <Drawer
                ref={(drawer) => this.drawer = drawer}
                type="overlay"
                openDrawerOffset={0.3}
                content={<MenuView/>}>
                <HomeView optionMenu={this.openMenu}/>
            </Drawer>
        );
    }
}