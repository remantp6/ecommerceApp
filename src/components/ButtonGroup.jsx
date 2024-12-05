import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Category from './Category';

const buttonCategories = ['Trending now', 'All','Childs', 'Mens', 'Womens'];
const ButtonGroup = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        data={buttonCategories}
        renderItem={({item}) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={item => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ButtonGroup;

const styles = StyleSheet.create({
  flatListContainer: {
    marginVertical: 35,
  },
});
