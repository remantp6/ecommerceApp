import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';
import Button from '../components/Button';

const sizeArray = ['S', 'M', 'L', 'XL'];
const colorArray = [
  '#91A1B0',
  '#B11D1D',
  '#1F44A3',
  '#9F632A',
  '#1D752B',
  '#000000',
];
const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const {params} = useRoute();
  const item = params.item;
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 10}}>
          <Header />
        </View>
        <Image source={item.imageUrl} style={{width: '100%', height: 396}} />
        <View style={{padding: 20}}>
          <View style={styles.textContainer}>
            <Text style={[styles.name, {fontWeight: 'bold'}]}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View>
            <Text style={[styles.name, {paddingTop: 20, paddingBottom: 15}]}>
              Size
            </Text>
            <View style={styles.sizeContainer}>
              {sizeArray.map((size, index) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={index}
                  onPress={() => setSelectedSize(size)}
                  style={styles.sizeValueContainer}>
                  <Text
                    style={[
                      styles.textSize,
                      selectedSize == size && {color: '#E96E6E'},
                    ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View>
            <Text style={[styles.name, {paddingTop: 20, paddingBottom: 15}]}>
              Colors
            </Text>
            <View style={styles.colorContainer}>
              {colorArray.map((color, index) => (
                <TouchableOpacity
                activeOpacity={0.7}
                  onPress={() => setSelectedColor(color)}
                  style={[
                    styles.colorBorder,
                    selectedColor == color && {
                      borderWidth: 2,
                      borderColor: color,
                    },
                  ]} key={index}>
                  <View style={[styles.colorGroup, {backgroundColor: color}]} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Button title={'Add to Cart'} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  name: {
    color: '#444444',
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    color: '#888',
    fontWeight: 'bold',
  },
  sizeContainer: {
    flexDirection: 'row',
  },
  sizeValueContainer: {
    height: 36,
    width: 36,
    backgroundColor: 'white',
    borderRadius: 18,
    marginHorizontal: 6,
  },
  textSize: {
    margin: 'auto',
    fontWeight: 'bold',
  },
  colorContainer: {
    flexDirection: 'row',
  },
  colorBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 100,
    marginHorizontal: 6,
  },
  colorGroup: {
    height: 30,
    width: 30,
    borderRadius: 100,
    margin: 'auto',
  },
});
