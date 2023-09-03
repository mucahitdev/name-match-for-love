import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import getCompatibilityResult from "src/utils/getCompatibilityResult";

export default function Result(props: any) {
  const { resultValue, firstName, secondName } = useLocalSearchParams();

  const { title, description } = getCompatibilityResult(Number(resultValue));

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title,
          headerTitleStyle: {
            fontSize: 20,
            color: Number(resultValue) > 50 ? "green" : "red",
          },
        }}
      />
      <Text style={styles.title}>{resultValue}</Text>
      <Text style={styles.description}>{description}</Text>

      <ImageBackground
        resizeMode="cover"
        source={require("../../assets/images/heart3d.jpg")}
        style={styles.image}
      >
        <View style={styles.heartArea}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{firstName}</Text>
            <Text style={styles.text}>{secondName}</Text>
          </View>
          <Text style={styles.resultHeart}>{resultValue}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 16,
  },
  image: {
    height: 300,
    width: 400,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  heartArea: {
    height: 200,
    width: 200,
    flexDirection: "column",
    paddingTop: 50,
    gap: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
  },
  resultHeart: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
