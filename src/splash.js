import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'

export default function SplashScreen() {
  return (
    <View style={{flex: 1, justifyContent: `space-around`, alignItems: "center" , backgroundColor: "pink"}}>
     <StatusBar hidden={true}/> 
      <Image style={{width: 200, height: 200 ,margin: 50}} source={{uri: `https://ww1.prweb.com/prfiles/2013/01/25/10361147/gI_60506_Icon%20News%20App.png`}} />
      <Text style={{color: "white" , padding: 30, textAlign: "center",fontSize: 30}} >NEWSIFY</Text>
    </View>
  )
}