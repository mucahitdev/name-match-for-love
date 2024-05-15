import { colors } from "@/constants/Colors";
import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
  Platform,
} from "react-native";
import * as Haptics from "expo-haptics";

interface ButtonProps {
  title: string;
  onPress: () => void;
  coontaierStyle?: StyleProp<ViewStyle>;
}

export default function Button({ title, onPress, coontaierStyle }: ButtonProps) {
  const handleHaptics = async () => {
    if (Platform.OS === "web") return;
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, coontaierStyle]}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onPressIn={handleHaptics}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 16,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "semibold",
  },
});
