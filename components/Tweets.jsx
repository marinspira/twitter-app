import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import mockData from '../data'
import { FontAwesome6 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import timeDifference from '@/utils/timeDifference.js'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';

const router = useRouter();

export default function Tweets() {

    const { tweets, user } = mockData
    const tweet = tweets[0]

    return (
        <Pressable onPress={() => router.push('/individualTweet')} style={styles.container}>
            <Image
                style={styles.profileImage}
                source={user.profileImageUrl}
            />
            <View style={styles.containerContent}>
                <View style={styles.profileContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text>@{user.username}</Text>
                    <Text>{timeDifference(tweet.timestamp)}</Text>
                </View>
                <Text style={styles.tweetContent}>{tweet.content}</Text>
                <View style={styles.actions}>
                    <View style={styles.action}>
                        <Ionicons name="chatbubble-outline" size={14} color="black" />
                        <Text>{tweet.replies.length}</Text>
                    </View>
                    <View style={styles.action}>
                        <FontAwesome6 name="retweet" size={14} color="black" />
                        <Text>{tweet.retweets}</Text>
                    </View>
                    <View style={styles.action}>
                        {tweet.isLiked ?
                            <Fontisto name="heart" size={14} color="red" />
                            :
                            <AntDesign name="hearto" size={14} color="black" />
                        }
                        <Text>{tweet.likes}</Text>
                    </View>
                    <Feather name="share" size={14} color="black" />
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: Colors.light.secondary
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
        marginVertical: 8,
        fontSize: 16
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
    },
    name: {
        fontWeight: '600'
    },
    containerContent: {
        width: '85%'
    },
})