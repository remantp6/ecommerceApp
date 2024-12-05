import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const products = [
  {
    id: 1,
    name: 'Acrylic Sweater',
    price: '$4.35',
    imageUrl: require('../assets/images/product1.jpeg'),
  },
  {
    id: 2,
    name: 'Jacket Jeans',
    price: '$6.35',
    imageUrl: require('../assets/images/product2.jpeg'),
  },
  {
    id: 3,
    name: 'Jacket Jeans',
    price: '$4.35',
    imageUrl: require('../assets/images/product3.jpeg'),
  },
  {
    id: 4,
    name: 'Winter Coat',
    price: '$6.35',
    imageUrl: require('../assets/images/product4.jpeg'),
  },
];

const ProductCard = () => {
  const navigation = useNavigation();

  const [likedProducts, setLikedProducts] = useState({});
  const handleLike = ( id ) => {
    setLikedProducts(prevLikedProducts => ({
      ...prevLikedProducts,
      [id]: !prevLikedProducts[id],
    }));
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate('PRODUCT_DETAILS', {item});
      }}
      style={styles.card}>
      <Image source={item.imageUrl} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.heartIcon}
        onPress={() => handleLike(item.id)}>
        {!likedProducts[item.id] ? (
          <Ionicons name={'heart-outline'} size={28} color={'#E55B5B'} />
        ) : (
          <Ionicons name={'heart'} size={28} color={'#E55B5B'} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <FlatList
      key={products.id}
      scrollEnabled={false}
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 28,
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    top: 8,
    right: 15,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 6,
    borderRadius: 100,
  },
  image: {
    width: '92%',
    height: 270,
    borderRadius: 16,
    resizeMode: 'cover',
    marginBottom: 10,
    marginLeft: 8,
  },
  name: {
    color: '#444444',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    marginLeft: 10,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginLeft: 10,
  },
});

export default ProductCard;
