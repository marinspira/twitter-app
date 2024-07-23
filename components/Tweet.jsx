import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import mockData from '@/data'
import { FontAwesome6 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

export default function Tweet() {

    const { tweets, user } = mockData
    const tweet = tweets[0]

    return (
        <View style={styles.container}>

            <View style={styles.containerContent}>
                <Image
                    style={styles.profileImage}
                    source={user.profileImageUrl}
                />
                <View style={styles.profileContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text>@{user.username}</Text>
                </View>
            </View>

            <Text style={styles.tweetContent}>{tweet.content}</Text>

            <View style={styles.activy}>
                <Text>{tweet.retweets} Retweets</Text>
                <Text>{tweet.likes} Likes</Text>
            </View>

            <View style={styles.actions}>
                <View style={styles.action}>
                    <Ionicons name="chatbubble-outline" size={14} color="black" />
                </View>
                <View style={styles.action}>
                    <FontAwesome6 name="retweet" size={14} color="black" />
                </View>
                <View style={styles.action}>
                    {tweet.isLiked ?
                        <Fontisto name="heart" size={14} color="red" />
                        :
                        <AntDesign name="hearto" size={14} color="black" />
                    }
                </View>
                <Feather name="share" size={14} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: Colors.light.secondary
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 100
    },
    tweetContent: {
        marginVertical: 8,
        fontSize: 16
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'space-around',
        paddingTop: 10
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    name: {
        fontWeight: '600'
    },
    containerContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    activy: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: Colors.light.secondary,
        paddingVertical: 10,
        gap: 15
    }
})