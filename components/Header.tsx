import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>Shopping List</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
})

export default Header;