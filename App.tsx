import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  useColorScheme
} from "react-native"


function App(){
  const [word, setword] = useState("")
  const isDarkMode = useColorScheme() === 'dark';
  return (
  <SafeAreaView style={{backgroundColor:"gray",flex:1}}>
    <View style={styles.container}>
      <Text style={styles.red}>Hello world</Text>
      <TextInput value={word} onChangeText={(e)=>{setword(e)}} style={{borderWidth:1}}/>
      <Text>Text will be displayed here : {word}</Text>
      <Button onPress={()=>{Alert.alert("hello4324")}} title="Press me" />
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
  },
  red:{
    color:"red"
  }
})
export default App;