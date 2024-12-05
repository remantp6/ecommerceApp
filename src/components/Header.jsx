import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('HOME')} style={styles.appContainer}>
        {isCart ? (
          <Ionicons
            name={'chevron-back-sharp'}
            size={28}
            style={{ color: '#E96E6E' }}
          />
        ) : (
          <Ionicons name={'apps-sharp'} size={28} style={{ color: '#E96E6E' }} />
        )}
      </TouchableOpacity>
      {isCart && <Text style={{fontSize: 24, fontWeight: 500, color: 'black'}}>My Cart</Text>}
      <Image
        source={require('../assets/images/remant-profile-img.jpg')}
        style={{
          resizeMode: 'cover',
          height: 40,
          width: 38,
          borderRadius: 100,
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    paddingTop: 10,
  },
  appContainer: {
    backgroundColor: '#FFFFFF',
    height: 48,
    width: 48,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
