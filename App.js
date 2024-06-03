import { View, Text, Image } from 'react-native'
import React from 'react'
import {fontAwesome, AntDesign}from "@expo/vector-icons"

const App = () => {
  return (
    <View style={{flex:1 , padding: 35, backgroundColor: "white", gap: 20}}>
      <View>
          <Image 
            source={require("./assets/myImages/image.png")}
            style={{width:150, height: 140, justifyContent:"center"}}/>
      </View>
      <View style={{display: "flex", flexDirection: "row", gap: 10, justifyContent: "center"}}>
        <View>

          <View style = {{backgroundColor: "blue", height: 200, width: 175}}>
            <Text>
              Hello Theo
            </Text>

          </View>
          
        </View>

        <View style = {{backgroundColor: "gold", height: 200, width: 175 }}>
          <Text>Hello Eben</Text>
        </View>
      </View>
<View>
  
</View>
      <View style={{display: "flex", flexDirection: "row", gap: 10, justifyContent: "center"}}>
        <View>

          <View style = {{backgroundColor: "green", height: 200, width: 175}}>
            <Text>
              Hello Theo
            </Text>

          </View>
          
        </View>

        <View style = {{backgroundColor: "brown", height: 200, width: 175 }}>
          <Text>Hello Eben</Text>
        </View>
      </View>
    </View>
  
    )
    
}

export default App