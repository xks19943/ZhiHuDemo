package com.liaoye.umeng;

import android.os.Handler;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**友盟分享管理类
 * Created by 明明 on 2017/2/10.
 */
public class UMSharePackage implements ReactPackage {
    private Handler handler;
    public UMSharePackage(Handler handler) {
        this.handler = handler;
    }

    /**
     * 创建本地modules的调用
     * @param reactContext
     * @return
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        ArrayList<NativeModule> modules = new ArrayList<>();
        modules.add(new UMShareModule(reactContext,handler));
        return modules;
    }

    /**
     * 创建JsModules的调用
     * @return
     */
    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    /***
     * 创建自定义的view
     * @param reactContext
     * @return
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
