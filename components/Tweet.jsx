import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import mockData from '../data'
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import me from '@/assets/images/me.jpg'

export default function Tweet() {

    const { tweets, user } = mockData
    const tweet = tweets[0]

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.profileImageUrl }} alt={user.name} />
            <Image
                style={styles.profileImage}
                source={require('@/assets/images/me.jpg')}
            />
            <View>
                <View style={styles.profileContainer}>
                    <Text>{user.name}</Text>
                    <Text>@{user.username}</Text>
                    <Text>{tweet.timestamp}</Text>
                </View>
                <Text style={styles.tweetContent}>{tweet.content}</Text>
                <View style={styles.actions}>
                    <View style={styles.action}>
                        <Ionicons name="chatbubble-outline" size={12} color="black" />
                        <Text>{tweet.replies.length}</Text>
                    </View>
                    <View style={styles.action}>
                        <FontAwesome6 name="retweet" size={12} color="black" />
                        <Text>{tweet.retweets}</Text>
                    </View>
                    <View style={styles.action}>
                        {tweet.isLiked ? <Fontisto name="heart" size={12} color="red" /> : <AntDesign name="hearto" size={12} color="black" />}
                        <Text>{tweet.likes}</Text>
                    </View>
                    <Feather name="share" size={14} color="black" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 100
    },
    tweetContent: {
        marginVertical: 8
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
        justifyContent: 'space-between'
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    }
})