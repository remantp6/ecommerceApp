import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Category = ({item, selectedCategory, setSelectedCategory}) => {

  return (
    <TouchableOpacity
     style={{marginRight: 10}}
      onPress={() => setSelectedCategory(item)}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.categoryItem,
          {fontWeight: 400},
            selectedCategory === item && {
                color: '#FFFFFF',
                backgroundColor: '#E96E6E',
                },
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryItem: {
    fontSize: 16,
    color: '#938F8F',
    backgroundColor: '#DFDCDC',
    paddingVertical: 10,
    paddingHorizontal: 14,
    textAlign: 'center',
    borderRadius: 16,
  },
});
