import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item}) => {
  return (
    <TouchableOpacity style={Styles.listItem}>
      <View style={Styles.listItemView}>
        <Text style={Styles.listItemText}>{item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" />
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'lightgrey',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
