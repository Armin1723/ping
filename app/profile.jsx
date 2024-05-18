import { StatusBar, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Profile = () => {
  return (
    <SafeAreaProvider style={{
      backgroundColor: 'aliceblue',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Profile Page</Text>
      <Link href='/' style={{
        color: 'blue',
      }}> Go to home.</Link>
      <StatusBar style='auto' />
    </SafeAreaProvider>
  )
}

export default Profile
