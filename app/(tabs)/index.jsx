import { Image, StyleSheet, Platform, View, Pressable } from 'react-native';
import Tweets from "@/components/Tweets"
import Header from '@/components/Header'
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

const router = useRouter();

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Header />
      <Tweets />
      <Pressable onPress={() => router.push('/new')} style={styles.newTweetBtn}>
        <AntDesign name="plus" size={24} color="white" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100vh',
  },
  newTweetBtn: {
    backgroundColor: Colors.light.primary,
    borderRadius: 100,
    padding: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 70,
    right: 20
  }

});
