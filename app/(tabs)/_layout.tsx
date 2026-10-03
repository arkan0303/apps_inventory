import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color="#000" size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="barang"
        options={{
          title: "Barang",
          tabBarIcon: ({ color }) => (
            <Ionicons name="cube" color="#000" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="kategori"
        options={{
          title: "Kategori",
          tabBarIcon: ({ color }) => (
            <Entypo name="layers" color="#000" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="stok"
        options={{
          title: "Stok",
          tabBarIcon: ({ color }) => (
            <Feather name="trending-up" color="#000" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color }) => (
            <AntDesign name="qrcode" color="#000" size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
