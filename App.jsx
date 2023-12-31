import { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={Styles.container}>
      <Header title='Shopping List'/>
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 60
  },
})

export default App;