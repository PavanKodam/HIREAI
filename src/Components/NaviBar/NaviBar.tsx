import React from 'react'
import { View ,Text, StyleSheet } from 'react-native'
import { MenuIcon } from '../../assets/SVGIMG/svgIcons'



export default function NaviBar() {
  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <MenuIcon />
      </View>
        <Text style={{fontWeight: 'bold', fontSize: 20,color:'white'}}>Dashboard</Text>
      
    </View>
  )
}

const styles =StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 15,
        marginTop: 20,  
        alignItems: 'center',
       
        
        paddingVertical: 5,
    },
    menuIcon:{
      
    }
    
})