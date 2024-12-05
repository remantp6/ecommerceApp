import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({title}) => {
  return (
    <View style={{ paddingVertical: 20}}>
      <Text style={{fontSize: 22, fontWeight: 500, color: 'black'}}>{title}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({})