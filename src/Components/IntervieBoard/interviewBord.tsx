import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { TouchableHighlight } from 'react-native'
import { Image } from 'react-native-svg'
import { ImageBackground } from 'react-native'
import GeminiLiveInterview from '../../Pages/interviewScreen/interviewChat'
import { useNavigation } from '@react-navigation/native'


export default function InterviewBoard() {
    const navigation = useNavigation<any>();
    return (
        
        <ImageBackground source={require('../../assets/interviewback.jpeg')} style={{ justifyContent: 'center', height: 200, borderRadius: 20,
            

    
         }} imageStyle={{
            borderRadius: 20
        }} resizeMode='stretch' >
            <View style={styles.container}>


                <View style={styles.textLeft}>
                    <View >
                        <Text style={[styles.textop, styles.textcolor]}>Start a Interview Now</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'gray' }}>Answer AI-generated qusions and get instant feeadback</Text>
                    </View>
                    <TouchableHighlight style={styles.button} onPress={() => navigation.navigate('live')} >
                        <Text style={{ textAlign: 'center', color: 'white' }}>Start Interview </Text>
                    </TouchableHighlight>
                </View>
            </View>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        padding: 20,


    },
    textLeft: {

        width: '55%',
        gap: 8,
    },
    textop: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 20,
        width: '70%',
        marginTop: 8,

    },
    textcolor: {
        color: 'white',
    }

})