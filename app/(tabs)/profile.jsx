import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import mockData from '@/data.js'
import ProfileImg from '@/components/ProfileImg'
import Tab from '@/components/Tab'

export default function Profile() {

    const { user } = mockData

    return (
        <View>
            <Image style={styles.coverImg} source={user.profileImageUrl} alt={user.name} />
            <View style={styles.profileContainer}>
                <ProfileImg clickDisable style={{ marginTop: -50 }} user={user} width={75} />
                <Text style={styles.name}>{user.name}</Text>
                <Text>@{user.username}</Text>
                <Pressable style={styles.btn}>
                    Edit profile
                </Pressable>

                <Text style={styles.infos}>{user.bio}</Text>

                <View style={styles.infos}>
                    <Text>{user.website}</Text>
                    <Text>{user.location}</Text>
                    <Text>{user.joinedDate}</Text>
                </View>

                <View style={styles.infos}>
                    <Text><Text style={{ fontWeight: 'bold' }}>{user.followingCount}</Text> Following</Text>
                    <Text><Text style={{ fontWeight: 'bold' }}>{user.followersCount}</Text> Followers</Text>
                </View>
            </View>

            <Tab />

        </View>
    )
}

const styles = StyleSheet.create({
    coverImg: {
        height: 120,
        width: '100%'
    },
    btn: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100,
        width: 'auto',
        position: 'absolute',
        top: 10,
        right: 20
    },
    infos: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        marginVertical: 10
    },
    profileContainer: {
        position: 'relative',
        padding: 15,
        backgroundColor: "#fff"
    },
    name: {
        fontWeight: '600',
        fontSize: 22
    }
})