import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "react-native-paper";

import { useState } from "react";
import { calculateNameCompatibility } from "@/utils/calculateName";

import { router } from "expo-router";

export default function TabOneScreen() {
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");

  const handleButton = () => {
    if (firstName.trim() === "" || secondName.trim() === "") {
      alert("Lütfen isimleri giriniz");
      return;
    }
    const value = calculateNameCompatibility(firstName, secondName);
    router.push({
      pathname: "result",
      params: { resultValue: value, firstName, secondName },
    } as any);
  };

  return (
    <SafeAreaView style={styles.containerSafe}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.title}>İki isim arasındaki uyumu bul</Text>
        <TextInput
          placeholderTextColor={"#ADA4A5"}
          placeholder={"İlk isim"}
          style={styles.input}
          onChangeText={setFirstName}
          value={firstName}
        />
        <TextInput
          onChangeText={setSecondName}
          value={secondName}
          placeholderTextColor={"#ADA4A5"}
          placeholder={"İkinci isim"}
          style={styles.input}
        />

        <Button mode="contained" contentStyle={styles.button} onPress={handleButton}>
          Hesapla
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 48,
    padding: 16,
    backgroundColor: "#F7F8F8",
    borderRadius: 14,
    alignSelf: "stretch",
    color: "#7B6F72",
  },
  button: {
    flexDirection: "row-reverse",
  },
});
