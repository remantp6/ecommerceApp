import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const CartScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header isCart={true} />
        <View style={styles.cartContainer}>
          <Image
            source={require('../assets/images/remant-profile-img.jpg')}
            style={{
              resizeMode: 'cover',
              height: 120,
              width: '25%',
              borderRadius: 6,
            }}
          />
          <View style={styles.itemDetails}>
            <Text style={styles.name}>Jacket Jeans</Text>
            <Text style={styles.price}>$4.5</Text>
            <View>
            </View>
          </View>
          <FontAwesome6 name={'trash'} size={20} color={'#E96E6E'}/>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  cartContainer: {
    flexDirection: 'row',
    paddingTop: 20
  },
  itemDetails: {
    flex: 1,
    paddingStart: 12
  },
  name: {
    fontSize: 18,
    color: '#444444'
  },
  price: {
    color: '#797979',
    marginTop: 6,
    fontSize: 16
  }
});
