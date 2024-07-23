import { Colors } from '@/constants/Colors'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import twitter from '@/assets/images/logo.png'
import mockData from '@/data'
import { AntDesign } from '@expo/vector-icons';
import ProfileImg from '@/components/ProfileImg'

export default function Header() {

    const { user } = mockData

    return (
        <View style={styles.container}>
            <ProfileImg user={user} width={32} />
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
})