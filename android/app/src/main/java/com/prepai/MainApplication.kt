package com.prepai

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.wenkesj.voice.VoicePackage

class MainApplication : Application(), ReactApplication {

    override val reactHost: ReactHost
    get() {
        val packages = PackageList(this).packages.toMutableList()
        // Ensure VoicePackage is added if it's not auto-linked
        if (packages.none { it is VoicePackage }) {
            packages.add(VoicePackage())
        }
        packages.add(SpeechPackage())
        return getDefaultReactHost(applicationContext, packages)
    }

    override fun onCreate() {
        super.onCreate()
        loadReactNative(this)
    }
}