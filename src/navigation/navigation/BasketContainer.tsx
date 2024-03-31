import React from "react";
import { View, Text } from "react-native";

  export default function BasketContainer({navigation}) {
  
  
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text 
            onPress={()=> alert('This is the "Main" tab-screen')}
            style={{fontSize: 26, fontWeight:'bold', color: 'white'}}>
            BasketContainer
        </Text>
      </View>
    );
  }