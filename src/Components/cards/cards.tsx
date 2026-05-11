import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'

export default function Cards() {

    const data = [
        {
            id: 1,
            value: 12,
            title: "interview completed",
            img: ""
        }, {
            id: 2,
            value: '85%',
            title: "average  scrore",
            img: ""
        }
    ]

    return (

        <>
            <View style={styles.cardmainContainer}>
                {
                    data.map((data) => (
                        <View style={styles.cardmainContainer}>
                            <View style={styles.cardContainer} key={data.id}>
                                <View style={styles.imagemainconainer}>
                                    <View style={styles.imagecontainer}>

                                    </View>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.textvalue}>
                                        {data.value}
                                    </Text>
                                    <Text style={styles.texttitle}>
                                        {data.title}
                                    </Text>
                                </View>
                            </View>
                        </View>

                    )
                    )}
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    cardmainContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    imagemainconainer: {
        width: 50,
        height: 50,
        borderWidth: 1,

    }
    , imagecontainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
    },
    textContainer: {
        flexDirection: 'column',

    },
    cardContainer: {
        flexDirection: 'row',
        width: 150,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        gap: 10,
        alignItems: 'center',
    },
    textvalue: {
        fontSize: 27,
        fontWeight: 'bold',
        color:'white'
    },
    texttitle: {
        fontSize: 14,
        width: '80%',
        color:'gray'
    }
})