import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{flex:1 , padding: 35, backgroundColor: "white", gap: 10}}>
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
    </View>
  
    )
    
}

export default App