import { colors } from "@/constants/Colors";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, type StyleProp, type ViewStyle } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  coontaierStyle?: StyleProp<ViewStyle>;
}

export default function Button({ title, onPress, coontaierStyle }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, coontaierStyle]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    paddingVertical: 16,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "semibold",
  },
});
