import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LeftArrow } from '../../assets/SVGIMG/svgIcons'

export default function RecentInterview() {
    // const data = [
    //     {
    //         id: 1,
    //         company: "Google",
    //         title: "Frontend Developer",
    //         date: "12-12-2023",
    //         progress: '75%',
    //         icon: ">",
    //         img: "",
    //     },
    //     {
    //         id: 2,
    //         company: "Meta",
    //         title: "Backend Developer",
    //         date: "10-11-2023",
    //         progress: '50%',
    //         icon: ">",
    //         img: "",
    //     }
    // ]

    return (
        <View style={styles.container}>
        {/* header */}
            <View style={styles.RecentContainer}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Recent Interviews</Text>
                <View style={styles.viewallcontainer}>
                    <Text>View all</Text>
                    <View style={styles.leftarrow}>
                        <LeftArrow />
                    </View>
                </View>
            </View>
            <View style={styles.line}></View>
        {/* interview list */}
            <View style={styles.interviewlistcontainer}>
                <View style={styles.logopulstext}>
                    <View style={styles.interviewmainlogo}>
                        <View style={styles.interviewlogo}>

                        </View>
                    </View>
                    <View style={styles.interviewtextcontainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, }}>
                            <Text style={styles.companyname}>
                                Google
                            </Text>
                            <Text style={{ fontSize: 18, }}>
                                -
                            </Text>
                            <Text style={styles.jobtitle}>
                                Frontend Developer
                            </Text>
                        </View>
                        <Text style={styles.date}>
                            12-12-2023
                        </Text>
                    </View>
                </View>
                <View style={styles.progressmaincontainer}>
                    <View style={styles.progresscontainer}>
                        <Text style={styles.progress}>
                            75%
                        </Text>
                    </View>
                    <View style={styles.iconcontainer}>
                        <LeftArrow />
                    </View>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 10,
        borderWidth: 1,
        paddingHorizontal:10,
        paddingVertical: 10,
        borderRadius: 10

    },
    RecentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    viewallcontainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    line: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 5,
    },
    interviewlistcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    logopulstext: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    interviewmainlogo: {
        width: 40,
        height: 40,
        borderColor: 'black',
        borderRadius: 20,
        padding: 3,
    },
    interviewlogo: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',
        borderRadius: 20,
    },
    interviewtextcontainer: {
        flexDirection: 'column',

    },
    companyname: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    jobtitle: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 11,
        color: 'gray',
    },
    progressmaincontainer: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 15
    },
    progresscontainer: {
        width: 45,
        height:28,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 8,

    },
    iconcontainer: {
        justifyContent:'center'
    },
    progress: {
        textAlign:'center',
        fontSize: 12
        
    },
    leftarrow:{
        
    }
})