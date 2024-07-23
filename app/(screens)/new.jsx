import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import mockData from '@/data.js'

export default function newTweet() {

  const { user } = mockData

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={user.profileImageUrl} alt={user.name} />
      <TextInput
        placeholder='What is happening?'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    padding: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100
  }
})