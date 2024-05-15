import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { t } from "i18next";
import React from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

export default function WallcomeScreen() {
  return (
    <ImageBackground source={require("../../assets/images/wc-bg.jpg")} style={styles.container}>
      <LinearGradient
        colors={["rgba(255,255,255,0)", "rgba(255,255,255,0.8)", "white", "white"]}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <View style={styles.textContainer}>
          <AnimatedText entering={FadeInDown.delay(500).springify()} style={{ fontSize: 16 }}>
            {t("welcome")}
            Welcome
          </AnimatedText>
          <AnimatedText entering={FadeInDown.delay(600).springify()} style={{ fontSize: 48 }}>
            Love Test
          </AnimatedText>

          <Link href="/(tabs)" asChild replace>
            <AnimatedButton
              style={{ backgroundColor: "red", padding: 20 }}
              entering={FadeInDown.delay(800).springify()}
            >
              <Text>selo</Text>
            </AnimatedButton>
          </Link>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 64,
    gap: 16,
  },
});
