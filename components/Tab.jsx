import * as React from 'react';
import { StyleSheet, View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Tweets from '@/components/Tweets';
import { Colors } from '@/constants/Colors';

const AllTweets = () => (
    <View style={styles.scene}>
        <Tweets />
    </View>
);

const Replies = () => (
    <View style={styles.scene}>
        <Text>Replies</Text>
    </View>
);

const Medias = () => (
    <View style={styles.scene}>
        <Text>Medias</Text>
    </View>
);

const Likes = () => (
    <View style={styles.scene}>
        <Text>Likes</Text>
    </View>
);

const renderScene = SceneMap({
    tweets: AllTweets,
    replies: Replies,
    medias: Medias,
    likes: Likes,
});

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        style={styles.tabBar}
        labelStyle={styles.label}
        activeColor={Colors.light.primary}
        inactiveColor={Colors.light.gray}
    />
);

export default function Tab() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'tweets', title: 'Tweets' },
        { key: 'replies', title: 'Replies' },
        { key: 'medias', title: 'Medias' },
        { key: 'likes', title: 'Likes' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        />
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabBar: {
        backgroundColor: '#fff',
        shadowColor: 'transparent',
    },
    indicator: {
        backgroundColor: Colors.light.primary,
        height: 3,
    },
    label: {
        fontWeight: '500',
        color: Colors.light.primary
    },
});
