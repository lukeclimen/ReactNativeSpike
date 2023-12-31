import {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Bread'},
    {id: 3, text: 'Eggs'},
    {id: 4, text: 'Juice'},
  ]);

  const createId = () => {
    let maxIdValue = 0;
    items.forEach(element => {
      if (element.id > maxIdValue) {
        maxIdValue = element.id;
      }
    });
    return maxIdValue + 1;
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    const newItem = {
      id: createId(),
      text,
    };
    setItems(prevItems => {
      return [...prevItems, newItem];
    });
  };

  return (
    <View style={Styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
