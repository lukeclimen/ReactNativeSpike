import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Hello World</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color:'darkslateblue',
    fontSize:30
  }
})

export default App;