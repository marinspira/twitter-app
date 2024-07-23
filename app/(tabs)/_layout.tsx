import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // tabBarIcon: ({ color, focused }) => (
          //   // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          // tabBarIcon: ({ color, focused }) => (
          //   // <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          // tabBarIcon: ({ color, focused }) => (
          //   <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          // ),
        }}
      />
    </Tabs>
  );
}
