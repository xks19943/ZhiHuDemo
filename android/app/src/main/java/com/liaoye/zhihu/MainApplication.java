package com.liaoye.zhihu;

import android.app.Application;
import android.os.Handler;

import com.facebook.react.ReactApplication;

import com.liaoye.BuildConfig;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.liaoye.zhihu.share.SharePackage;
import com.liaoye.zhihu.splash.SplashScreenReactPackage;
import com.liaoye.zhihu.vector.VectorIconsPackage;
import com.umeng.socialize.PlatformConfig;
import com.umeng.socialize.UMShareAPI;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends Application implements ReactApplication {

  {
    PlatformConfig.setWeixin("wx967daebe835fbeac", "5bb696d9ccd75a38c8a0bfe0675559b3");
    PlatformConfig.setQQZone("100424468", "c7394704798a158208a74ab60104f0ba");
  }


  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SplashScreenReactPackage(),
            new VectorIconsPackage(),
            new SharePackage(new Handler())
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    UMShareAPI.get(this);
  }
}
