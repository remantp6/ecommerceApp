import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Title from '../components/Title';
import Input from '../components/Input';
//import Category from '../components/Category';
import ButtonGroup from '../components/ButtonGroup';
import ProductCard from '../components/ProductCard';

const headerProps = {
  imageUrl: require('../assets/images/remant-profile-img.jpg'),
  icon: 'apps-sharp',
}
const HomeScreen = () => {
  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header headerProps={headerProps}/>
      <Title title="Match Your Style"/>
      <Input/>
      <ButtonGroup/>
      <ProductCard/>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
});
