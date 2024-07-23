import { Colors } from '@/constants/Colors'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import twitter from '@/assets/images/logo.png'
import mockData from '@/data'
import { AntDesign } from '@expo/vector-icons';

export default function Header() {

    const { user } = mockData

    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={user.profileImageUrl} alt="User icon" />
            <Image source={twitter} alt="Twitter logo" />
            <AntDesign name="setting" size={24} color={Colors.light.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: Colors.light.background,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20
    },
    icon: {
        width: 32,
        height: 32,
        borderRadius: 100
    }
})