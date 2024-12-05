import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.customBottom}>
      <Text style={{textAlign: 'center', marginVertical: 'auto', color: 'white', fontSize: 14, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    customBottom: {
        width: 358,
        height: 54,
        backgroundColor: "#E96E6E",
        marginTop: 43,
        marginHorizontal: 'auto',
        borderRadius: 20
    }
})