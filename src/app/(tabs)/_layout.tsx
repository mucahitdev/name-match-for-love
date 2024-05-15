import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { Tabs } from "expo-router";
// import { useColorScheme } from "react-native";

// import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  focused: boolean;
}) {
  const { focused, name } = props;
  const _name = focused ? name : name + "-outline";
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} name={_name as any} />;
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "tomato",
        tabBarLabel: ({ focused, color, children }) => {
          const fontWeight = focused ? "bold" : "normal";
          return <Text style={{ color, fontWeight }}>{children}</Text>;
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="home" color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="settings" color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}
