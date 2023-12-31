import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({}) => {
  return (
    <View>
      <TextInput placeholder="Add Item..." style={Styles.input} />
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
