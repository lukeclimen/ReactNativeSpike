import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={Styles.header}>
      <Text style={Styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
  title: 'Shopping List'
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