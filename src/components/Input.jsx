import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Input = () => {
  return (
    <View style={styles.inputContainer}>
     <Fontisto name={'search'} size={22} style={{color: '#C0C0C0'}}/>
     <TextInput style={{paddingLeft: 8}} placeholder='Search your items...'/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 12,
        paddingHorizontal: 12
    }
})