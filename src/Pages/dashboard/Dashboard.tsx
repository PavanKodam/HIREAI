import React, { Component } from 'react'
import { View } from 'react-native'
import NaviBar from '../../Components/NaviBar/NaviBar'
import Profile from '../../Components/Profile/Profile'
import { StyleSheet } from 'react-native'
import InterviewBoard from '../../Components/IntervieBoard/interviewBord'
import Cards from '../../Components/cards/cards'
import RecentInterview from '../../Components/Recent Interviews/RecentInterview'



export const DashboardScreen = () => {
  []
  return (
    <View style={styles.container}>
      <NaviBar />
      <Profile />
      <InterviewBoard />
      <Cards/>
      <RecentInterview />

    </View>
    )
  }


  const styles = StyleSheet.create({

    container: {
      
      
      paddingHorizontal: 10,
      gap:10,
      backgroundColor:'black',
      flex:1  

    }
  })