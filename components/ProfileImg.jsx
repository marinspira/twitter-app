import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router';

const router = useRouter();

export default function ProfileImg({ width = 75, user, style, clickDisable }) {
    return (
        <Pressable onPress={clickDisable ? null : () => router.push('/profile')}>
            <Image
                style={[
                    styles.profileImg,
                    { width: width, height: width },
                    style
                ]}
                source={user.profileImageUrl}
                alt={user.name}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    profileImg: {
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#fff'
    },
})