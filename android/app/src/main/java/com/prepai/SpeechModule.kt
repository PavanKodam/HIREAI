package com.prepai

import android.content.Intent
import android.os.Bundle
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class SpeechModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    private var recognizer: SpeechRecognizer? = null

    override fun getName() = "SpeechModule"

    private fun emit(event: String, data: String) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(event, data)
    }

    @ReactMethod
    fun startListening() {
        reactContext.runOnUiQueueThread {
            recognizer?.destroy()
            recognizer = SpeechRecognizer.createSpeechRecognizer(reactContext)
            recognizer?.setRecognitionListener(object : RecognitionListener {
                override fun onReadyForSpeech(p: Bundle?) { emit("onSpeechStart", "") }
                override fun onBeginningOfSpeech() {}
                override fun onRmsChanged(p: Float) {}
                override fun onBufferReceived(p: ByteArray?) {}
                override fun onEndOfSpeech() { emit("onSpeechEnd", "") }
                override fun onError(code: Int) {
                    emit("onSpeechError", "Error code: $code")
                }
                override fun onResults(results: Bundle?) {
                    val text = results
                        ?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                        ?.firstOrNull() ?: ""
                    emit("onSpeechResults", text)
                }
                override fun onPartialResults(results: Bundle?) {
                    val text = results
                        ?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                        ?.firstOrNull() ?: ""
                    if (text.isNotEmpty()) emit("onSpeechPartial", text)
                }
                override fun onEvent(type: Int, params: Bundle?) {}
            })

            val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
                putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL,
                    RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
                putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-US")
                putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true)
                putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, 3000L)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, 1500L)
            }
            recognizer?.startListening(intent)
        }
    }

    @ReactMethod
    fun stopListening() {
        reactContext.runOnUiQueueThread {
            recognizer?.stopListening()
        }
    }

    @ReactMethod
    fun destroy() {
        reactContext.runOnUiQueueThread {
            recognizer?.destroy()
            recognizer = null
        }
    }

    @ReactMethod
    fun addListener(eventName: String) {}

    @ReactMethod
    fun removeListeners(count: Int) {}
}